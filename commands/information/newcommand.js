const { prefix } = require('../../config.json');


module.exports = {
	name: 'newcommand',
	description: ':loudspeaker: **|** Make a general announce about a new command',
	aliases: ['n', 'nc', 'new'],
	usage: '<command>',
	type: 'information',
	cooldown: 999,
	args: true,
	guild: false,
	botOwner: true,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
		if (args.length > 1) return message.reply('there is too many args');
		const newcommand = commands.get(args[0]);
		try {
			data.push(`:loudspeaker: Hi @everyone ! There is a __**new**__ command available : \`${prefix}${newcommand.name}\``);
			data.push(`:label: **Name :** \`${newcommand.name}\`\n==========`);
			data.push(`:page_facing_up: **Description :** *${newcommand.description}*`);
			data.push(`:paperclips: **Aliases :** \`${newcommand.aliases.join('` - `')}\``);
			if (newcommand.usage) data.push(`:wrench: **Usage :** \`${prefix}${newcommand.name} ${newcommand.usage}\``);
			if (newcommand.type) data.push(`:hash: **Type :** ${newcommand.type}`);
			data.push(`:stopwatch: **Cooldown :** ${newcommand.cooldown || 1} second(s)`);
			message.channel.send(data, { split: true });
		}
		catch (error) {
			return message.channel.send({
				embed: {
					color: 0xffae00,
					title: ':warning: **OOPS ..**',
					description: `This command doesn't exist, ${message.author} !`,
				},
			});
		}
	},
};

// v
