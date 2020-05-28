const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'help',
            description: 'Learn what commands I have to offer!',
            execute(message, args){
            if (message.content === ';help') {
            const embed = new MessageEmbed()
            embed.setTitle("Bloxtel Help Menu"),
            embed.addField("Moderation", "Kick, Ban")
            embed.addField("Utility", "")
            embed.addField("Animals", "Cat, Dog, Fox")     
            embed.setColor("ff0000")
            message.channel.send(embed)
        }
    }
};