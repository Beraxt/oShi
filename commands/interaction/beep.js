module.exports = {
	name: 'beep',
	description: ':robot: **|** Beep.. Boop ? ',
	aliases: ['robot'],
	usage: '',
	type: 'interaction',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message, args) {
		message.channel.send(':robot: **➤** *b00p ?*');
	},
};