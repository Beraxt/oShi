const { lovePercent } = require('../../data.json');

module.exports = {
	name: 'lovebetween',
	description: ':eggplant: **|** Give a size of your e-penis o/',
	aliases: ['l', 'love', 'lovebt', 'lbt'],
	usage: '@user @user',
	type: 'interaction',
	cooldown: 5,
	args: true,
	guild: true,
	execute(message, args) {
		const love = Math.floor(Math.random() * Math.floor(100));
		const loveArray = [];
		for (let i = 0; i < Math.round(love / 10); i++) {
			loveArray.push(':heart:');
		}
		for (let j = 0; j < 10 - Math.round(love / 10); j++) {
			loveArray.push(':broken_heart:');
		}
		const lovebetween = {
			color: 0xff00d0,
			title: ':heartpulse: LOVE CALCULATOR :heartpulse:',
			description: `The **${args[0]}** & **${args[1]}**'s love is **${love}%**\n
			[${loveArray.join('')}]`,
			// image: {
			// 	url: epenis[i].pic,
			// },
		};
		if (args.length < 2) {
			return message.channel.send({ embed: { color: 0xffae00,
				title: ':warning: **OOPS ..**',
				description: `You miss to mention someone else, ${message.author}`,
			} });
		}
		return message.channel.send({ embed: lovebetween });
	},
};

