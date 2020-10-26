const { Client, MessageEmbed } = require('discord.js');
const { version, picture } = require("../OutcastAssets/config.json")
module.exports = {
    name: 'help',
    cooldown: 5,
    description: 'Learn what commands I have to offer!',
    execute(message, args){
        const embed = new MessageEmbed();
        embed.setTitle("Outcast Help Menu"),
        embed.addField("Prefix:", "Outcast "),
        embed.addField("Moderation:", "ban, kick, purge"),
        embed.addField("Utility:", "specs, serverinfo, avatar, userinfov1 (OUTDATED), userinfo, invite, ping"),
        embed.addField("Animals:", "bunny, cat, dog, fox, 666"),
        embed.addField("Developer:", "blacklist, eval, unblacklist"),
        embed.setColor("ff0000"),
        embed.setFooter(`${version}`, `${picture}`),
        embed.setTimestamp(),
        message.channel.send(embed);
    }
};
