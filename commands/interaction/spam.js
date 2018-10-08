module.exports = {
	name: 'spam',
	description: 'write your message in another channel',
	aliases: ['sp'],
	usage: 'yourMessage',
	type: 'interaction',
	cooldown: 2,
	args: true,
	guild: false,
	execute(message, args) {
		message.client.channels.get('484486544716202014').send(args[0]);
	},
};
