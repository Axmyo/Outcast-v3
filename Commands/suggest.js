const { WebhookClient, MessageEmbed, Guild, Client } = require('discord.js');
var { version, WebhookID, WebhookToken } = require('../OutcastAssets/config.json');
const webhookClient = new WebhookClient(WebhookID, WebhookToken);
const client = new Client();
module.exports = {
    name: 'suggest',
    description: 'Suggest command ideas for the bot!',
    cooldown: 5,
    aliases: ['submitsuggestion'],
    execute(client, message, args) {
        const data = message.args;
        const guild = new Guild(client, data);
        const SuggestionHook = new MessageEmbed();
        SuggestionHook.setTitle(`Suggestion From ${guild.name}.`), //Fix this line
        SuggestionHook.setDescription(data),
        SuggestionHook.setFooter(`Outcast ${version}`, "https://cdn.discord.com/"),
        SuggestionHook.setTimestamp(),
        SuggestionHook.setThumbnail(guild.iconURL()),
        webhookClient.send(SuggestionHook);
    }
};