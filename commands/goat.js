const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "goat",
  description: "Look at random goat pics, courtesy of placegoat.com.",
  cooldown: 5,
  aliases: [],
  execute(message, args){
    const link = "https://placegoat.com/200/200";
    fetch(link)
    .then(res => res.json())
    .then(body => {
        const GoatEmbed = new MessageEmbed()
        	.setColor("#ffffff")
        	.setTitle("Goat!")
        	.setImage(body.file)
        	.setFooter(`${version}`, `${picture}`)
        	.setTimestamp()
        message.channel.send(GoatEmbed);
    });
  },
};
