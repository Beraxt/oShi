const { prefix } = require('../../config.json');
const { actions } = require('../../data.json');

module.exports = {
	name: 'action',
	description: ':crossed_swords:️ **|** Do an interaction with someone',
	aliases: ['act'],
	usage: '<action> <user> || list',
	type: 'interaction',
	cooldown: 5,
	args: true,
	guild: true,
	execute(message, args) {
		const actionsArray = [];
		actionsArray.push(actions.map(action => '`' + action.verb + '` ➤  *' + action.action_begin + ' **\`@user\`**' + action.action_end + '*').join('\n'));
		const reply = `\nThe proper usage would be: \`${prefix}${module.exports.name} ${module.exports.usage}\``;
		// 1. check if there is the good number of args
		if (args[0] === 'list') return message.channel.send(actionsArray);
		if (args.length < 2 || args.length > 2) return message.channel.send({ embed: { color: 0xffae00,
			title: ':warning: **WARNING !**',
			description: `there isn\'t the good nuber of args ! ${reply}`,
		} });
		// 2. Check if this is the good order
		if (args[0].includes('@')) return message.channel.send({ embed: { color: 0xffae00,
			title: ':warning: **WARNING !**',
			description: `It's not the good order ! ${reply}`,
		} });
		const verbs = actions.find((element) => {
			return args[0] == element.verb;
		});
		if (!args[1].includes('@')) return message.channel.send({ embed: { color: 0xffae00,
			title: ':warning: **WARNING !**',
			description: `Please mention someone ! ${reply}`,
		} });
		if (verbs) {
			message.channel.send(`${message.author} ${verbs.action_begin} ${args[1]} ${verbs.action_end}`);
		}
		else {
			message.reply('**This action doesn\'t exist !** You can check them __**here**__:\n' + actionsArray);
		}
	},
};

