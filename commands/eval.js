const { MessageEmbed } = require('discord.js');
const { owner, version, picture } = require("../OutcastAssets/config.json");
module.exports = { 
  name: 'eval',
  description: 'Developer Command.',
  cooldown: 0,
  execute(message, args){
    if (!owner.includes(message.author.id)) { // ...
      const PermissionEmbed = new MessageEmbed();
      PermissionEmbed.setTitle('Error: Missing Permisssions'),
      PermissionEmbed.addField('Error Code:', '403: Forbidden'),
      PermissionEmbed.addField('Missing Permission:', '\`\`MANAGE_MESSAGES\`\`'),
      PermissionEmbed.setFooter(`${version}`, `${picture}`),
      PermissionEmbed.setTimestamp(),
      PermissionEmbed.setColor("ff0000"),
      message.channel.send(PermissionEmbed);
    }
    if (owner.includes(message.author.id)) { // ...
      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        const embed = new MessageEmbed();
        embed.setTitle("Output:"),
        embed.setDescription(evaled),
        embed.setFooter(`${version}`, `${picture}`),
        embed.setTimestamp(),
        message.channel.send(embed);
      } catch (error) {
        const ErrorEmbed = new MessageEmbed();
        ErrorEmbed.setTitle("Error!"),
        ErrorEmbed.setDescription(`An (expected) error has occured. Error: \n${error}\n`),
        ErrorEmbed.setFooter(`${version}`, `${picture}`),
        ErrorEmbed.setTimestamp(),
        ErrorEmbed.setColor("ff0000"),
        message.channel.send(ErrorEmbed);
      }
    }
  }
};
