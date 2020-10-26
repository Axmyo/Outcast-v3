const { Client, MessageEmbed, Guild } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json')
module.exports = { 
    name: 'serverinfo',
    description: 'Info about a user',
    cooldown: 5,
    aliases: ['si', 'siv2', 'si2'],
    execute(message, client, args){
            const embed1 = new MessageEmbed()
            embed1.setTitle(`Info about ${message.guild.name} (This Guild).`),
            embed1.addField("Guild Name:", `${message.guild.name}`),
            embed1.addField("Guild ID:", `${message.guild.id}`),
            embed1.addField("Guild Created On:", `${message.guild.createdAt}`),
            embed1.addField("Number Of Roles:",  `${message.guild.roles}`),
            embed1.setColor("ff0000"),
            embed1.setFooter(`${version}`, `${picture}`),
            embed1.setTimestamp(),
            embed1.setThumbnail(message.guild.iconURL()),
            message.channel.send(embed1);
	}  
};
