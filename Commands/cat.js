const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { version } = require("../OutcastAssets/config.json");

module.exports = {
  name:  "cat",
  description: "Look at random cat pics, courtesy of random.cat/meow",
  cooldown: 5,
  aliases: ['kitty', 'kitten'],
  execute(message, args){
      const link = "https://aws.random.cat/meow";
      fetch(link)
      .then(res => res.json())
      .then(body => {
        const embed = new MessageEmbed()
          embed.setColor('#FF8C00'),
          embed.setTitle('Kitty!'),
          embed.setImage(body.file),
          embed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
          embed.setTimestamp()

        message.channel.send(embed);
    });
  },
};