const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name:  "decode",
	description: "Decode from binary or Base64, courtesy of SomeRandomAPI.",
	cooldown: 5,
	execute(message, args){
		const CodeType = args[0];
		const input = args[1];
		if(!CodeType) {
			const NoSettingEmbed = new MessageEmbed()
				.setTitle("Error: No Setting Supplied")
				.addField("Error Code", "1000")
				.addField("Error Description:", "You didn't send a setting.")
				.setFooter(version, picture)
			return message.channel.send(NoSettingEmbed);
		};

		if(CodeType === "Base64"||CodeType === "base64") {
    			const Base64Link = "https://some-random-api.ml/base64?decode=" + input;
    			fetch(Base64Link)
      			.then(res => res.json())
      			.then(body => {
          			const Base64EncodeEmbed = new MessageEmbed()
          				.setAuthor(message.author.tag, message.author.displayAvatarURL())
    	  				.setColor("#000000")
     	   				.setTitle("Decoded From Base64:")
     		  			.addField("Input:", input)  
   		    			.addField("Output:", body.text)
      					.setFooter(version, picture)
      	  				.setTimestamp()
   	  			return message.channel.send(Base64EncodeEmbed);
    			})
  		};
		if(CodeType === "binary"||CodeType === "Binary") {
    			const BinaryLink = "https://some-random-api.ml/binary?decode=" + input;
    			fetch(BinaryLink)
    	  		.then(res => res.json())
    	  		.then(body => {
    		      		const BinaryEncodeEmbed = new MessageEmbed()
    		      			.setAuthor(message.author.tag, message.author.displayAvatarURL())
    		  			.setColor("#000000")
    	 	   			.setTitle("Decoded From Binary:")
    	 	  			.addField("Input:", input)  
       		   			.addField("Output:", body.text)
    	  	  			.setFooter(version, picture)
      	  				.setTimestamp()
   	  			return message.channel.send(BinaryEncodeEmbed);
    			})
		};
	},
};
