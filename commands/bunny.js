const { MessageEmbed } = require('discord.js');
const animals = require('random-animals-api'); 
const { version, picture } = require("../OutcastAssets/config.json");

module.exports = {
  'name':  "bunny",
  'description': "Look at bunny pics, courtesy of the random animals API.",
  'cooldown': '5',
  'aliases': ['rabbit'],
  async execute(message, args){
    await animals.bunny().then(url => {
      const embed = new MessageEmbed();      
      embed.setColor('#FFD700'),
      embed.setTitle(`Bunny!`),
      embed.setDescription(`**[image link](${url})**`),
      embed.setImage(url),
      embed.setFooter(`${version}`, `${picture}`),
      embed.setTimestamp(),
      message.channel.send(embed);
            
          }).catch((error) => {
            console.error(error)
            const ErrorEmbed = new MessageEmbed();
            ErrorEmbed.setTitle("Error!"),
            ErrorEmbed.setDescription(`An (expected) error has occured. Error: \n${error}\n`),
            ErrorEmbed.setFooter(`${version}`, `${picture}`),
            ErrorEmbed.setTimestamp(),
            message.channel.send(ErrorEmbed);
          });
  },
};