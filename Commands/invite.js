const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
        module.exports = { 
            name: 'invite',
            description: 'Invite Bloxtel to your server',
            execute(message, args){
            if (message.content === ';help') {
            const embed = new MessageEmbed()
			embed.setTitle("Invite Bloxtel To Your Server"),
			embed.setDescription("https://cutt.ly/bloxtel_invite")
            embed.setColor("ff0000")
            message.channel.send(embed)
        }
    }
};