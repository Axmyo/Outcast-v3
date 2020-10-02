const { Client, MessageEmbed } = require('discord.js');
var { prefix } = require("../OutcastAssets/config.json")
const client = new Client();
module.exports = { 
    name: 'help',
    cooldown: 5,
    description: 'Learn what commands I have to offer!',
    execute(message, args){
        const embed = new MessageEmbed()
        embed.setTitle("Outcast Help Menu"),
        embed.addField("Prefix:", "Outcast ")
        embed.addField("Moderation:", "Kick, Ban, purge")
        embed.addField("Utility:", "specs, serverinfo, avatar, userinfo, userinfov2 (BETA), invite, ping, support")
        embed.addField("Animals:", "Cat, Dog, Fox, Bunny, 666")     
        embed.setColor("ff0000")
        embed.setFooter("Outcast V3.1.0", "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png")
        embed.setTimestamp()
        message.channel.send(embed)
    }
};
