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
            const TrainEmbed = new MessageEmbed();
            TrainEmbed.setColor('#0000000'),
            TrainEmbed.setTitle('Train!'),
            TrainEmbed.setImage(body.image),
            TrainEmbed.setFooter(`${version}`, `${picture}`),
            TrainEmbed.setTimestamp(),
            message.channel.send(TrainEmbed);
      });
  },
};