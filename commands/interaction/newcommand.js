const { prefix } = require('../../config.json');


module.exports = {
	name: 'newcommand',
	description: '📢 **|** Make a general announce about a new command',
	aliases: ['n', 'nc', 'new'],
	usage: '<command>',
	type: 'interaction',
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
			message.channel.send(`:loudspeaker: Hi @everyone ! There is a __**new**__ command available : \`${prefix}` + newcommand.name + `\``);

			if (newcommand.description) data.push(`${newcommand.description}\n==========`);
			if (newcommand.aliases) data.push(`**Aliases :** ${newcommand.aliases.join(', ')}`);
			if (newcommand.usage) data.push(`**Usage :** \`${prefix}${newcommand.name} ${newcommand.usage}\``);
			data.push(`**Cooldown :** ${newcommand.cooldown || 1} second(s)`);
			message.channel.send(data, { split: true });
		}
		catch (error) {
			message.reply('This command doesn\'t exist !');
		}
	},
};
