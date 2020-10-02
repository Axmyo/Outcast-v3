const { Client, MessageEmbed } = require('discord.js');
const { Owner, version } = require('../OutcastAssets/config.json');
const db = require ('quick.db'); // ES5 module
// const client = new Client();
module.exports = {
    name: "unblacklist",
    description: "OWNER ONLY!!!!! Ban users from using the bot.",
    cooldown: 0,
    aliases: [],
    execute(message, args) {
        if (message.author.id !== Owner)
            return message.channel.send("Missing Permissions: OutcastCorp Staff or Bot Owner.");

        const blacklist = new db.table('blacklist'); // find the db table 'blacklist'
        const user = args[0]; // the provided args --MUST-- be a user's ID
        
        let isBlacklisted = blacklist.fetch (user); // check if the user is in the bl
        if (isBlacklisted === null) // if they are not
          return message.channel.send(`${message.client.users.cache.get(user).tag} isn't in the blacklist`)
              
        blacklist.delete (user); // set their ID in the db for bl
        
        const successembed = new MessageEmbed();
        successembed.setTitle('Success!'),
        successembed.setDescription(`Successfully removed ${message.client.users.cache.get(user).tag} from the blacklist.`),
        successembed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png"),
        successembed.setTimestamp(),
        successembed.setColor("#00FF00"),
        message.channel.send(successembed);
    }
};