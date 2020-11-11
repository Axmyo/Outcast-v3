const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: '666',
    cooldown: 5,
    description: 'Learn what commands I have to offer!',
    execute(message, args){
        const embed = new MessageEmbed();
        embed.setTitle("666"),
        embed.addField("666", "666"),
        embed.addField("666", "666"),
        embed.addField("666", "666"),
        embed.addField("666", "666"),
        embed.setColor("#ff0000"),
        embed.setFooter("666", "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024"),
        embed.setTimestamp(),
        message.channel.send(embed);
    }
};
