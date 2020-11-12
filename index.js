const { readdirSync } = require('fs');
const { Client, Collection, MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { prefix, token, version, picture } = require("./OutcastAssets/config.json");
const Default = prefix.shift().toLowerCase();
const Outcast = new Client();
const status = require ("./OutcastAssets/statuses.js");

Outcast.commands = new Collection();

const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	Outcast.commands.set(command.name, command);
}

const cooldowns = new Collection();

Outcast.once("ready",async() =>{
const statuses = await status (Outcast);
	console.log(`Bot online with ${Outcast.guilds.cache.size} guilds.`);
	console.warn('DO NOT FORGET TO CHANGE THE LAST EDITED DATE ON THE BOTINFO COMMAND! THIS IS VERY IMPORTANT FOR PICKING OUT OUTDATED SHARDS!!!!');
	

    setInterval(() => {
        const statusMessages = [statuses.playing1, statuses.watching1, statuses.watching2]; // you can add more here
        const status = statusMessages[Math.floor(Math.random() * statusMessages.length)];

        Outcast.user.setPresence({ activity: { name: status.name, type: status.type } });
      }, 5000); // add the time here in ms})
});

Outcast.on('message', message => {
	if (!message.content.startsWith(Default) || message.author.bot) return;
	const blacklist = new db.table('blacklist');
	if (blacklist.fetch(message.author.id)) return; // if they are bl (it will return true), stop code
	const args = message.content.slice(Default.length).split(/ +/);
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
			reply += `\nThe proper usage would be: \`${Default}${command.name} ${command.usage}\``;
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
			const CooldownEmbed = new MessageEmbed();
			CooldownEmbed.setTitle("Automated Cooldown System"),
			CooldownEmbed.setDescription(`The cooldown for this command is ${cooldownAmount}. Please wait ${timeLeft.toFixed(1)} more second(s) before running  \`${Default}${command.name}\` again.`),
			CooldownEmbed.setFooter(`${version}`, `${picture}`),
			CooldownEmbed.setTimestamp(),
			CooldownEmbed.setColor('ff0000'),
			message.channel.send(CooldownEmbed);	
			return;	
		}
	};		

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		const ErrorEmbed = new MessageEmbed();
		ErrorEmbed.setTitle("Error!"),
		ErrorEmbed.setDescription(`An unknown error has occured!`),
		ErrorEmbed.addField('Error:', `${error}`),
		ErrorEmbed.setColor('ff0000'),
		ErrorEmbed.setFooter(`${version}`, `${picture}`),
		message.channel.send(ErrorEmbed);
	}
});
Outcast.login(token);
