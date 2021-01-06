const { MessageEmbed } = require("discord.js");
const { version, picture, changelog } = require("../OutcastAssets/config.json");
module.exports = {
    name: "help",
	description: "List of all commands.",	
    cooldown: 5,
    aliases: ["helpv2", "cmds"],
    execute(message, args) {
        const required = args[0];
        if (!args.length) {
            const HelpEmbed = new MessageEmbed()
                .setDescription(`**Changelog:**\n\`\`${changelog}\`\``)
                .setTitle("Outcast Help Menu (v3):")
                .addFields({name: ":robot: Bot", value: `\`\`Outcast help bot\`\`\nBot-related commands`, inline: true}, {name: ":wrench: Utility", value: `\`\`Outcast help utility\`\`\nYou know. Helpful stuff.`, inline: true}, {name: ":hammer: Moderation", value: `\`\`Outcast help moderation\`\`\nCommands made to keep your server safe.`, inline: true}, {name: "Fun", value: `\`\`Outcast help fun\`\`\nCommands to keep you entertained :3`, inline: true}, {name: ":smirk: NSFW", value: `\`\`Outcast help nsfw\`\`\nThat stuff your parents warned you about.`, inline: true}, {name: "Developer", value: `\`\`Outcast help developer\`\`\n Ash's toys.`, inline: true})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
            return message.channel.send(HelpEmbed);
        };
            if (required === "bot") {
                const BotHelpEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setTitle("Bot")
                .setDescription(`**Total Commands In This Category:** 3 commands\n**Description:** Self-explanatory.`)
                .addFields({name: "config", value: `**Aliases:** ${message.client.commands.get("suggest").aliases}\n**Description:** ${message.client.commands.get("suggest").description}`}, {name: "help", value: `**Aliases:** ${module.exports.aliases}\n**Description:** ${module.exports.description}`}, {name: "prefix", value: `**Aliases:** ${message.client.commands.get("prefix").aliases}\n**Description:** ${message.client.commands.get("prefix").description}`}, {name: "suggest", value: `**Aliases:** N/A\n**Description:** ${message.client.commands.get("suggest").description}`})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
                return message.channel.send(BotHelpEmbed);
                
            };
            if (required === "fun") {
                const FunHelpEmbed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setTitle("Fun")
                    .setDescription(`**Total Commands In This Category:** 9 commands\n**Description:** Commands to keep you entertained.`)
                    .addFields({name: "666", value: `**Aliases:** ${message.client.commands.get("666").aliases}\n**Description:** ${message.client.commands.get("666").description}`}, {name: "bunny", value: `**Aliases:** ${message.client.commands.get("bunny".aliases)}\n**Description:** ${message.client.commands.get("bunny").description}`}, {name: "cat", value: `**Aliases:** ${message.client.commands.get("cat").aliases}\n**Description:** ${message.client.commands.get("cat").description}`}, {name: "dog", value: `**Aliases:** ${message.client.commands.get("dog".aliases)}\n**Description:** ${message.client.commands.get("dog").description}`}, {name: "fox", value:`**Aliases:** ${message.client.commands.get("fox").aliases}\n**Description:** ${message.client.commands.get("fox").description}`}, {name: "goat", value: `**Aliases:** ${message.client.commands.get("goat").aliases}\n**Description:** ${message.client.commands.get("goat").description}`}, {name: "slap", value: `**Aliases:** ${message.client.commands.get("slap").description}\n**Description:** ${message.client.commands.get("slap").description}`}, {name: "train", value: `**Aliases:** ${message.client.commands.get("train".aliases)}\n**Description:** ${message.client.commands.get("train").description}`}, {name: "wah", value: `**Aliases:** ${message.client.commands.get("wah").aliases}\n**Description:** ${message.client.commands.get("wah").description}`})
                    .setColor("#FF0000")
                    .setFooter(version, picture)
                    .setTimestamp()
                return message.channel.send(FunHelpEmbed);
                
            };
            if (required === "developer") {
                const DeveloperHelpEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setTitle("Developer")
                .setDescription(`**Total Commands In This Category:** 5 commands\n**Description:** Commands for the developers to keep abusers locked up. (That includes you Jax)`)
                .addFields({name: "blacklist", value: `**Aliases:** ${message.client.commands.get("blacklist").aliases}\n**Description:** ${message.client.commands.get('blacklist').description}`}, {name: "blacklisted", value: `**Aliases:** globalbanlist, gbanlist\n**Description:** View who had their bot usage permissions revoked.`}, {name: "eval", value: `**Aliases:** ${message.commands.client.get("eval").aliases}\n**Description:** ${message.client.commands.get("eval").description}`}, {name: "evalc", value: `**Aliases:** N/A\n**Description:** No Description Availible.`}, {name: "unblacklist", value: `**Aliases:** ${message.client.commands.get("unblacklist").aliases}\n**Description:** ${message.client.commands.get('unblacklist').description}`})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
                return message.channel.send(DeveloperHelpEmbed);
                
            };
            if (required === "moderation") {
                const ModerationHelpEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setTitle("Moderation")
                .setDescription(`**Total Commands In This Category:** 3 commands\n**Description:** Commands made to keep your server safe.`)
                .addFields({name:"ban", value: `**Aliases:** ${message.client.commands.get("ban").aliases}\n**Required Permissions:** \`\`BAN_MEMBERS\`\`\n**Description:** ${message.client.commands.get('ban').description}`}, {name: "kick", value: `**Aliases:** ${message.client.commands.get("kick").aliases}\n**Required Permissions:** \`\`KICK_MEMBERS\`\`\n**Description:** ${message.client.commands.get("kick").description}`}, {name: "purge", value:`**Aliases:** ${message.client.commands.get("purge").aliases}\n**Required Permissions:** \`\`MANAGE_MESSAGES\`\`\n**Description:** ${message.client.commands.get("purge").description}`}, {name: "mute", value: `**Aliases:** tape\n**Required Permissions:** \`\`MANAGE_ROLES\`\`\n**Description:** Soon:tm:`}, {name: "unmute", value: `**Aliases:** untape\n**Required Permissions:** \`\`MANAGE_ROLES\`\`\n**Description:** Soon:tm:`})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
                return message.channel.send(ModerationHelpEmbed);
            };
            if (required === "nsfw") {
                const NSFWHelpEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setTitle("NSFW")
                .setDescription(`**Total Commands In This Category:** 2 commands\n**Description:** That stuff your parents warned you about`)
                .addFields({name: "chris", value: `**Aliases:** ${message.client.commands.get("chris").aliases}\n**Description:** ${message.client.commands.get("chris").description}`}, {name: "yiff", value: `**Aliases:** ${message.client.commands.get("yiff").aliases}\n**Required:** tags\n**Description:** ${message.client.commands.get('yiff').description}`})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
                return message.channel.send(NSFWHelpEmbed);
            };
            if (required === "utility") {
                const UtilityHelpEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setTitle("Utility")
                .setDescription(`**Total Commands In This Category:** 3 command\n**Description:** You know, helpful stuff.`)
                .addFields({name: "avatar", value: `**Aliases:** ${message.client.commands.get("avatar").aliases}\n**Description:** ${message.client.commands.get("avatar").description}`}, {name: "serverinfo", value: `**Aliases:** ${message.client.commands.get("serverinfo").aliases}\n**Description:** ${message.client.commands.get("serverinfo").description}`}, {name: "userinfo", value: `**Aliases:** ${message.client.commands.get("userinfo").aliases}\n**Description:** ${message.client.commands.get("userinfo").description}`})
                .setColor("#FF0000")
                .setFooter(version, picture)
                .setTimestamp()
                return message.channel.send(UtilityHelpEmbed);
            };
        }
};
