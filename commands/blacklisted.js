const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { owner, version, picture } = require('../OutcastAssets/config.json');

module.exports = {
	name: 'blacklisted',
	description: 'Check who is blacklisted and why.',
	cooldown: 0,
	aliases: ['bllogs', 'devlogs'],
	execute(message, args) {
		if (!owner.includes(message.author.id)) { // ...
		        const PermissionEmbed = new MessageEmbed();
			PermissionEmbed.setTitle('Error: Missing Permisssions'),
			PermissionEmbed.addField('Error Code:', '403: Forbidden'),
			PermissionEmbed.addField('Missing Permission:', '\`\`BOT_OWNER\`\`'),
			PermissionEmbed.setFooter(`${version}`, `${picture}`),
			PermissionEmbed.setTimestamp(),
			PermissionEmbed.setColor('ff0000'),
        		message.channel.send(PermissionEmbed);
        		return
      			};
					
		if (owner.includes(message.author.id)) { // ...
			const blacklist = new db.table('blacklist'); // make a new db table
			console.log(blacklist.all());

		
		
			const LogsEmbed= new MessageEmbed();
			LogsEmbed.setTitle("Blacklisted Users"),
			LogsEmbed.setDescription(JSON.stringify(blacklist.all)),
			LogsEmbed.setTimestamp(),
			LogsEmbed.setFooter(`${version}`, `${picture}`),
			LogsEmbed.setColor(`#00000`),
			message.channel.send(LogsEmbed);
		}
	}
};