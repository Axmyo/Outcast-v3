const { MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: "config",
	description: "Configure Outcast for your server.",
	cooldown: 0,
	aliases: [],
	guildonly: true,
	execute(message, args) {
		let setting = args[0];
		let unrequiredstuff = args[1];
		if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No.");
		if (message.member.hasPermission("ADMINISTRATOR")) {    
			if (!setting) return message.channel.send("Error: No Setting Suplied");
			if (setting) {
			if (setting === "muterole") {
			const MuteRolePromt = new MessageEmbed()
			.setTitle("Success!")
			.setDescription(`Successfully created and configured new mute role:\nName: ${name}\nColor: ${color}\n`)
			.setFooter(version, picture)
			.setTimestamp()
			.setColor("#ff0000")
			message.channel.send(MuteRolePrompt)
			guild.roles.create({name: name, color: color, permissions: })
			},
		}
	}
};
