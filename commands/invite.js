const { MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = { 
    name: "invite",
    description: "Invite Outcast to your server.",
    cooldown: 5,
    execute(message){
        const InviteEmbed = new MessageEmbed()
        .setTitle("Invite Outcast To Your Server")
        .addFields({name: "Stable Release:", value: "https://outcastcorp.us/outcast/invite"}, {name: "Alpha Release:", value: "Soon:tm:"}, {name: "Support Server:", value: "https://outcastcorp.us/discord"})
        .setColor("#FF0000")
        .setFooter(version, picture)
        .setTimestamp()
        message.channel.send(InviteEmbed);
    }
};
