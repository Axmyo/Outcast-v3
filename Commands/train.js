const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const{ version, picture } = require("../OutcastAssets/config.json");

module.exports = {
  'name':  "train",
  'description': "Look at random train pics",
  'cooldown': '5',
  'aliases': ['trainpic'],
  execute(message, args){
      const link = "https://api.outcastcorp.us/api/";
      fetch(link)
        .then(res => res.json())
        .then(body => {
          const embed = new MessageEmbed()
            embed.setColor('#FF8C00'),
            embed.setTitle('Foxxo!'),
            embed.setImage(body.image),
            embed.setFooter(`${version}`, `${picture}`),
            embed.setTimestamp(),

          message.channel.send(embed);
      });
  },
};