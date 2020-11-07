const { MessageEmbed } = require('discord.js');
const { version, picture } = require('../OutcastAssets/config.json');
module.exports = {
  name: 'avatar',
  description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
  cooldown: 5,
  aliases: ['icon', 'pfp'],
  execute(message, args) {
      let member = message.mentions.members.first();     
      if (!member) { // ...
      const embed1 = new MessageEmbed()
      embed1.setAuthor(message.author),
      embed1.setTitle("Avatar:"),
      embed1.setImage(message.author.displayAvatarURL({format: 'png', dynamic: true, size: 4096}))
      embed1.setFooter(`${version}`, `${picture}`)
      embed1.setTimestamp()
      message.channel.send(embed1);
    };

    message.mentions.users.map(user => {   
      const embed2 = new MessageEmbed()
      embed2.setTitle(`${user.username}'s avatar:`)
      embed2.setImage(user.displayAvatarURL({format: 'png', dynamic: true, size: 4096}))
      embed2.setFooter(`${version}`, `${picture}`)
      embed2.setTimestamp()
    message.channel.send(embed2);
    });
  },
};