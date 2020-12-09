const { MessageEmbed } = require("discord.js");
const { version, picture, changelog } = require("../OutcastAssets/config.json");
module.exports = {
	name: 'help',
	description: 'Learn what commands I have to offer!',	
    	cooldown: 5,
    	aliases: ['helpv2', 'cmds'],
    	execute(message, args) {
        	const required = args[0];
        	if (!args.length) {
		    const HelpEmbed = new MessageEmbed()
		    .setDescription(`**Changelog:** \n \`\`${changelog}\`\``)
		    .setTitle("Outcast Help Menu (v2):")
		    .addField('Bot-Related', `Bot-related commands`, true)
		    .addField('Fun', `Commands to keep you entertained :3`, true)
		    .addField('Developer', `Commands made to help the developers keep abusers in check. (That includes you Jax)`, true)
		    .addField('Moderation', `Commands made to keep your server safe.`, true)
		    .addField('NSFW', `That stuff your parents warned you about.`, true)
		    .addField('Utility', `You know. Helpful stuff.`, true)
		    .setFooter(version, picture)
		    .setColor("#FF0000")
		    message.channel.send(HelpEmbed);
		}
            	if (required === 'bot') {
			const BotHelpEmbed = new MessageEmbed()
			.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
			.setTitle('Bot-Related')
			.setDescription(`**Total Commands In This Category:** 3 commands`)
			.addField('help', `**Aliases:** cmds, helpv2 \n **Description:** ${module.exports.description}`)
			.addField('specs', `**Aliases:** bi, botinfo, stats \n **Description:** ${message.client.commands.get('specs').description}`)
			.addField('suggest', `**Aliases:** N/A \n **Description:** ${message.client.commands.get('suggest').description}`)
			.setFooter(version, picture)
			.setColor("#FF0000")
			message.channel.send(BotHelpEmbed);
			return;
		    };
		    if (required === 'fun') {
			const FunHelpEmbed = new MessageEmbed()
			.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
			.setTitle('Fun')
			.setDescription(`**Total Commands In This Category:** 8 commands \n **Description:** Commands to keep you entertained.`)
			.addField('666', `**Aliases:** wewilltakeover \n **Description:** ${message.client.commands.get('666').description}`)
			.addField('bunny', `**Aliases:** rabbit \n **Description:** ${message.client.commands.get('bunny').description}`)
			.addField('cat', `**Aliases:** kitty, kitten \n **Description:** ${message.client.commands.get('cat').description}`)
			.addField('dog', `**Aliases:** doggo, puppy \n **Description:** ${message.client.commands.get('dog').description}`)
			.addField('fox', `**Aliases:** foxxo \n **Description:** ${message.client.commands.get('fox').description}`)
			FunHelpEmbed.addField('slap', `**Aliases:** bap, smack, whap \n **Description:** ${message.client.commands.get('slap').description}`)
			.addField('train', `**Aliases:** trainpic \n **Description:** ${message.client.commands.get('train').description}`)
			.addField('wah', `**Aliases:** redpanda \n **Description:** ${message.client.commands.get('wah').description}`)
			.setFooter(version, picture)
			.setColor("#FF0000")
			message.channel.send(FunHelpEmbed);
			return;
		    };
		    if (required === 'developer') {
			const DeveloperHelpEmbed = new MessageEmbed()
			.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
			.setTitle('Developer')
			.setDescription(`**Total Commands In This Category:** 5 commands \n **Description:** Commands made to help the developers keep abusers in check. (That includes you Jax)`)
			.addField('blacklist', `**Aliases:** bl, globalban, gban \n **Description:** ${message.client.commands.get('blacklist').description}`)
			.addField('blacklisted', `**Aliases:** globalbanlist, gbanlist \n **Description:** View who had their bot usage permissions revoked.`)
			.addField('eval', `**Aliases:** N/A`)
			.addField('evalc', `**Aliases:** N/A`)
			.addField('unblacklist', `**Aliases:** unglobalban, ungban \n **Description:** ${message.client.commands.get('unblacklist').description}`)
			.setFooter(version, picture)
			.setColor("#FF0000")
			 message.channel.send(DeveloperHelpEmbed);
			return;
		    };
		    if (required === 'moderation') {
			const ModerationHelpEmbed = new MessageEmbed()
			.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
			.setTitle('Moderation')
			.setDescription(`**Total Commands In This Category:** 3 commands \n **Description:** Commands made to keep your server safe.`)
			.addField('ban', `**Aliases:** Placeholder, \n **Required Permissions:** \`\`BAN_MEMBERS\`\`\n**Description:** ${message.client.commands.get('ban').description}`)
			.addField('kick', `**Aliases:** boot, \n **Required Permissions:** \`\`KICK_MEMBERS\`\`\n**Description:** ${message.client.commands.get('kick').description}`)
			.addField('purge', `**Aliases:** prune, deletemessages \n **Required Permissions:** \`\`MANAGE_MESSAGES\`\`\n**Description:** ${message.client.commands.get('purge').description}`)
			.setFooter(version, picture)
			.setColor("#FF0000")
			message.channel.send(ModerationHelpEmbed);
			return;
		};
	}
};
