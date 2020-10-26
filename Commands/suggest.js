const { WebhookClient, MessageEmbed, Client } = require('discord.js');
var { version, picture, WebhookID, WebhookToken } = require('../OutcastAssets/config.json');
const webhookClient = new WebhookClient(WebhookID, WebhookToken);
const client = new Client();
module.exports = {
    name: 'suggest',
    description: 'Suggest command ideas for the bot!',
    cooldown: 5,
    aliases: ['submitsuggestion'],
    guildonly: true,
    async execute(message, args) { // ...
        const shit = args.slice(0).join(' ');
        const embed = new MessageEmbed();
        embed.setTitle(`Suggestion From ${message.author.tag} in Guild ${message.guild.name}.`), //Fix this line
        embed.setDescription(`${shit}`),
        embed.setFooter(`${version}`, `${picture}`),
        embed.setTimestamp(),
        embed.setThumbnail(message.guild.iconURL()),
        webhookClient.send(embed);
    }
};