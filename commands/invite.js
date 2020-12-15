const { Client, MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = { 
	name: "invite",
	description: "Invite Outcast to your server.",
	cooldown: 5,
	execute(message, args){
		const InviteEmbed = new MessageEmbed()
			.setTitle("Invite Outcast To Your Server")
			.addField("Stable Release:", "https://outcastcorp.us/outcast/invite")
			.addField("Alpha Release", "Soon:tm:")
			.addField("Support Server:", "https://outcastcorp.us/discord")
			.setColor("#FF0000")
			.setFooter(version, picture)
			.setTimestamp()
		message.channel.send(InviteEmbed);
	}
};
