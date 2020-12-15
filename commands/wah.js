const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: "wah",
	description: "Get some wahs, courtesy of somerandomapi",
	cooldown: 5,
	aliases: ["redpanda"],
	execute(message) {
		const link = "https://some-random-api.ml/img/red_panda";
        	fetch(link)
        	.then(res => res.json())
        	.then(body => {
            		const WahEmbed = new MessageEmbed()
            		.setColor("#FF0000")
            		.setTitle("Wah!")
            		.setImage(body.link)
            		.setFooter(version, picture)
            		.setTimestamp()
            		message.channel.send(WahEmbed);
      		});
	}
};
