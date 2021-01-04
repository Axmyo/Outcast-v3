const { MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: "ban",
	description: "Ban's a member",
	guildonly: true,
	cooldown: 0,
	aliases: ["boot"],
	execute(message, args) {
    		const member = message.mentions.members.first();

		const PermissionEmbed = new MessageEmbed()
			.setTitle("Error: Missing Permisssions")
			.addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Missing Permission:", value: "\`\`BAN_MEMBERS\`\`, \`\`ADMINISTRATOR\`\`, or Server Owner"})
			.setFooter(version, picture)
			.setTimestamp()
			.setColor("#FF0000")
		if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(PermissionEmbed);
		else if(message.member.hasPermission("BAN_MEMBERS")) {
			const noMentionedUser = new MessageEmbed()
				.setTitle("Error: No User Mentioned")
				.addFields({name: "Error Code:", value: "1000: No User Mentioned"}, {name: "Error Description:", value: "You didn\'t mention a user to kick."})
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
			if (!member) return message.channel.send(noMentionedUser);



			const cannotBanUser = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.displayAvatarURL())
				.setTitle("Error: Cannot Ban User")
				.addField({name: "Error Code:", value: "999"}, {name: "Error Description:", value: "User either has \`\`ADMINISTRATOR\`\` or is a higher role than you are."})
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
			if (!member.bannable) return message.channel.send(cannotBanUser);

			let reason = args.slice(1).join(" ");
			if (!reason) reason = "No Reason Provided.";
			const bannedEmbed = new MessageEmbed()
				.setTitle("Outcast Moderation")
				.setDescription(`You have been banned from ${message.guild.name}.`)
				.addFields({name: "Reason:", value: reason1}, {name: "Moderator:", value: message.author.tag})
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
		
			const successEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.displayAvatarURL())	
				.setTitle("Success!")
				.setDescription(`Successfully banned ${member}: ${reason}.`)
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#00FF00")        
			return member.send(bannedEmbed)
				.then(() => {
					member.ban({reason: `${message.author.tag}:${reason}`});
					message.channel.send(successEmbed);
			})
				.catch(() => {
					member.ban({reason: `${message.author.tag}:${reason}`});
				message.channel.send(successEmbed);
			});
		}
	}
};
