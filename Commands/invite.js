const { Client, MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = { 
    name: 'invite',
    description: 'Invite Outcast to your server',
    cooldown: 5,
    aliases: ['support'],
    execute(message, args){
        const embed = new MessageEmbed();
        embed.setTitle("Invite Outcast To Your Server:"),
        embed.addField("Stable Release:", "https://outcastcorp.us/outcast/invite"),
        embed.addField("Alpha Release", "Soon TM"),
        embed.addField("Support Server:", "https://outcastcorp.us/discord"),
        embed.setColor("ff0000"),
        embed.setFooter(`${version}`, `${picture}`),
        embed.setTimestamp(),
        message.channel.send(embed);
    }
};
