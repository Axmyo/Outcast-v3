const { Client, MessageEmbed, Guild } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json')
const client = new Client();
module.exports = { 
	name: 'serverinfo',
	description: 'Get info about a server.',
	cooldown: 5,
	aliases: ['si', 'siv2', 'si2'],
	execute(message, client, args){
		const ServerInfoEmbed = new MessageEmbed()
		.setTitle(`Info about ${message.guild.name} (This Guild).`)
		.addField("Guild Name:", `${message.guild.name}`)
		.addField("Guild ID:", `${message.guild.id}`)
		.addField("Guild Created On:", `${message.guild.createdAt}`)
		.addField("Number Of Roles:",  `${message.guild.roles}`)
		.setColor("#FF0000")
		.setFooter(version, picture)
		.setTimestamp()
		.setThumbnail(message.guild.iconURL())
		message.channel.send(ServerInfoEmbed);
	}  
};
