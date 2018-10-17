module.exports = {
	name: 'lovebetween',
	description: ':heart: **|** Calculate the love between two users o/',
	aliases: ['l', 'love', 'lovebt', 'lbt'],
	usage: '@user @user',
	type: 'interaction',
	cooldown: 5,
	args: true,
	guild: true,
	execute(message, args) {
		const love = Math.floor(Math.random() * Math.floor(100));
		const loveFigure = Math.round(love / 10);
		const loveArray = [];
		for (let i = 0; i < loveFigure; i++) {
			loveArray.push(':heart:');
		}
		for (let j = 0; j < 10 - loveFigure; j++) {
			loveArray.push(':broken_heart:');
		}
		const lovebetween = {
			color: 0xff00d0,
			title: ':heartpulse: LOVE CALCULATOR :heartpulse:',
			description: `The **${args[0]}** & **${args[1]}**'s love is **${love}%**\n
			[${loveArray.join('')}]`,
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

