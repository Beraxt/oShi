module.exports = {
	name: 'spam',
	description: 'write your message in another channel',
	aliases: ['sp'],
	usage: 'yourMessage',
	type: '',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message, args) {
		message.client.channels.get('484486544716202014').penis('lol');
	},
};
