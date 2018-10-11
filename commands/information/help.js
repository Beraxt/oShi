const { prefix } = require('../../config.json');

module.exports = {
	name: 'help',
	description: ':interrobang:️ **|** List all of my commands or info about a specific command.',
	aliases: ['h', 'commands'],
	type: 'information',
	usage: '|| <command>',
	cooldown: 5,
	execute(message, args) {
		const { commands } = message.client;
		const data = [];
		const informationCommand = [];
		const interactionCommand = [];
		const otherCommand = [];
		commands.forEach(element => {
			switch (element.type) {
			case 'information':
				informationCommand.push(`\`${element.name}\` `);
				break;
			case 'interaction':
				interactionCommand.push(`\`${element.name}\` `);
				break;
			default:
				otherCommand.push(`\`${element.name}\` `);
				break;
			}
		});
		if (!args.length) {
			data.push(':pencil: __**Here\'s a list of all my commands:**__\n');
			data.push(`:information_source: __Information :__ ${informationCommand.join(' - ')}`);
			data.push(`:crossed_swords: __Interaction :__ ${interactionCommand.join(' - ')}`);
			data.push(`:wastebasket: __Other :__ ${interactionCommand.join(' -')}`);
			data.push(`\n:thinking: You can send \`${prefix}help <command>\` to get info on a specific command!`);
			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'text') {
						return message.channel.send({
							embed: {
								color: 0x00c7ff,
								title: ':incoming_envelope: **SEND !**',
								description: `I\'ve sent you a message, ${message.author} !`,
							},
						});
					}
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					return message.channel.send({
						embed: {
							color: 0x00c7ff,
							title: ':incoming_envelope: **SEND !**',
							description: `I\'can\'t DMs you, ${message.author} !`,
						},
					});
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		if (!command) {
			return message.channel.send({ embed: { color: 0xffae00,
				title: ':warning: **WARNING !**',
				description: `That\'s not a valid command, ${message.author} !`,
			} });
		}

		data.push(`:label: **Name :** ${command.name}\n==========`);
		data.push(`:page_facing_up: **Description :** *${command.description}*`);
		data.push(`:paperclips: **Aliases :** \`${command.aliases.join('` - `')}\``);
		if (command.usage) data.push(`:wrench: **Usage :** \`${prefix}${command.name} ${command.usage}\``);
		if (command.type) data.push(`:hash: **Type :** ${command.type}`);
		data.push(`:stopwatch: **Cooldown :** ${command.cooldown || 1} second(s)`);

		message.channel.send(data, { split: true });
	},
};