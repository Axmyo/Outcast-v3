const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = {
	name: "kick",
	description: "Kicks a member out of a server.",
	cooldown: 0,
	async execute(message, args) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const PermissionEmbed = new MessageEmbed()
					.setTitle("Error: Missing Permisssions")
					.addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Missing Permission:", value: "\`\`KICK_MEMBERS\`\`"})
					.setFooter(version, picture)
					.setTimestamp()
					.setColor("#FF0000")
				return message.channel.send(PermissionEmbed);
			};	
			if (message.member.hasPermission("KICK_MEMBERS")) {
			const user = message.mentions.users.first();
			let reason1 = args.slice(1).join(' ');
			if(!reason1) {
				reason1 = "No Reason Provided.";
			}
			const reason = `${message.author}: ${reason}`;
			if (user) {
			  const member = message.guild.member(user);
			  if (member) {
				member
				  .kick(`${message.author.tag}: ${reason}`)
				  .then(() => {
					const SuccessEmbed = new MessageEmbed()
					SuccessEmbed.setTitle("Success!")
						.setDescription(`Successfully kicked ${member}: ${reason}.`)
						.setFooter(version, picture)
						.setTimestamp()
						.setColor('00FF00')
					message.channel.send(SuccessEmbed);
				  })
				  .catch(err => {
					const ErrorEmbed = new MessageEmbed()
						.setTitle("Error:")
						.setDescription("An unexpected error has occcured.")
						.addField("Error:", err)
						.setFooter(version, picture)
						.setTimestamp()
					message.channel.send(ErrorEmbed);
					console.error(`${guild.id}: ${err}`);
				  });
			  } else {
				const Error2 = new MessageEmbed()
					.setTitle("Error: Not Found")
					.addFields({name: "Error Code:", value: "404: Not Found"}, {name: "Error Description:", value: "The user you mentioned either doesn\'t exist or isn\'t in the guild."})
					.setFooter(version, picture)
					.setTimestamp()
					.setColor("#FF0000")
				message.channel.send(Error2);			  
			}
			} else {
				const Error3 = new MessageEmbed()
					.setTitle("Error: No User Mentioned")
					.addFields({name: "Error Code:", value: "1000"}, {name: "Error Description:", value: "You didn\'t mention a user to kick."})
					.setFooter(version, picture)
					.setTimestamp()
					.setColor("#FF0000")
				message.channel.send(Error3);
			}
		}
	},
};
