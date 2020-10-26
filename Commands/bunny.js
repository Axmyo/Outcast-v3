const { MessageEmbed } = require('discord.js');
const animals = require('random-animals-api'); 
const { version, picture } = require("../OutcastAssets/config.json");

module.exports = {
  name:  "bunny",
  description: "Look at random cat pics, courtesy of random.cat/meow",
  cooldown: 5,
  aliases: ['rabbit'],
    async execute(message, args){
        await animals.bunny().then(url => {
            const embed = new MessageEmbed();
              embed.setColor('#FFD700'),
              embed.setTitle(`Bunny!`),
              embed.setDescription(`**[image link](${url})**`),
              embed.setImage(url),
              embed.setFooter(`${version}`, `${picture}`),
              embed.setTimestamp(),
            return message.channel.send(embed);
            
          }).catch((error) => {
            return console.error(error)
          });
  },
};
