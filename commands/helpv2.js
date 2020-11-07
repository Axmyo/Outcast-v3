const { Client, MessageEmbed } = require('discord.js');
const { version, picture } = require("../OutcastAssets/config.json")
const client = new Client();
module.exports = { 
        name: 'helpv2',
	description: 'Learn what commands I have to offer! <BETA>',	
        cooldown: 5,
        aliases: ['helpbeta', 'cmds'],
        execute(message, args){
	
    }
};