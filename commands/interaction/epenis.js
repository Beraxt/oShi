const { epenis } = require('../../data.json');

module.exports = {
	name: 'epenis',
	description: ':eggplant: **|** Give a size of your e-penis o/',
	aliases: ['e', 'penis', 'pickle'],
	usage: '|| @user',
	type: 'interaction',
	cooldown: 15,
	args: false,
	guild: false,
	execute(message, args) {
		const penisSize = Math.floor(Math.random() * Math.floor(20));
		for (let i = 0; i < epenis.length; i++) {
			if (penisSize <= epenis[i].size) {
				const pic = {
					color: 0xff19e8,
					title: '',
					image: {
						url: epenis[i].pic,
					},
				};
				const mention = !args.length ? 'Your *e-penis* size' : `The **${message.mentions.users.first().username}**\'s *e-penis* size`;
				pic.title = `${mention} is **${penisSize} inches**, like a ${epenis[i].animal}`;
				return message.channel.send({ embed: pic });
			}
		}
	},
};
