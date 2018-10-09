module.exports = {
	name: 'ping',
	description: ':ping_pong: **|** Check if the bot is online.',
	aliases: ['pingpong'],
	usage: '',
	type: 'interaction',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message) {
		message.channel.send(':ping_pong: **➤** *Pong !*');
	},
};
