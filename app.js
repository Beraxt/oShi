const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, badwords, reactions } = require('./config.json');
const { responses} = require('./data.json');
// const functions = require('./functions');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// functions.loadFiles('./commands')
// functions.loadFiles('./commands/interaction');
// functions.loadFiles('./commands/information');

loadFiles('./commands');
loadFiles('./commands/interaction');
loadFiles('./commands/information');

const cooldowns = new Discord.Collection();

client.on('ready', () => {
	console.log(`${client.user.username} is running !`);
	client.user.setActivity('some metalcore 🤘', { type: 'LISTENING' });
});

const thechannels = new Discord.Collection();

client.on('message', async message => {
	if (message.author.bot) return;
	for (let i = 0; i < badwords.length; i++) {
		if (message.content.includes(badwords[i])) {
			message.channel.bulkDelete(1, true);
			message.channel.send({ embed: { color: 0xFF0000,
				title: '**WARNING !**',
				description: 'Don\'t use bad language please :frowning: !',
			} });
		}
	}
	for (let i = 0; i < responses.length; i++) {
		if (message.content.includes(responses[i].cited)) {
			message.channel.send(responses[i].response + ` <@${message.author.id}>`);
		}
	}
	for (const key in reactions) {
		for (let j = 0; j < reactions[key].words.length; j++) {
			if(message.content.includes(reactions[key].words[j])) {
				message.react(reactions[key].react);
			};
		};
	}
	if (!message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guild && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.botOwner && !message.member.roles.find('name', 'oShi Owner')) {
		return message.reply(`You don\'t have the rights to do this !\nOnly **\` ${message.guild.roles.find('id', '485207468964708374').name} \`** can do this comand.`);
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 1) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = Math.floor((expirationTime - now) / 1000);
			return message.reply(`please wait ${timeLeft} more second(s) before reusing the \` ${command.name} \` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.channel.send({ embed: { color: 0xFF0000,
			title: '**WARNING !**',
			description: 'There have been an error with this command !',
		} });
	}
});
client.on('guildMemberAdd', MemberAdd => {

	MemberAdd.guild.channels.find('id', '484458684072591396').send('Heyy you, welcome to the Garage !');
});

client.login(token);

function loadFiles(folderPath) {
	const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`` + folderPath + `/${file}`);
		client.commands.set(command.name, command);
	}
}