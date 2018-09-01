module.exports = {
	name: 'args',
	description: 'Information about the arguments provided.',
	aliases: ['arguments'],
	usage: '<arg> <arg> ...',
	type: 'interaction',
	cooldown: 2,
	args: true,
	guild: false,
	execute(message, args) {
		message.channel.send(`Arguments: ${args}\nArguments length: **${args.length}**`);
	},
};