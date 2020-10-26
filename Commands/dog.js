const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { version, picture } = require("../OutcastAssets/config.json");

module.exports = {
  'name':  "dog",
  'description': "Look at random dog pics, courtesy of dog.ceo",
  'cooldown': '5',
  'aliases': ['puppy', 'doggo'],
      execute(message, args){
      const link = "https://dog.ceo/api/breeds/image/random";
      fetch(link)
      .then(res => res.json())
      .then(body => {
        const embed = new MessageEmbed();
          embed.setColor('#FF8C00'),
          embed.setTitle('Doggo!'),
          embed.setImage(body.message),
          embed.setFooter(`${version}`, `${picture}`),
          embed.setTimestamp(),
          message.channel.send(embed);
    });
  },
};
