const { Client, MessageEmbed } = require('discord.js');
const { version } = require('../OutcastAssets/config.json')
const client = new Client();
module.exports = { 
    name: 'specs',
    description: 'Look at info on the bot (me).',
    cooldown: 5,
    aliases: ['botinfo', 'bi'],
    execute(message, args){
        const embed = new MessageEmbed()
        embed.setTitle("Bot Info"),
        embed.addField("Version:", "3.1.0")
        embed.addField("Developer:", "Asher#7028")
        embed.addField("Version Type:", "Release")
        embed.addField("Last Updated:", "9/21/20")
        embed.addField("Library:", "Discord.js v12")
        embed.addField("Current Host Platform:", "Hosted on Platinum")
        embed.addField("Host Server Type:", "Raspberry Pi 4, 8 GB RAM")
        embed.setColor("ff0000")
        embed.addField("Contributors:", "Magicalbunny31#9221")
        embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png")
        embed.setThumbnail("https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=4096&.png")
        embed.setTimestamp()
        message.channel.send(embed);
    }
};
