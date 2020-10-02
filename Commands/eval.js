const { MessageEmbed } = require('discord.js');
var { Owner, version } = require("../OutcastAssets/config.json");

module.exports = { 
          name: 'eval',
          cooldown: 0,
          description: 'Developer Command.',
          execute(message, args){
            if(!message.author.id === Owner) return(message.channel.send("Missing Permission: ``BOT_OWNER``"))
            if(message.author.id === Owner) {
                try {
                  const code = args.join(" ");
                  let evaled = eval(code);
    
                  if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
                  const OutputEmbed = new MessageEmbed();
                  OutputEmbed.setTitle("Output:"),
                  OutputEmbed.setDescription(evaled),
                  OutputEmbed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png")
                  OutputEmbed.setTimestamp(),
                  message.channel.send(OutputEmbed);
        } catch (error) {
          const ErrorEmbed = new MessageEmbed();
          ErrorEmbed.setTitle("Error"),
          ErrorEmbed.setDescription(`An (expected) error has occured. Error: ${error}`),
          ErrorEmbed.setColor("ff0000"),
          ErrorEmbed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png"),
          ErrorEmbed.setTimestamp(),
          message.channel.send(ErrorEmbed);
      }   
    }
  }
};
