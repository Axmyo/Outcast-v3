const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { version, picture } = require('../OutcastAssets/config.json')

module.exports = {
    name: "setmaximum",
    description: "Set the maximum amount that someone can recieve from the work command for your server.",
    cooldown: 5,
    aliases: ['setmax', 'set-maximum', 'set-max'],
    execute(message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            const PermissionEmbed = new MessageEmbed();
            PermissionEmbed.setTitle('Error: Missing Permisssions'),
            PermissionEmbed.addField('Error Code:', '403: Forbidden'),
            PermissionEmbed.addField('Missing Permission:', '\`\`ADMINISTRATOR\`\`or Server Owner'),
            PermissionEmbed.setFooter(`${version}`, `${picture}`),
            PermissionEmbed.setTimestamp(),
            PermissionEmbed.setColor('ff0000'),
            message.channel.send(PermissionEmbed);
        }
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const maximum = args[0];
	        const GuildID = new db.table('economy');
	        GuildID.set(`Guild ID: ${message.guild.id}.maximum`, maximum);
            const SuccessEmbed = new MessageEmbed();
            SuccessEmbed.setTitle("Success!"),
            SuccessEmbed.setDescription(`Successfully set the maximum for this guild to ${maximum}.`),
            SuccessEmbed.setFooter(`${version}`, `${picture}`),
            SuccessEmbed.setTimestamp(),
            SuccessEmbed.setColor('#00FF00'),
            message.channel.send(SuccessEmbed);

        }
    },
};