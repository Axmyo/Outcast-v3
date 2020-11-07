const { Client, MessageEmbed } = require('discord.js');
const { owner, version, picture } = require('../OutcastAssets/config.json');
const db = require ('quick.db'); // ES5 module
const client = new Client();
module.exports = {
    name: "unblacklist",
    description: "OWNER ONLY!!!!! Ban users from using the bot.",
    cooldown: 0,
    aliases: ['unbl', 'unbotban'],
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
            return;
        };
        if (owner.includes(message.author.id)) { // ...
            const blacklist = new db.table('blacklist'); // find the db table 'blacklist'
            const user = args[0]; // the provided args --MUST-- be a user's ID
            
            let isBlacklisted = blacklist.fetch(user); // check if the user is in the bl
            if (isBlacklisted === null) // if they are not
                return message.channel.send(`${message.client.users.cache.get(user).tag} isn't in the blacklist`)
                    
            blacklist.delete(user); // set their ID in the db for bl
            
            const successembed = new MessageEmbed();
            successembed.setTitle('Success!'),
            successembed.setDescription(`Successfully removed ${message.client.users.cache.get(user).tag} from the blacklist.`),
            successembed.setFooter(`${version}`, `${picture}`),
            successembed.setTimestamp(),
            successembed.setColor('#00FF00'),
            message.channel.send(successembed);
            return;
      }  
    }
};
