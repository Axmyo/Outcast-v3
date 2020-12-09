const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "dog",
  description: "Look at random dog pics, courtesy of dog.ceo",
  cooldown: 5,
  aliases: ['doggo', 'puppy'],
  execute(message, args){
      const link = "https://dog.ceo/api/breeds/image/random";
      fetch(link)
        .then(res => res.json())
        .then(body => {
          const DogEmbed = new MessageEmbed()
          .setColor("#FF8C00")
          .setTitle('Doggo!')
          .setImage(body.message)
          .setFooter(version, picture)
          .setTimestamp()
          message.channel.send(DogEmbed);
      });
  },
};
