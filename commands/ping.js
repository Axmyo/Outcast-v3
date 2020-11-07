const { Client, MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
const client = new Client();
        module.exports = { 
        name: 'ping',
        cooldown: 5,
        aliases: ['latency'],
        description: 'Check Discord\'s API Ping and my ping.',
        async execute(message, args) {
        const m = await message.channel.send("Ping!");
        message.channel.bulkDelete(1, true)
        const embed = new MessageEmbed()
        embed.setTitle("Outcast"),
        embed.addField("Bot Latency:", `${Math.round(m.createdTimestamp - message.createdTimestamp)} ms`),
        embed.addField("API Latency:", `${Math.round(message.client.ws.ping)} ms`),    
        embed.setColor("ff0000"),
        embed.setTimestamp(),
        embed.setFooter(`${version}`, `${picture}`),
        message.channel.send(embed);
        
    }
};