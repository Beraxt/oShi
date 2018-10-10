module.exports = {
	name: 'avatar',
	description: ':eye: **|** Send a picture of your entire avatar or a user\'s avatar ',
	aliases: ['a', 'icon', 'pdp'],
	usage: '|| @user',
	type: 'information',
	cooldown: 15,
	args: false,
	guild: false,
	execute(message, args) {
		if (!args.length) {
			const theUser = message.author;
			const theMember = message.member;
			const exampleEmbed = {
				color: theMember.displayColor,
				title: `${theUser.username}'s avatar:`,
				url: `${theUser.avatarURL}`,
				image: {
					url: `${theUser.avatarURL}`,
				},
			};
			return message.channel.send({ embed: exampleEmbed });
		}
		else {
			const theUser = message.mentions.users.first();
			const theMember = message.mentions.members.first();

			const exampleEmbed = {
				color: theMember.displayColor,
				title: `${theUser.username}'s avatar:`,
				url: `${theUser.avatarURL}`,
				image: {
					url: `${theUser.avatarURL}`,
				},
			};
			return message.channel.send({ embed: exampleEmbed });
		}
	},
};
