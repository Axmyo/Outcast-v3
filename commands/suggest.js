const { WebhookClient, MessageEmbed } = require("discord.js");
const { version, picture, WebhookID, WebhookToken } = require("../OutcastAssets/config.json");
const webhookClient = new WebhookClient(WebhookID, WebhookToken);
module.exports = {
    name: "suggest",
    description: "Suggest command ideas for the bot!",
    cooldown: 43200,
    aliases: ['submitsuggestion'],
    guildonly: true,
    async execute(message, args) { // ...
        const Suggestion = args.slice(0).join(' ');
        const SuggestionEmbed = new MessageEmbed()
        .setTitle(`Suggestion From ${message.author.tag} in Guild ${message.guild.name}.`)
        .setDescription(Suggestion)
        .setFooter(version, picture)
        .setTimestamp()
        .setThumbnail(message.guild.iconURL())
        webhookClient.send(SuggestionEmbed);
    }
};
