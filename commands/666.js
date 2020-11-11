const { MessageEmbed } = require('discord.js');
const { picture } = require('../OutcastAssets/config.json');
module.exports = {
    name: '666',
    description: 'Learn what commands I have to offer!',
    cooldown: 5,
    aliases: ['wewilltakeover'],
    execute(message, args){
        const 666Embed = new MessageEmbed();
        666Embed.setTitle("666"),
        666Embed.addField("666", "666"),
        666Embed.addField("666", "666"),
        666Embed.addField("666", "666"),
        666Embed.addField("666", "666"),
        666Embed.setColor("#ff0000"),
        666Embed.setFooter("666", `${picture}`),
        666Embed.setTimestamp(),
        message.channel.send(666Embed);
    }
};
