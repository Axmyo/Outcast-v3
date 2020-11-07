const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const{ version, picture } = require("../OutcastAssets/config.json");

module.exports = {
  'name':  "fox",
  'description': "Look at random fox pics, courtesy of randomfox.ca",
  'cooldown': '5',
  'aliases': ['foxxo'],
  execute(message, args){
      const link = "https://api.outcastcorp.us/fox/floof/";
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