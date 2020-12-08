const { MessageEmbed } = require('discord.js');
const { picture } = require('../OutcastAssets/config.json');
module.exports = {
    name: '666',
    description: 'Learn what commands I have to offer!',
    cooldown: 5,
    aliases: ['wewilltakeover'],
    execute(message, args){
        const 666Embed = new MessageEmbed()
        .setTitle("666")
        .addField("666", "666")
        .addField("666", "666")
        .addField("666", "666")
        .addField("666", "666")
        .setColor("#ff0000")
        .setFooter("666", `${picture}`)
        .setTimestamp()
        message.channel.send(666Embed);
    }
};
