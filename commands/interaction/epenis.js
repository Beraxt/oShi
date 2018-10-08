const { epenis } = require('../../config.json');

module.exports = {
	name: 'epenis',
	description: '🍆 **|** Give a size of your e-penis o/',
	aliases: ['e', 'penis', 'dick', 'pickle'],
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
					color: 0x0099ff,
					image: {
						url: epenis[i].pic,
					},
				};
				if (!message.mentions.users.size) {
					message.channel.send('Your *e-penis* size is **' + penisSize + ' inches**, like a ' + epenis[i].animal);
					return message.channel.send({ embed: pic });
				}
				else {
					message.channel.send('The ' + args[0] + '\'s *e-penis* size is **' + penisSize + ' inches**, like a ' + epenis[i].animal);
					return message.channel.send({ embed: pic });
				}
			}
		}
	},
};
