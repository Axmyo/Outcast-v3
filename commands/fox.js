const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const{ version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "fox",
  description: "Look at random fox pics, courtesy of randomfox.ca",
  cooldown: 5,
  aliases: ["foxxo"],
  execute(message){
      const link = "https://api.outcastcorp.us/fox/floof/";
      fetch(link)
      .then(res => res.json())
      .then(body => {
        const FoxEmbed = new MessageEmbed()
        .setColor("#FF8C00")
        .setTitle("Foxxo!")
        .setImage(body.image)
        .setFooter(version, picture)
        FoxEmbed.setTimestamp()
        message.channel.send(FoxEmbed);
      });
  },
};
