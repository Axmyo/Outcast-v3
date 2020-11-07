const { Client, MessageEmbed } = require('discord.js');
var { version, picture } = require("../OutcastAssets/config.json")
const client = new Client();
module.exports = { 
    name: 'help',
    description: 'Learn what commands I have to offer!',
    cooldown: 5,
    aliases: ['cmds', 'support'],
    execute(message, args){
        const embed = new MessageEmbed();
        embed.setTitle("Outcast Help Menu"),
        embed.addField("Prefix:", "Outcast "),
        embed.addField("Moderation:", "Kick, Ban, purge"),
        embed.addField("Utility:", "specs, serverinfo, avatar, userinfov1, userinfo, invite, ping"),
        embed.addField("Animals:", "Cat, Dog, Fox, Bunny, 666"),     
        embed.addField("Support Server:", "https://outcastcorp.us/Outcast/support/"),
        embed.setColor("ff0000"),
        embed.setFooter(`${version}`, `${picture}`),
        embed.setTimestamp(),
        message.channel.send(embed);
    }
};
