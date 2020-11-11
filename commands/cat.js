const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "cat",
  description: "Look at random cat pics, courtesy of random.cat/meow",
  cooldown: '5',
  aliases: ['kitty', 'kitten'],
  execute(message, args){
      const link = "https://aws.random.cat/meow";
      fetch(link)
        .then(res => res.json())
        .then(body => {
          const CatEmbed = new MessageEmbed();
          CatEmbed.setColor('#FF8C00'),
          CatEmbed.setTitle('Kitty!'),
          CatEmbed.setImage(body.file),
          CatEmbed.setFooter(`${version}`, `${picture}`),
          CatEmbed.setTimestamp(),
          message.channel.send(CatEmbed);
      });
  },
};
