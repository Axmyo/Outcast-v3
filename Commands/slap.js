const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');

module.exports = {
	name: 'slap',
	description: 'Ever wanted to slap one of your friends virtually? Well now you can.',
	cooldown: 5,
	aliases: ['smack', 'whap'],
	execute(message, args) {
		const PersonToSlap = message.mentions.members.first();
		const embed = new MessageEmbed();
		embed.setAuthor(message.author.tag, message.author.displayAvatarURL()),
		embed.set
		embed.setDescription(`${message.author} slaps ${PersonToSlap} excruciatingly hard. Ouch!`),
		embed.setFooter(`${version}`, `${picture}`),
		embed.setTimestamp(),
		message.channel.send(embed);

	}
};