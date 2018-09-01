const { prefix } = require('../config.json');
const { actions } = require('../config.json');

module.exports = {
	name: 'action',
	description: 'Do an interaction with someone',
	aliases: ['act'],
	usage: '<action> <user>',
	type: 'interaction',
	cooldown: 2,
	args: true,
	guild: true,
	execute(message, args) {
		const reply = `\nThe proper usage would be: \`${prefix}${module.exports.name} ${module.exports.usage}\``;
		// 1. check if there is the good number of args
		if (args.length < 2 || args.length > 2) return message.reply('there isn\'t the good nuber of args !' + reply);
		// 2. Check if this is the good order
		if (args[0].includes('@')) return message.reply('It\'s not the good ordrer !' + reply);
		const verbs = actions.find((element) => {
			return args[0] == element.verb;
		});
		if (verbs) {
			message.channel.send(message.author + ' ' + verbs.action_begin + ' ' + args[1] + verbs.action_end);
		}
		else {
			message.reply('This action doesn\'t exist !');
		}
	},
};
