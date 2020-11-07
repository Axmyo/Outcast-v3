const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = {
	name: 'purge',
	description: 'Purge up to 99 messages.',
	execute(message, args) {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) {
			const PermissionEmbed = new MessageEmbed();
			PermissionEmbed.setTitle('Error: Missing Permisssions'),
			PermissionEmbed.addField('Error Code:', '503: Forbidden'),
			PermissionEmbed.addField('Missing Permission:', '\`\`MANAGE_MESSAGES\`\`'),
			PermissionEmbed.setFooter(`${version}`, `${picture}`),
			PermissionEmbed.setTimestamp(),
			PermissionEmbed.setColor('ff0000'),
			message.channel.send(PermissionEmbed);
		};
		if(message.member.hasPermission('MANAGE_MESSAGES')) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1) {
			return message.reply('you need to input a number over 1.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			const ErrorEmbed = new MessageEmbed();
			ErrorEmbed.setTitle("There was an error purging messages in this channel."),
			ErrorEmbed.setDescription(`While attempting to purge messages, an unknown error has occured. Please give this error to my support team: \n ${err}`),
			ErrorEmbed.setFooter(`${version}`, `${picture}`),
			ErrorEmbed.setTimestamp(),
			ErrorEmbed.setColor('ff0000'),
			message.channel.send(ErrorEmbed);
		});
}
},
};
