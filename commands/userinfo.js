const { Client, MessageEmbed, GuildMember } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
const client = new Client();
module.exports = { 
    name: 'userinfo',
    description: 'Info about a user',
    cooldown: 5,
    aliases: ['ui', 'newuserinfo', 'uiv2', 'ui2'],
    execute(message, args){
        if (message.member.presence.status === 'online') message.member.presence.status = '<:online:771508958128504863> Online';
else if (message.member.presence.status === 'idle') message.member.presence.status = '<:idle:771508986158514206> Idle';
else if (message.member.presence.status === 'dnd') message.member.presence.status = '<:dnd:771509016776933376> Do Not Disturb (DnD)';
else if (message.member.presence.status === 'offline') message.member.presence.status = '<:invisible:771509297565794304> Offline/Invisible';
        let member = message.mentions.members.first();     
        if (!member) { // ...
            const embed1 = new MessageEmbed()
            embed1.setTitle(`Info about ${message.author.tag} (You).`),
            embed1.addField("Name:", `${message.author.tag}`),
            embed1.addField("Status:", `${message.member.presence.status}`),
            embed1.addField("ID:", `${message.author.id}`),
            embed1.addField("Registered:", `${message.author.createdAt}`),
            embed1.addField("Joined Server on:", ` ${message.guild.members.cache.get(message.author.id).joinedAt}`),
            embed1.addField('Badges:', `${message.author.flags.serialize()}`),
            embed1.addField("Roles:",  `${message.member.roles.cache.map(role => role)}`),
            embed1.setColor("ff0000"),
            embed1.setFooter(`${version}`, `${picture}`),
            embed1.setTimestamp(),
            embed1.setThumbnail(`${message.author.displayAvatarURL()}`),
            message.channel.send(embed1);
        };
        message.mentions.users.map(user => {
            const embed2 = new MessageEmbed()
            embed2.setTitle(`Info about ${user.tag}.`),
            embed2.addField("Name:", `${user.tag}`),
            embed2.addField("Status:", `${message.member.presence.status}`),
            embed2.addField("ID:", `${user.id}`),
            embed2.addField("Registered:", `${user.createdAt}`),
            embed2.addField("Joined Server On:", `${message.guild.members.cache.get(user.id).joinedAt}`),
            embed2.addField('Badges:', `${GuildMember.flags.serialize()}`),
            embed2.addField("Roles:", `${message.mentions.members.first().roles.cache.map(role => role)}`),
            embed2.setColor("ff0000"),
            embed2.setFooter(`${version}`, `${picture}`),
            embed2.setTimestamp(),
            embed2.setThumbnail(`${user.displayAvatarURL()}`)
            message.channel.send(embed2);
        })
    },
};
