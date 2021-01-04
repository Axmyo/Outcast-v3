const { MessageEmbed } = require("discord.js");
const { picture } = require("../OutcastAssets/config.json");
module.exports = {
    name: "666",
    description: "666",
    cooldown: 5,
    aliases: ["wewilltakeover"],
    execute(message){
        const Embed = new MessageEmbed()
            .setTitle("666")
            .addFields({name: "666", value: "666"}, {name: "666", value: "666"}, {name: "666", value: "666"}, {name: "666", value: "666"})
            .setColor("#FF0000")
            .setFooter("666", picture)
            .setTimestamp()
        message.channel.send(Embed);
    }
};
