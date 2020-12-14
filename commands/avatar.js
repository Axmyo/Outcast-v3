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
        .setAuthor(message.author)
        .setTitle("Avatar:")
        .setImage(message.author.displayAvatarURL({format: 'png', dynamic: true, size: 512}))
        .setFooter(version, picture)
        .setTimestamp()
      message.channel.send(embed1);
    };

    message.mentions.users.map(user => {   
      const embed2 = new MessageEmbed()
        .setTitle(`${user.username}'s avatar:`)
        .setImage(user.displayAvatarURL({format: 'png', dynamic: true, size: 512}))
        .setFooter(version, picture)
        .setTimestamp()
      message.channel.send(embed2);
    });
  },
};
