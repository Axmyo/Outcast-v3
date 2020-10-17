const { Client, MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
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
                const embed = new MessageEmbed()
                            
                embed.setTitle("Bot Info"),
                embed.setDescription("Changelog: Coming Soon!"),
                embed.addField("Version:", `${version}`)
                embed.addField("Developer:", "Asher#7028")
                embed.addField("Version Type:", "Release")
                embed.addField("Last Updated:", "9/21/20")
                embed.addField("Library:", "Discord.js v12")
                embed.addField("Current Host Server:", `${hostname}`)
                embed.addField("Host Server Type:", "Raspberry Pi 4, 8 GB RAM")
                embed.addField("Uptime:", `${uptime} `)
                embed.setColor("ff0000")
                embed.addField("Contributors:", `${message.client.users.cache.get('490178047325110282').tag} - Helped with a lot of command fixes.`)
                embed.setFooter(`${version}`, `${picture}`)
                embed.setThumbnail(`${picture}`)
                embed.setTimestamp()
                message.channel.send(embed)
    }    
};
