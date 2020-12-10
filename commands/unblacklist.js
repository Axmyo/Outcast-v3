const { Client, MessageEmbed } = require("discord.js");
const { owner, version, picture } = require("../OutcastAssets/config.json");
const db = require ("quick.db");
module.exports = {
    name: "unblacklist",
    description: "Unban users from using the bot.",
    aliases: ['unbl', 'unbotban', 'ungban'],
    execute(message, args) {
        if (!owner.includes(message.author.id)) { // ...   
            const PermissionEmbed = new MessageEmbed()
            .setTitle("Error: Missing Permisssions")
            .addField('Error Code:', '403: Forbidden')
            .addField('Missing Permission:', '\`\`BOT_OWNER\`\`')
            .setFooter(version, picture)
            .setTimestamp()
            .setColor("#FF0000")
            return message.channel.send(PermissionEmbed);
        };
        if (owner.includes(message.author.id)) { // ...
            const blacklist = new db.table('blacklist'); // find the db table 'blacklist'
            const user = args[0]; // the provided args --MUST-- be a user's ID
            
            let isBlacklisted = blacklist.fetch(user); // check if the user is in the bl
            if (isBlacklisted === null) // if they are not
                return message.channel.send(`${message.client.users.cache.get(user).tag} isn't in the blacklist`)
                    
            blacklist.delete(user); // set their ID in the db for bl
            
            const SuccessEmbed = new MessageEmbed()
            .setTitle("Success!")
            .setDescription(`Successfully removed ${message.client.users.cache.get(user).tag} from the blacklist.`)
            .setFooter(version, picture)
            .setTimestamp()
            .setColor("#00FF00")
            return message.channel.send(SuccessEmbed);
      }  
    }
};
