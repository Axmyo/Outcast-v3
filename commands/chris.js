const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const{ version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "chris",
  description: "Out-of-context Chris.",
  cooldown: 5,
  execute(message){
    if(!message.channel.nsfw && !owner.includes(message.author.id)) {
			const NotNSFWEmbed = new MessageEmbed()
				.setTitle("Error: Channel Is Not NSFW")
				.addField("Error Code:", "403: Forbidden")
				.addField("Error Description:", "You cannot run NSFW commands in non-NSFW channels.")
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
			return message.channel.send(NotNSFWEmbed);
			
		};
    if(message.channel.nsfw || owner.includes(message.author.id)) {
      const link = "https://api.furry.bot/V2/chris";
      fetch(link)
      .then(res => res.json())
      .then(r => {
        const { images } = r;
        const ChrisEmbed = new MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Chris being funny.")
        .setImage(images[0].url)
        .setFooter(version, picture)
        .setTimestamp()
        message.channel.send(ChrisEmbed);
      });
    }
  },
};
