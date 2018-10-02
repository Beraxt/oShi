module.exports = {
	name: 'spam',
	description: 'write your message in another channel',
	aliases: ['pingpong'],
	usage: '',
	type: 'interaction',
	cooldown: 2,
	args: true,
	guild: false,
	execute(message, yourmessage) {
		message.client.channels.get('484486544716202014').send(yourmessage);
	},
};
