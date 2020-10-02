const { Client, MessageEmbed } = require('discord.js');
var { version } = require("../OutcastAssets/config.json")
const client = new Client();
        module.exports = { 
        name: 'helpv2',
	    cooldown: 5,
        aliases: ['helpbeta', 'cmds'],
	    description: 'Learn what commands I have to offer! <BETA>',
        execute(message, args){
        const embed = new MessageEmbed()
        embed.setTitle("Outcast Help Menu:"),
        embed.addField("Prefix:", "Outcast ")
        embed.addField("<:banhammer:758703914643750942> Moderation", ""),
        embed.setColor("ff0000")
        embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png")
        embed.setTimestamp()
        message.channel.send(embed);
    }
};