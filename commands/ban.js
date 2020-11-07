const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = {
    name: "ban",
    description: "Ban's a member",
    cooldown: 0,
    aliases: [],
    execute(message){
if (!message.member.hasPermission("BAN_MEMBERS")) {
  const PermissionEmbed = new MessageEmbed();
  PermissionEmbed.setTitle('Error: Missing Permisssions'),
  PermissionEmbed.addField('Error Code:', '403: Forbidden'),
  PermissionEmbed.addField('Missing Permission:', '\`\`BAN_MEMBERS\`\`, \`\`ADMINISTRATOR\`\`, or Server Owner'),
  PermissionEmbed.setFooter(`${version}`, `${picture}`),
  PermissionEmbed.setTimestamp(),
  PermissionEmbed.setColor('ff0000'),
  message.channel.send(PermissionEmbed);
}
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const user = message.mentions.users.first();
      if (user) {
        const reason = args.slice(1).join(' ');
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          member
            .ban({
              reason: reason,
            })
            .then(() => {
					const SuccessEmbed = new MessageEmbed();
					SuccessEmbed.setTitle("Success!"),
					SuccessEmbed.setDescription(`Successfully kicked ${member}: ${reason}.`),
					SuccessEmbed.setFooter(`${version}`, `${picture}`),
					SuccessEmbed.setTimestamp(),
					SuccessEmbed.setColor('00FF00'),
					message.channel.send(SuccessEmbed);
            })
            .catch(err => {
		const ErrorEmbed = new MessageEmbed();
		ErrorEmbed.setTitle("Error."),
		ErrorEmbed.setDescription("An unexpected error has occcured."),
		ErrorEmbed.addField("Error (Give to my support team please):", `${err}`),	
		ErrorEmbed.setFooter(`${version}`, `${picture}`),	
		ErrorEmbed.setTimestamp(),
		message.channel.send(ErrorEmbed);
		console.error(`${guild.id}: ${err}`);
            });
        } else {
  const PermissionEmbed = new MessageEmbed();
  PermissionEmbed.setTitle('Error: User Not Found'),
  PermissionEmbed.addField('Error Code:', '404: Not Found'),
  PermissionEmbed.addField('Solution:', 'Try running \`\`Outcast hackban\`\` (WARNING: NOT RELEASED YET!!!)'),
  PermissionEmbed.setFooter(`${version}`, `${picture}`),
  PermissionEmbed.setTimestamp(),
  PermissionEmbed.setColor('ff0000'),
  message.channel.send(PermissionEmbed);
        }
      } else {
        // Otherwise, if no user was mentioned
				const Error3 = new MessageEmbed();
				Error3.setTitle('Error: No User Mentioned'),
				Error3.addField('Error Code:', ''),
				Error3.addField('Error Description:', 'You didn\'t mention a user to kick.'),
				Error3.setFooter(`${version}`, `${picture}`),
				Error3.setTimestamp(),
				Error3.setColor('ff0000'),
				message.channel.send(Error3);	      
}
    }
  }
};