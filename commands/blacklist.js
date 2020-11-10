const { Client, MessageEmbed } = require('discord.js');
const { owner, version, picture } = require('../OutcastAssets/config.json');
const db = require ('quick.db'); // ES5 module
const client = new Client();
module.exports = {
    name: "blacklist",
    description: "BAN BAN BAN",
    cooldown: 0,
    aliases: ['bl', 'botban', 'bban', 'gban', 'globalban'],
    execute(message, args) {
      if (!owner.includes(message.author.id)) { // ...				
        const PermissionEmbed = new MessageEmbed();
	PermissionEmbed.setTitle('Error: Missing Permisssions'),
	PermissionEmbed.addField('Error Code:', '403: Forbidden'),
	PermissionEmbed.addField('Missing Permission:', '\`\`BOT_OWNER\`\`'),
	PermissionEmbed.setFooter(`${version}`, `${picture}`),
	PermissionEmbed.setTimestamp(),
	PermissionEmbed.setColor('ff0000'),
        message.channel.send(PermissionEmbed);
        return
      };
      if (owner.includes(message.author.id)) { // ...
        const blacklist = new db.table('blacklist'); // make a new db table
        const user = args[0]; // the provided args --MUST-- be a user's ID
	const reason = args.slice(1).join(' ');

        let toBeBl;
        try {
          toBeBl = message.client.users.cache.get(user).tag;
        } catch {
          return message.channel.send("That isn't a valid user.")
        }
        
        let isBlacklisted = blacklist.fetch (user);
        if (isBlacklisted !== null) {
          const ExistenentialEmbed = new MessageEmbed();
          ExistenentialEmbed.setTitle('Error: User Already Exists In Database'),
          ExistenentialEmbed.addField('Error Code:', '409: Resource already exists in the database.'),
          ExistenentialEmbed.addField('Error Description:', 'The user has already been blacklisted you DUNCE.'),
          ExistenentialEmbed.setFooter(`${version}`, `${picture}`),
          ExistenentialEmbed.setTimestamp(),
          ExistenentialEmbed.setColor('ff0000'),
          message.channel.send(ExistenentialEmbed);   
          return;
        }       
        blacklist.set (user, true, reason);
          
        const successembed = new MessageEmbed();
        successembed.setTitle('Success!'),
        successembed.setDescription(`Successfully blacklisted ${message.client.users.cache.get(user).tag} for reason ${reason}`),
        successembed.setFooter(`${version}`, `${picture}`),
        successembed.setTimestamp(),
        successembed.setColor("#00FF00"),
        message.channel.send(successembed);
        return;
      }
   },
};
