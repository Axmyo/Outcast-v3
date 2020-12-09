const { MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = { 
        name: 'ping',
        description: 'Check Discord\'s API Ping and my ping.',
        cooldown: 5,
        aliases: ['latency'],
        async execute(message, args) {
                const m = await message.channel.send("Ping!");
                message.channel.bulkDelete(1, true)
                const PingEmbed = new MessageEmbed()
                .setTitle("Outcast")
                .addField("Bot Latency:", `${Math.round(m.createdTimestamp - message.createdTimestamp)} ms`)
                .addField("API Latency:", `${Math.round(message.client.ws.ping)} ms`)
                .setColor("#FF0000")
                .setTimestamp()
                PingEmbed.setFooter(version, picture)
                message.channel.send(PingEmbed);
    }
};
