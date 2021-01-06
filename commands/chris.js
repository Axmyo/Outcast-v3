const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const{ owner, version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "chris",
  description: "Out-of-context Chris.",
  cooldown: 5,
  execute(message){
    if(!message.channel.nsfw && !owner.includes(message.author.id)) {
			const NotNSFWEmbed = new MessageEmbed()
				.setTitle("Error: Channel Is Not NSFW")
				.addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Error Description:", value: "You cannot run NSFW commands in non-NSFW channels."})
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
        .setColor("#FFFFF1")
        .setTitle("Chris is hilarious.")
        .setImage(images[0].url)
        .setFooter(version, picture)
        .setTimestamp()
        message.channel.send(ChrisEmbed);
      });
    }
  },
};
