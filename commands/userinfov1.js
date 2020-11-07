const { DiscordAPIError } = require("discord.js");

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
	module.exports = {
		name: 'userinfov1',
		description: 'Display info about yourself.',
		cooldown: 5,
		aliases: ['uiv1', 'olduserinfo'],
		execute(message) {
			message.channel.send(`Your username: ${message.author.username}\n
			Your ID: ${message.author.id}`);
		},
};