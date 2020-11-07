const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');

module.exports = {
	name: 'slap',
	description: 'Ever wanted to slap one of your friends virtually? Well now you can.',
	cooldown: 5,
	aliases: ['smack', 'whap'],
	execute(message, args) {
		const PersonToSlap = message.mentions.members.first();
		const SlapEmbed = new MessageEmbed();
		SlapEmbed.setAuthor(message.author.tag, message.author.displayAvatarURL()),
		SlapEmbed.set
		SlapEmbed.setDescription(`${message.author} slaps ${PersonToSlap} excruciatingly hard. Ouch!`),
		SlapEmbed.setFooter(`${version}`, `${picture}`),
		SlapEmbed.setTimestamp(),
		message.channel.send(SlapEmbed);
	}
};