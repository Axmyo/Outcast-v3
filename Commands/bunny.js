const { MessageEmbed } = require('discord.js');
const animals = require('random-animals-api'); 
const { version } = require("../OutcastAssets/config.json");

module.exports = {
  name:  "bunny",
  description: "Look at random cat pics, courtesy of random.cat/meow",
  cooldown: 5,
  aliases: ['rabbit'],
    async execute(message, args){
        await animals.bunny().then(url => {
            const embed = new MessageEmbed()
              embed.setColor('#FFD700')
              embed.setTitle(`Bunny!`)
              embed.setDescription(`**[image link](${url})**`)
              embed.setImage(url)
              embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
              embed.setTimestamp()
            return message.channel.send(embed);
            
          }).catch((error) => {
            return console.error(error)
          });
  },
};