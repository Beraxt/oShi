const { prefix } = require('../../config.json');
const { actions } = require('../../data.json');

module.exports = {
	name: 'action',
	description: ':crossed_swords:️ **|** Do an interaction with someone',
	aliases: ['act'],
	usage: '<action> @user || list',
	type: 'interaction',
	cooldown: 5,
	args: true,
	guild: true,
	execute(message, args) {
		const actionsArray = [];
		actionsArray.push(actions.map(action => `\` ${action.verb}\` ➤  *${action.action_begin}* **\`@user\`**${action.action_end}*`).join('\n'));
		const reply = `\nThe proper usage would be: \`${prefix}${module.exports.name} ${module.exports.usage}\``;
		const verbs = actions.find((element) => {
			return args[0] == element.verb;
		});
		// 1. check if there is the good number of args
		if (args[0] === 'list') {
			return message.channel.send(actionsArray);
		}
		else if (args.length < 2 || args.length > 2) {
			return message.channel.send({
				embed: {
					color: 0xffae00,
					title: ':warning: **OOPS ..**',
					description: `there isn\'t the good nuber of args, ${message.author} ! ${reply}`,
				},
			});
		}
		// 2. Check if this is the good order
		else if (args[0].includes('@')) {
			return message.channel.send({
				embed: {
					color: 0xffae00,
					title: ':warning: **OOPS ..**',
					description: `It's not the good order, ${message.author} ! ${reply}`,
				},
			});
		}
		else if (!args[1].includes('@')) {
			return message.channel.send({
				embed: {
					color: 0xffae00,
					title: ':warning: **OOPS ..**',
					description: `Please mention someone, ${message.author} ! ${reply}`,
				},
			});
		}
		else if (verbs) {
			return message.channel.send(`${message.author} ${verbs.action_begin} ${args[1]} ${verbs.action_end}`);
		}
		else {
			message.channel.send({
				embed: {
					color: 0xffae00,
					title: ':warning: **OOPS ..**',
					description: `This action doesn't exist, ${message.author} ! You can check them here :`,
				},
			});
			return message.channel.send(actionsArray);
		}
	},
};

// v