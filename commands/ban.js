const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = {
	name: "ban",
	description: "Ban's a member",
	cooldown: 0,
	aliases: ['boot'],
	execute(message, args) {
	    const member = message.mentions.members.first();

    const PermissionEmbed = new MessageEmbed()
	.setTitle('Error: Missing Permisssions')
	.addField('Error Code:', '403: Forbidden')
	.addField('Missing Permission:', '\`\`BAN_MEMBERS\`\`, \`\`ADMINISTRATOR\`\`, or Server Owner')
	.setFooter(version, picture)
	.setTimestamp()
      	.setColor('ff0000')
      
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(PermissionEmbed);


    
    const noMentionedUser = new MessageEmbed()
      .setTitle('Error: No User Mentioned')
      .addField('Error Code:', '1000')
      .addField('Error Description:', 'You didn\'t mention a user to kick.')
      .setFooter(`${version}`, `${picture}`)
      .setTimestamp()
      .setColor('ff0000')

    if (!member)
      return message.channel.send(noMentionedUser);



    const cannotBanUser = new MessageEmbed()
      .setTitle('Error: Cannot Ban User')
      .addField('Error Code:', '')
      .addField('Error Description:', '')
      .setFooter(`${version}`, `${picture}`)
      .setTimestamp()
      .setColor('ff0000')

    if (!member.bannable)
      return message.channel.send(cannotBanUser);



    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No Reason Provided.";



    const bannedEmbed = new MessageEmbed()
			.setTitle("Outcast Moderation")
			.setDescription(`You have been banned from ${message.guild.name}.`)
			.addField("Reason:", `${reason1}`)
			.addField("Moderator:", `${message.author.tag}`)
			.setFooter(`${version}`, `${picture}`)
			.setTimestamp()
      .setColor("#ff0000")

    const successEmbed = new MessageEmbed()
      .setTitle("Success!")
      .setDescription(`Successfully banned ${member}: ${reason}.`)
      .setFooter(`${version}`, `${picture}`)
      .setTimestamp()
      .setColor('00FF00')
            
    return member.send(bannedEmbed)
      .then(() => {
        member.ban({reason: `${message.author.tag}:${reason}`});
        message.channel.send(successEmbed);
      })
      .catch(() => {
        member.ban({reason: `${message.author.tag}:${reason}`});
        message.channel.send(successEmbed);
    		});
	}
};
