const { Client, MessageEmbed } = require('discord.js');
const { version, picture } = require("../OutcastAssets/config.json")
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
        embed.setFooter(`${version}`, `${picture}`)
        embed.setTimestamp()
        message.channel.send(embed);
    }
};
