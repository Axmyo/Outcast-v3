const { Client, MessageEmbed } = require('discord.js');
const { version } = require('../OutcastAssets/config.json');
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
        embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=256&.png"),
        message.channel.send(embed);
        
    }
};
