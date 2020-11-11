const { MessageEmbed } = require('discord.js');
const yiff = require("yiff");
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = {
	name: 'yiff',
	description: 'Furry porn.',
	cooldown: 5,
	aliases: ['furryporn'],
	async execute(message, args) {
		if(!message.channel.nsfw) {
			const NotNSFWEmbed = new MessageEmbed();
			NotNSFWEmbed.setTitle("Error: Channel Is Not NSFW"),
			NotNSFWEmbed.addField("Error Code:", "403: Forbidden"),
			NotNSFWEmbed.addField("Error Description:", "You cannot run NSFW commands in non-NSFW channels."),
			NotNSFWEmbed.setFooter(`${version}`, `${picture}`),
			NotNSFWEmbed.setTimestamp(),
			NotNSFWEmbed.setColor('ff0000'),
			message.channel.send(NotNSFWEmbed);
			return;
		};
		if(message.channel.nsfw) {
			let required = args[0];
			let yiff = require("yiff");
			let config = { 
			  creator: "Ash_#7028", 
			  name: "Outcast",
			  version: "Outcast v3.2.0"
			};
			if (!required) {
				const ErrorEmbed = new MessageEmbed();
				ErrorEmbed.setTitle("Error"),
				ErrorEmbed.setDescription("You must define tags eg ``gay``, ``lesbian``, or ``straight``. Keep in mind though that these are not the only tags!"),
				ErrorEmbed.addField("Error Code:", `404: Not Found`),
				ErrorEmbed.setFooter(`${version}`, `${picture}`),
				ErrorEmbed.setTimestamp(),
				ErrorEmbed.setColor('ff0000'),
				message.channel.send(ErrorEmbed);
				return;
			};
			let e6 = new yiff.e621(config);
			await e6.request(`${required}`).then(res => {
				const embed = new MessageEmbed();
				embed.setColor('ff0000'),
				embed.setTitle(`Yiff`),
				embed.setDescription(`**Image Link:** \n ${res.page}`),
				embed.setImage(res.image),
				embed.setFooter(`${version}`, `${picture}`),
				embed.setTimestamp(),
				message.channel.send(embed);
			});
		}
	}
};
