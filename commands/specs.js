const { Client, MessageEmbed } = require("discord.js");
const { execSync } = require("child_process");
const si = require("systeminformation");
const { version, picture, LastUpdated, changelog, vtype } = require("../OutcastAssets/config.json");
const hostname = execSync ('hostname').toString();
const client = new Client();
module.exports = {
	name: "specs",
	description: "Look at info on me.",
	cooldown: 5,
	aliases: ["botinfo", "bi"],
	async execute(message, args){
		let totalSeconds = (message.client.uptime / 1000);
		const days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		const hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = Math.floor(totalSeconds % 60);
		const uptime = `${days} days, ${hours} hours, ${minutes} minutes, ${Math.round(seconds)} seconds`;
		const cpu = await si.cpu();
		const hostspecs = `${cpu.processors > 1 ? `(${cpu.processors}x) ` : ''}` + `${cpu.manufacturer} ${cpu.brand} @ ${cpu.speed}GHz\n    ${cpu.processors} processor${cpu.processors > 1 ? 's' : ''}, ${cpu.cores} core${cpu.cores > 1 ? 's' : ''}`;
		const mem = await si.mem();
		const memKB = (mem.total / 1024) + ' KB';
		const memMB = (memKB / 1024) + ' MB';
		const memGB = (memMB / 1024) + ' GB';
		const memoryUsage = process.memoryUsage();
		const heapUsedMB = Math.round(memoryUsage.heapUsed / (1024 ** 2));
		const heapTotalMB = Math.round(memoryUsage.heapTotal / (1024 ** 2));
		const SpecsEmbed = new MessageEmbed()
		.setTitle("Bot Info")
		.setDescription(`**Changelog:** \n \`\`${changelog}\`\``)
		.addField("Version:", version, true)
		.addField("Version Type:", vtype, true)
		.addField("Library:", "Discord.js v12", true)
		.addField("Last Updated:", LastUpdated, true)
		.addField("Developers:", `${message.client.users.cache.get('613527205103927367').tag} and ${message.client.users.cache.get('490178047325110282').tag}`, true)
		.addField("Current Host Server:", hostname, true)
		.addField("Total RAM Availible:", memGB, true)
		.addField("Usable RAM:", `test`, true)
		.addField("Total RAM In Use:", ` gb, mb, kb`, true)
		.addField("Host Server Specs:", hostspecs, true)
		.addField("Uptime:", uptime, true)
		.addField("Guilds:", client.guilds.cache.size, true)
		.setColor("#FF0000")
		.setFooter(version, picture)
		.setTimestamp()
		message.channel.send(SpecsEmbed);
	}    
};
