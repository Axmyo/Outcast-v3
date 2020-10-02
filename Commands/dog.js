const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { version } = require("../OutcastAssets/config.json");

module.exports = {
  'name':  "dog",
  'cooldown': '5',
  'description': "Look at random dog pics, courtesy of dog.ceo",
  execute(message, args){
      const link = "https://dog.ceo/api/breeds/image/random";
      fetch(link)
      .then(res => res.json())
      .then(body => {
        const embed = new MessageEmbed()
          embed.setColor('#FF8C00'),
          embed.setTitle('Doggo!'),
          embed.setImage(body.message),
          embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png")
          embed.setTimestamp()

        message.channel.send(embed);
    });
  },
};