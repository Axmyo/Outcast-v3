const { MessageEmbed } = require('discord.js');
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = {
    	name: 'helpv2',
	description: 'Learn what commands I have to offer! <BETA>',	
    	cooldown: 5,
    	aliases: ['helpbeta', 'cmds'],
    	execute(message, args) {
        	const required = args[0].toLowerCase();
        	if (!args.length) {
			const HelpEmbed = new MessageEmbed();
			HelpEmbed.setTitle("Outcast Help Menu (v2):"),
			HelpEmbed.addField('Bot-Related', `Bot-related commands`, true)
			HelpEmbed.addField('Fun', `Commands to keep you entertained :3`, true),
			HelpEmbed.addField('Developer', `Ash's toys.`, true),
			HelpEmbed.addField('Moderation', `Commands made to keep your server safe.`, true),
			HelpEmbed.addField('NSFW', `That stuff your parents warned you about.`, true),
			HelpEmbed.addField('Utility', `You know. Helpful stuff.`, true),
			HelpEmbed.setFooter(`${version}`, `${picture}`),
			HelpEmbed.setColor('ff0000'),
			message.channel.send(HelpEmbed);
		}
            if (required === 'bot') {
                const BotHelpEmbed = new MessageEmbed();
                BotHelpEmbed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
                BotHelpEmbed.setTitle('Bot-Related'),
                BotHelpEmbed.setDescription(`**Total Commands In This Category:** 3 commands`),
                BotHelpEmbed.addField('help', `**Aliases:** cmds, helpv2 \n **Description:** ${module.exports.description}`),
                BotHelpEmbed.addField('specs', `**Aliases:** bi, botinfo, stats \n **Description:** ${message.client.commands.get('specs').description}`),
                BotHelpEmbed.addField('suggest', `**Aliases:** N/A \n **Description:** ${message.client.commands.get('suggest').description}`),
                BotHelpEmbed.setFooter(`${version}`, `${picture}`),
                BotHelpEmbed.setColor('ff0000'),
                message.channel.send(BotHelpEmbed);
                return;
            };
            if (required === 'fun') {
                const FunHelpEmbed = new MessageEmbed();
                FunHelpEmbed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`),
                FunHelpEmbed.setTitle('Fun'),
                FunHelpEmbed.setDescription(`**Total Commands In This Category:** 7 commands \n **Description:** Commands to keep you entertained.`),
                FunHelpEmbed.addField('666', `**Aliases:** wewilltakeover \n **Description:** ${message.client.commands.get('666').description}`),
                FunHelpEmbed.addField('bunny', `**Aliases:** rabbit \n **Description:** ${message.client.commands.get('bunny').description}`),
                FunHelpEmbed.addField('cat', `**Aliases:** kitty, kitten \n **Description:** ${message.client.commands.get('cat').description}`),
                FunHelpEmbed.addField('dog', `**Aliases:** doggo, puppy \n **Description:** ${message.client.commands.get('dog').description}`),
                FunHelpEmbed.addField('fox', `**Aliases:** foxxo \n **Description:** ${message.client.commands.get('fox').description}`),
                FunHelpEmbed.addField('slap', `**Aliases:** bap, smack, whap \n **Description:** ${message.client.commands.get('slap').description}`),
                FunHelpEmbed.addField('train', `**Aliases:** trainpic \n **Description:** ${message.client.commands.get('train').description}`),
                FunHelpEmbed.setFooter(`${version}`, `${picture}`),
                FunHelpEmbed.setColor('ff0000'),
                message.channel.send(FunHelpEmbed);
                return;
            };
            if (required === 'developer') {
                const DeveloperHelpEmbed = new MessageEmbed();
                DeveloperHelpEmbed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`),
                DeveloperHelpEmbed.setTitle('Developer'),
                DeveloperHelpEmbed.setDescription(`**Total Commands In This Category:** 5 commands \n **Description:** Ash's toys >:3`),
                DeveloperHelpEmbed.addField('blacklist', `**Aliases:** bl, globalban, gban \n **Description:** ${message.client.commands.get('blacklist').description}`),
                DeveloperHelpEmbed.addField('blacklisted', `**Aliases:** globalbanlist, gbanlist \n **Description:** View who had their bot usage permissions revoked.`),
                DeveloperHelpEmbed.addField('eval', `**Aliases:** N/A`),
                DeveloperHelpEmbed.addField('evalc', `**Aliases:** N/A`),
                DeveloperHelpEmbed.addField('unblacklist', `**Aliases:** unglobalban, ungban \n **Description:** ${message.client.commands.get('unblacklist').description}`),
                message.channel.send(DeveloperHelpEmbed);
                return;
            };
            if (required === 'moderation') {
                const ModerationHelpEmbed = new MessageEmbed();
                ModerationHelpEmbed.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`),
                ModerationHelpEmbed.setTitle('Moderation'),
                ModerationHelpEmbed.setDescription(`**Total Commands In This Category:** 3 commands \n **Description:** Commands made to keep your server safe.`),
                ModerationHelpEmbed.addField('ban', `**Aliases:** Placeholder, \n **Required Permissions:** \`\`BAN_MEMBERS\`\`\n**Description:** ${message.client.commands.get('ban').description}`),
                ModerationHelpEmbed.addField('kick', `**Aliases:** boot, \n **Required Permissions:** \`\`KICK_MEMBERS\`\`\n**Description:** ${message.client.commands.get('kick').description}`),
                ModerationHelpEmbed.addField('purge', `**Aliases:** prune, deletemessages \n **Required Permissions:** \`\`MANAGE_MESSAGES\`\`\n**Description:** ${message.client.commands.get('purge').description}`),
                message.channel.send(ModerationHelpEmbed);
                return;
            };
    }
};
