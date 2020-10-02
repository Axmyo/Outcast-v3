const { Client, MessageEmbed } = require('discord.js');
var { version } = require('../OutcastAssets/config.json')
const client = new Client();
module.exports = { 
    name: 'userinfo',
    cooldown: 5,
    description: 'Info about a user',
    aliases: ['uiv2', 'newuserinfo', 'betaui'],
    execute(message, args){
        const embed = new MessageEmbed()
        let member = message.mentions.members.first()
        embed.setTitle(`Info about ${message.author.tag || member.user.tag}`),
        embed.addField("Name:", `${message.author.tag || member.user.tag}`)
        embed.addField("ID:", `${message.author.id || member.user.id}`)
        embed.addField("Registered:", `${message.author.createdAt || member.user.createdAt}`)
        embed.addField("Joined Server on:", ` ${message.guild.members.cache.get(message.author.id).joinedAt || member.joinedAt}`)
        embed.setColor("ff0000")
        embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
        embed.setTimestamp()
        embed.setThumbnail(`${message.author.displayAvatarURL() || member.user.displayAvatarURL()}`)
        message.channel.send(embed);
    }
};
