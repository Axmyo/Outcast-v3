const { Client, MessageEmbed } = require('discord.js');
var { version } = require('../OutcastAssets/config.json');
const client = new Client();
module.exports = { 
    name: 'invite',
    description: 'Invite Outcast to your server',
    cooldown: 5,
    execute(message, args){
        const embed = new MessageEmbed()
        embed.setTitle("Invite Outcast To Your Server"),
        embed.addField("Stable Release:", "https://outcastcorp.us/outcast/invite")
        embed.addField("Alpha Release", "Soon TM")
        embed.addField("Support Server:", "https://outcastcorp.us/discord")
        embed.setColor("ff0000")
        embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=256&.png")
        embed.setTimestamp()
        message.channel.send(embed);
    }
};
