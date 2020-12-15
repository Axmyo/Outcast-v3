const { Client, MessageEmbed, GuildMember } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
const client = new Client();
module.exports = { 
    name: "userinfo",
    description: "Get info about a user or yourself.",
    cooldown: 5,
    aliases: ["ui", "newuserinfo", "uiv2", "ui2"],
    execute(message, args){
        if (message.member.presence.status === 'online') message.member.presence.status = "<:online:771508958128504863> Online";
        else if (message.member.presence.status === 'idle') message.member.presence.status = "<:idle:771508986158514206> Idle";
        else if (message.member.presence.status === 'dnd') message.member.presence.status = "<:dnd:771509016776933376> Do Not Disturb (DnD)";
        else if (message.member.presence.status === 'offline') message.member.presence.status = "<:invisible:771509297565794304> Offline/Invisible";
        let member = message.mentions.members.first();     
        if (!member) { // ...
            const embed1 = new MessageEmbed()
            .setTitle(`Info about ${message.author.tag} (You).`)
            .addField("Name:", message.author.tag)
            .addField("Status:", message.member.presence.status)
            .addField("ID:", message.author.id)
            .addField("Registered:", message.author.createdAt)
            .addField("Joined Server on:", message.guild.members.cache.get(message.author.id).joinedAt)
            .addField("Badges:", message.author.flags.serialize())
            .addField("Roles:",  message.member.roles.cache.map(role => role))
            .setColor("#FF0000")
            .setFooter(version, picture)
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed1);
        };
        message.mentions.users.map(user => {
            const embed2 = new MessageEmbed()
            .setTitle(`Info about ${user.tag}.`)
            .addField("Name:", user.tag)
            .addField("Status:", message.member.presence.status)
            .addField("ID:", user.id)
            .addField("Registered:", user.createdAt)
            .addField("Joined Server On:", message.guild.members.cache.get(user.id).joinedAt)
            .addField("Badges:", GuildMember.flags.serialize())
            .addField("Roles:", message.mentions.members.first().roles.cache.map(role => role))
            .setColor("#FF0000")
            .setFooter(version, picture)
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL())
            message.channel.send(embed2);
        })
    },
};
