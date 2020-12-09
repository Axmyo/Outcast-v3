const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { prefix, version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: "prefix",
	description: "Change the bot's prefix for your server.",
	cooldown: 60,
	aliases: ["setprefix"],
	async execute(message, args) {
    		const guildDB = new db.table("guilds"); // prefix variable, for easy reading :3
	    	let setting = args[0];
		let providedPrefix = args[1];
		if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No.");
		if (message.member.hasPermission("ADMINISTRATOR")) {    
			if (!setting) {
    				return message.channel.send("Error: No Setting Suplied"); 
    			}
    			if (args[2]) {
      				if (args[2] === "-s") {
        				providedPrefix = `${providedPrefix} `;	
				} else {
        				const UsedSpaceInsteadOfFlagEmbed = new MessageEmbed()
					.setTitle("Error: Attempted To Use Actual Space Instead of Flag")
					.addField("Error Code",  "600")
					.addField("Possible Fixes:", `When supplying a prefix with a space, add the space then \`-s\`.`)
					.setFooter(version, picture)
					.setColor("#FF0000")
					.setTimestamp()
					message.channel.send(UsedSpaceInsteadOfFlagEmbed);
			      	};
    				if (setting) {
      					if (setting === "set") {
        					await guildDB.set(`${message.channel.guild.id}.prefix`, providedPrefix);
						const SetSuccessEmbed = new MessageEmbed()
						.setTitle("Success!")
						.setDescription(`Successfully set ${message.guild.name}\`s prefix to ${providedPrefix}.`)
						.setFooter(`${version}`, `${picture}`)
						.setColor("#39FF14")
						.setTimestamp()
						message.channel.send(SetSuccessEmbed);
      					}
					if (setting === "reset") {
						await guildDB.delete(`${message.channel.guild.id}.prefix`);
						const ResetSuccessEmbed = new MessageEmbed()
						ResetSuccessEmbed.setTitle("Success!")
						.setDescription(`Successfully reset ${message.guild.name}\`s prefix to the default prefix (\`\`Outcast \`\`).`)
						.setFooter(version, picture)
						.setColor("#39FF14")
						.setTimestamp()
						message.channel.send(ResetSuccessEmbed);
						return;
					}
			    	};    
			}
  		}
	}
};
