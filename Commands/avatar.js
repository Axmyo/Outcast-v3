const { MessageEmbed } = require('discord.js');
const { version } = require('../OutcastAssets/config.json');
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
      embed1.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
      embed1.setTimestamp()
      message.channel.send(embed1);
    };

    message.mentions.users.map(user => {   
      const embed2 = new MessageEmbed()
      embed2.setTitle(`${user.username}'s avatar:`)
      embed2.setImage(user.displayAvatarURL({format: 'png', dynamic: true, size: 4096}))
      embed2.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/717033979760345198/b6efe83ce84eb7b1d63c72fbdb0de5f0.png?size=1024")
      embed2.setTimestamp()
      message.channel.send(embed2);
    });
  },
};
