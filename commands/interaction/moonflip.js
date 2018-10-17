const { lovePercent } = require('../../data.json');

module.exports = {
	name: 'moonflip',
	description: ':full_moon: **|** make a coinflip, but with a moon',
	aliases: ['m', 'mf', 'moon', 'flip'],
	usage: '',
	type: 'interaction',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message, args) {
		const moon = Math.random() >= 0.5;
		const result = moon ? 'full' : 'new';
		const color = moon ? 0xF1F1F1 : 0x565656;
		const moonflip = {
			color: color,
			title: 'MOON FLIP ( *like a coinflip, but w/ a moon* )',
			description: `:${result}_moon: **|** The moon is **${result}**, ${message.author} !`,
		};
		return message.channel.send({ embed: moonflip });
	},
};

