const { MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: 'purge',
	description: 'Purge up to 99 messages.',
	execute(message, args) {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) {
			const PermissionEmbed = new MessageEmbed()
			.setTitle("Error: Missing Permisssions")
			.addField('Error Code:', '503: Forbidden')
			.addField('Missing Permission:', '\`\`MANAGE_MESSAGES\`\`')
			.setFooter(version, picture)
			.setTimestamp()
			.setColor("#FF0000")
			return message.channel.send(PermissionEmbed);
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
			const ErrorEmbed = new MessageEmbed()
			.setTitle("There was an error purging messages in this channel.")
			.setDescription(`While attempting to purge messages, an unknown error has occured. Please give this error to my support team: \n ${err}`)
			.setFooter(version, picture)
			.setTimestamp()
			.setColor("#FF0000")
			return message.channel.send(ErrorEmbed);
		});
		}
	},
};
