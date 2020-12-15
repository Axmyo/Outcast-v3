const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const{ version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "train",
  description: "Look at random train pics.",
  cooldown: 5,
  aliases: ["trainpic"],
  execute(message){
      const link = "https://api.outcastcorp.us/api/";
      fetch(link)
        .then(res => res.json())
        .then(body => {
            const TrainEmbed = new MessageEmbed()
            .setColor("#000000")
            .setTitle("Train!")
            .setImage(body.image)
            .setFooter(version, picture)
            .setTimestamp()
            message.channel.send(TrainEmbed);
      });
  },
};
