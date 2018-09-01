const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

exports.loadFiles = (folderPath) => {
	const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`` + folderPath + `/${file}`);
		client.commands.set(command.name, command);
	}
};