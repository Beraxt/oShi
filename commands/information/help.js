const { prefix } = require('../../config.json');

module.exports = {
	name: 'help',
	description: '⁉️ **|** List all of my commands or info about a specific command.',
	aliases: ['h', 'commands'],
	type: 'information',
	usage: '|| <command>',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
		const informationCommand = [];
		const interactionCommand = [];
		const otherCommand = [];
		commands.forEach(element => {
			switch (element.type) {
			case 'information':
				informationCommand.push('`' + element.name + '` ');
				break;
			case 'interaction':
				interactionCommand.push('`' + element.name + '` ');
				break;
			default:
				otherCommand.push('`' + element.name + '` ');
				break;
			}
		});
		if (!args.length) {
			data.push('__**Here\'s a list of all my commands:**__\n');
			data.push('__Information :__ ' + informationCommand.join(''));
			data.push('__Interaction :__ ' + interactionCommand.join(''));
			data.push('__Other :__ ' + otherCommand.join(''));
			data.push(`\nYou can send \`${prefix}help <command>\` to get info on a specific command!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a message :incoming_envelope: !');;
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you!');
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name :** ${command.name}`);
		if (command.description) data.push(`**Description :** ${command.description}\n==========`);
		if (command.aliases) data.push(`**Aliases :** ${command.aliases.join(', ')}`);
		if (command.usage) data.push(`**Usage :** \`${prefix}${command.name} ${command.usage}\``);
		if (command.type) data.push(`**Type :** ${command.type}`);
		data.push(`**Cooldown :** ${command.cooldown || 1} second(s)`);


		message.channel.send(data, { split: true });
	},
};
