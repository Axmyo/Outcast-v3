const { readdirSync } = require('fs');
const { Client, Collection, MessageEmbed } = require('discord.js');
const { prefix, token, version } = require("./OutcastAssets/config.json");
const DefaultPrefix = prefix.shift.toLowerCase();
const Outcast = new Client();
Outcast.commands = new Collection();

const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	Outcast.commands.set(command.name, command);
}

const cooldowns = new Collection();

Outcast.once("ready",async() =>{
	console.log(`Bot online with ${Outcast.guilds.cache.size} guilds.`);
	console.warn('DO NOT FORGET TO CHANGE THE LAST EDITED DATE ON THE BOTINFO COMMAND! THIS IS VERY IMPORTANT FOR PICKING OUT OUTDATED SHARDS!!!!');
	
	Outcast.user.setActivity(`${Outcast.guilds.cache.size} guilds.`, {type:3})
 });

Outcast.on('message', message => {
	if (!message.content.startsWith(DefaultPrefix) || message.author.bot) return;

	const args = message.content.slice(DefaultPrefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = Outcast.commands.get(commandName)
		|| Outcast.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	Outcast.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${DefaultPrefxix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		const ErrorEmbed = new MessageEmbed();
		ErrorEmbed.setTitle("Error!"),
		ErrorEmbed.setDescription(`An Error Has Occured! Please give this to the support team: ${error}`),
		ErrorEmbed.setFooter(`Outcast ${version}`, "https://cdn.discordapp.com/avatars/677257480744730624/eb078b76eab8f80a6001b64cf4146fad.png?size=1024&.png")
	}
});

Outcast.login(token);
