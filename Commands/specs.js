const { Client, MessageEmbed } = require('discord.js');
const { version, picture, LastUpdated } = require('../OutcastAssets/config.json');
const { execSync } = require('child_process');
const hostname = execSync ('hostname').toString();
const client = new Client();
        module.exports = { 
            name: 'specs',
            description: 'Look at info on me.',
            cooldown: 5,
            aliases: ['botinfo', 'bi'],
            execute(message, args){
                let totalSeconds = (message.client.uptime / 1000);
                const days = Math.floor(totalSeconds / 86400);
                totalSeconds %= 86400;
                const hours = Math.floor(totalSeconds / 3600);
                totalSeconds %= 3600;
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = Math.floor(totalSeconds % 60);
                const uptime = `${days} days, ${hours} hours, ${minutes} minutes, ${Math.round(seconds)} seconds`;
                const embed = new MessageEmbed();
                embed.setTitle("Bot Info"),
                embed.setDescription("Changelog: Coming Soon!"),
                embed.addField("Version:", `${version}`),
                embed.addField("Developer:", `${message.client.users.cache.get('613527205103927367').tag} and ${message.client.users.cache.get('490178047325110282').tag}`),
                embed.addField("Version Type:", "Alpha"),
                embed.addField("Last Updated:", `${LastUpdated}`),
                embed.addField("Library:", "Discord.js v12"),
                embed.addField("Current Host Server:", `${hostname}`),
                embed.addField("Host Server Type:", "Raspberry Pi 4, 8 GB RAM"),
                embed.addField("Uptime:", `${uptime} `),
                embed.setColor("ff0000"),
                embed.setFooter(`${version}`, `${picture}`),
                embed.setThumbnail(`${picture}`),
                embed.setTimestamp()
                message.channel.send(embed)
    }    
};
