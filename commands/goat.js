const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "goat",
  description: "Look at random goat pics, courtesy of goatbot.io",
  cooldown: 5,
  execute(message){
    const link = "https://goatbot.io/api/random/goat.json";
    fetch(link, { headers: { 'X-Goat-Token': "No"}})
      .then(res => res.json())
      .then(body => {
          const GoatEmbed = new MessageEmbed()
    	      .setColor("#ffffff")
     	      .setTitle("Goat!")
      	    .setImage(body.image)
      	    .setFooter(version, picture)
      	    .setTimestamp()
   	      message.channel.send(GoatEmbed);
    })
  },
};
