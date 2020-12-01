const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { prefix, version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name: "prefix",
  description: "Change the bot's prefix for your server.",
  cooldown: 0,
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
        const UsedSpaceInsteadOfFlagEmbed = new MessageEmbed();
        UsedSpaceInsteadOfFlagEmbed.setTitle("Error: Attempted To Use Actual Space Instead of Flag"),
        UsedSpaceInsteadOfFlagEmbed.addField("Error Code",  `600`),
        UsedSpaceInsteadOfFlagEmbed.addField("Possible Fixes:", `When supplying a prefix with a space, add the space then \`-s\`.`),
        UsedSpaceInsteadOfFlagEmbed.setFooter(`${version}`, `${picture}`),
        UsedSpaceInsteadOfFlagEmbed.setColor("#ff0000"),
        UsedSpaceInsteadOfFlagEmbed.setTimestamp(),
        message.channel.send(UsedSpaceInsteadOfFlagEmbed);
      };
    if (setting) {
      if (setting === "set") {
        await guildDB.set(`${message.channel.guild.id}.prefix`, providedPrefix);
        const SetSuccessEmbed = new MessageEmbed();
        SetSuccessEmbed.setTitle("Success!"),
        SetSuccessEmbed.setDescription(`Successfully set ${message.guild.name}\`s prefix to ${providedPrefix}.`),
        SetSuccessEmbed.setFooter(`${version}`, `${picture}`),
        SetSuccessEmbed.setColor("#39FF14"),
        SetSuccessEmbed.setTimestamp(),
        message.channel.send(SetSuccessEmbed);
      }
      if (setting === "reset") {
        await guildDB.delete(`${message.channel.guild.id}.prefix`);
        const ResetSuccessEmbed = new MessageEmbed();
        ResetSuccessEmbed.setTitle("Success!"),
        ResetSuccessEmbed.setDescription(`Successfully reset ${message.guild.name}\`s prefix to ${prefix}.`),
        ResetSuccessEmbed.setFooter(`${version}`, `${picture}`),
        ResetSuccessEmbed.setColor("#39FF14"),
        ResetSuccessEmbed.setTimestamp(),
        message.channel.send(ResetSuccessEmbed);
        return;
      }
    };    
			}
  		}
	}
};
