const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "base64",
  description: "Decode from Base64, courtesy of SomeRandomAPI.",
  cooldown: 5,
  execute(message, args){
    const setting = args[1];
    const input = args.join(' ');
    const link = "https://some-random-api.ml/base64?decode=" + input;
    fetch(link)
      .then(res => res.json())
      .then(body => {
          const Embed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
    	      .setColor("#000000")
     	      .setTitle("Decoded From Base64: ")
      	  .addField("Input:", input)  
          .addField("Output:", body.text)
      	    .setFooter(version, picture)
      	    .setTimestamp()
   	      message.channel.send(Embed);
    })
  },
};
