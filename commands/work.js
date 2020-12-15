const { MessageEmbed, Guild } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "work",
    description: "Work for money with this command.",
    cooldown: 5,
    execute(message) {
        const GuildID = message.guild.id;
        const guildID = new db.table(GuildID);
        
	guildID.add(message.author.id, )

    }
};
