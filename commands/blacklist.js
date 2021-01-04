const { MessageEmbed } = require("discord.js");
const { owner, version, picture } = require("../OutcastAssets/config.json");
const db = require ("quick.db");
module.exports = {
	name: "blacklist",
	description: "BAN BAN BAN",
	cooldown: 0,
	aliases: ["bl", "botban", "bban", "gban", "globalban"],	
	execute(message, args) {
		if (!owner.includes(message.author.id)) { // ...				
			const PermissionEmbed = new MessageEmbed()
				.setTitle("Error: Missing Permisssions")
				.addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Missing Permission:", value: "\`\`BOT_OWNER\`\`"})
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
			return message.channel.send(PermissionEmbed);
		};
		if (owner.includes(message.author.id)) { // ...
			const blacklist = new db.table('blacklist'); // make a new db table
			const user = args[0]; // the provided args --MUST-- be a user's ID
			const reason = args.slice(1).join(' ');

			let toBeBl;
			try {
				toBeBl = message.client.users.cache.get(user).tag;
			} catch {
				return message.channel.send("That isn't a valid user.")
			}

			let isBlacklisted = blacklist.fetch (user);
			if (isBlacklisted !== null) {
				const ExistenentialEmbed = new MessageEmbed()
					.setTitle("Error: User Already Exists In Database")
					.addFields({name: "Error Code:", value: "409: User already exists in the database."}, {name: "Error Description:", value: "The user has already been blacklisted you DUNCE."})
					.setFooter(version, picture)
					.setTimestamp()
					.setColor("#FF0000")
				return message.channel.send(ExistenentialEmbed);
			}
			blacklist.set(user, true, reason);

			const SuccessEmbed = new MessageEmbed()
				.setTitle("Success!")
				.setDescription(`Successfully blacklisted ${message.client.users.cache.get(user).tag}: ${reason}.`)
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#00FF00")
			return message.channel.send(SuccessEmbed);
		}
	},
};
