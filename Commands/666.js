const { Client, MessageEmbed } = require('discord.js');
const { picture } = require('../OutcastAssets/config.json');
module.exports = { 
    name: '666',
    description: '666',
    cooldown: 5,
    aliases: ['wewilltakeover'],
    execute(message, args){
        const embed = new MessageEmbed();
        embed.setTitle("666"),
        embed.addField("666", "666"),
        embed.addField("666", "666"),
        embed.addField("666", "666"),
        embed.addField("666", "666"),   
        embed.setColor("ff0000"),
        embed.setFooter("666", `${picture}`),
        embed.setTimestamp(),
        message.channel.send(embed);
    }
};
