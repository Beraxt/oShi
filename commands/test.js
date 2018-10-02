const Discord = require('discord.js');

module.exports = {
	name: 'test',
	description: 'Test command',
	aliases: ['t'],
	usage: '<issou>',
	type: '',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message, args) {
		message.channel.author.send('nudes');
	},
};