const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { owner, version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: "blacklisted",
	description: "Check who is blacklisted and why.",
	cooldown: 0,
	aliases: ["bllogs", "gbanlogs"],
	execute(message, args) {
		if (!owner.includes(message.author.id)) { // ...
		        const PermissionEmbed = new MessageEmbed()
				.setTitle("Error: Missing Permisssions")
				.addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Missing Permission:", value: '\`\`BOT_OWNER\`\`'})
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
        		return message.channel.send(PermissionEmbed);
      			};
		if (owner.includes(message.author.id)) { // ...
			const blacklist = new db.table('blacklist'); // make a new db table		
			const LogsEmbed = new MessageEmbed()
			.setTitle("Blacklisted Users")
			.setDescription(JSON.stringify(blacklist.all))
			.setTimestamp()
			.setFooter(version, picture)
			.setColor("#00000")
			message.channel.send(LogsEmbed);
		}
	}
};
