const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { version } = require("../OutcastAssets/config.json");

module.exports = {
  'name':  "fox",
  'cooldown': '5',
  'description': "Look at random fox pics, courtesy of randomfox.ca",
  execute(message, args){
      const link = "https://randomfox.ca/floof/";
      fetch(link)
      .then(res => res.json())
      .then(body => {
        const embed = new MessageEmbed()
          embed.setColor('#FF8C00'),
          embed.setTitle('Fox!'),
          embed.addField('Inline field title', 'Some value here', true),
          embed.setImage(body.image),
          embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png")
          embed.setTimestamp()

        message.channel.send(embed);
    });
  },
};