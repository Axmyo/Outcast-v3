const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = { 
        name: 'ping',
        cooldown: 5,
        aliases: ['latency'],
        description: 'Check Discord\'s API Ping and my ping.',
        async execute(message, args) {
        const m = await message.channel.send("Ping!");
        message.channel.bulkDelete(1, true)
        const PingEmbed = new MessageEmbed()
        PingEmbed.setTitle("Outcast"),
        PingEmbed.addField("Bot Latency:", `${Math.round(m.createdTimestamp - message.createdTimestamp)} ms`),
        PingEmbed.addField("API Latency:", `${Math.round(message.client.ws.ping)} ms`),    
        PingEmbed.setColor("ff0000"),
        PingEmbed.setTimestamp(),
        PingEmbed.setFooter(`${version}`, `${picture}`),
        message.channel.send(PingEmbed);
    }
};
