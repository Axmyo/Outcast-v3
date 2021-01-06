const { MessageEmbed } = require("discord.js");
const { owner, version, picture } = require("../OutcastAssets/config.json");
module.exports = { 
  name: "eval",
  description: "Evaluate JavaScript code.",
  cooldown: 0,
  execute(message, args){
    if (!owner.includes(message.author.id)) { // ...
      const PermissionEmbed = new MessageEmbed()
        .setTitle("Error: Missing Permisssions")
        .addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Missing Permission:", value: "\`\`BOT_OWNER\`\`"})
        .setFooter(version, picture)
        .setTimestamp()
        .setColor("#FF0000")
      return message.channel.send(PermissionEmbed);
    };
    if (owner.includes(message.author.id)) { // ...
      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

        const OutputEmbed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .addFields({name: "Input:", value: code}, {name: "Output:", value: evaled})
          .setFooter(version, picture)
          .setTimestamp()
        message.channel.send(OutputEmbed);
      } catch (error) {
          const ErrorEmbed = new MessageEmbed()
            .setTitle("Error!")
            .setDescription("An error has occured.")
            .addField("Error:", error)
            .setFooter(version, picture)
            .setTimestamp()
            .setColor("#FF0000")
          message.channel.send(ErrorEmbed);
      }
    }
  }
};
