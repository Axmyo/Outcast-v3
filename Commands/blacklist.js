const { Client, MessageEmbed } = require('discord.js');
const { owner, version } = require('../OutcastAssets/config.json');
const db = require ('quick.db'); // ES5 module
// const client = new Client();
module.exports = {
    name: "blacklist",
    description: "OWNER ONLY!!!!! Ban users from using the bot.",
    cooldown: 0,
    aliases: ['bl', 'botban', 'bban'],
    execute(message, args) {
        if (message.author.id !== owner)
            return message.channel.send("Missing Permissions: OutcastCorp Staff or Bot Owner.");
        if (message.author.id === owner) {

        const blacklist = new db.table('blacklist'); // make a new db table
        const user = args[0]; // the provided args --MUST-- be a user's ID

        let toBeBl;
        try {
          toBeBl = message.client.users.cache.get(user).tag;
        } catch {
          return message.channel.send("That isn't a valid user.")
        }
        
        let isBlacklisted = blacklist.fetch (user);
        if (isBlacklisted !== null)
            return message.channel.send(`${message.client.users.cache.get(user).tag} is already blacklisted.`);
              
        blacklist.set (user, true);
          
        const successembed = new MessageEmbed();
        successembed.setTitle('Success!'),
        successembed.setDescription(`Successfully blacklisted ${message.client.users.cache.get(user).tag}.`),
        successembed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png"),
        successembed.setTimestamp(),
        successembed.setColor("#00FF00"),
        message.channel.send(successembed);
    )
  }
};
