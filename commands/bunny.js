const { MessageEmbed } = require("discord.js");
const animals = require("random-animals-api"); 
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
  name:  "bunny",
  description: "Look at bunny pics, courtesy of the random animals API.",
  cooldown: '5',
  aliases: ['rabbit'],
  async execute(message, args){
  await animals.bunny().then(url => {
    const BunnyEmbed = new MessageEmbed()
    .setColor("#FFD700")
    .setTitle(`Bunny!`)
    .setDescription(`**[image link](${url})**`)
    .setImage(url)
    .setFooter(`${version}`, `${picture}`)
    .setTimestamp()
    message.channel.send(BunnyEmbed);
    }).catch((error) => {
      console.error(error)
      const ErrorEmbed = new MessageEmbed()
      .setTitle("Error!")
      .setDescription(`An (expected) error has occured. Error: \n${error}\n`)
      .setFooter(`${version}`, `${picture}`)
      .setTimestamp()
      .setColor("#FF0000")
      message.channel.send(ErrorEmbed);
      });
  },
};
