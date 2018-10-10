const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, badwords, reactions } = require('./config.json');
const { responses } = require('./data.json');
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
	client.user.setActivity('Black Mirror 🖥', { type: 'WATCHING' });

});

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
		return message.channel.send({ embed: { color: 0xffae00,
			title: ':warning: **WARNING !**',
			description: `I can\'t execute that command inside DMs!, ${message.author}`,
		} });
	}

	if (command.botOwner && !message.member.roles.find('name', 'oShi Owner')) {
		return message.channel.send({ embed: { color: 0xffae00,
			title: ':warning: **WARNING !**',
			description: `You don\'t have the rights to do this, ${message.author} !\nOnly **\` ${message.guild.roles.find('id', '485207468964708374').name} \`** can do this comand.`,
		} });
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send({ embed: { color: 0xffae00,
			title: '**WARNING !**',
			description: reply,
		} });
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
			return message.channel.send({ embed: { color: 0xfaeaff,
				title: ':clock: **WAIT !**',
				description: `please wait **${timeLeft}** more second(s) before reusing the **\` ${command.name} \`** command.`,
			} });
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.channel.send({ embed: { color: 0xff0000,
			title: ':bangbang: **ERROR !**',
			description: `There have been an error with this command ! \n\n Contact ${message.client.users.get('301433177703186442')} to fix it !\n You can report an issue too here: http://github.com/blyndusk/oShi/issues`,
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