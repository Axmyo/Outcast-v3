const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const{ version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "fox",
  description: "Look at random fox pics, courtesy of randomfox.ca",
  cooldown: '5',
  aliases: ['foxxo'],
  execute(message, args){
      const link = "https://api.outcastcorp.us/fox/floof/";
      fetch(link)
      .then(res => res.json())
      .then(body => {
        const FoxEmbed = new MessageEmbed();
        FoxEmbed.setColor('#FF8C00'),
        FoxEmbed.setTitle('Foxxo!'),
        FoxEmbed.setImage(body.image),
        FoxEmbed.setFooter(`${version}`, `${picture}`),
        FoxEmbed.setTimestamp(),
        message.channel.send(FoxEmbed);
      });
  },
};
