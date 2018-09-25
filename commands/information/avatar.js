module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['a', 'icon', 'pdp'],
	usage: '|| @user',
	type: 'information',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message, args) {
		if (message.mentions.users.size) {
			const theUser = message.mentions.users.first();
			const exampleEmbed = {
				color: 0x0099ff,
				title: `${theUser.username}'s avatar:`,
				url: `${theUser.avatarURL}`,
				image: {
					url: `${theUser.avatarURL}`,
				},
			};
			message.channel.send({ embed: exampleEmbed });
		}
		else {
			const theUser = message.author;
			const exampleEmbed = {
				color: 0x0099ff,
				title: `${theUser.username}'s avatar:`,
				url: `${theUser.avatarURL}`,
				image: {
					url: `${theUser.avatarURL}`,
				},
			};
			message.channel.send({ embed: exampleEmbed });
		}
	},
};
