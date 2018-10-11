module.exports = {
	name: 'avatar',
	description: ':eye: **|** Send a picture of your entire avatar or a user\'s avatar',
	aliases: ['a', 'icon', 'pdp'],
	usage: '|| @user',
	type: 'information',
	cooldown: 15,
	args: false,
	guild: false,
	execute(message, args) {
		const setAvatarEmbed = (theUser, theMember) => {
			return message.channel.send({
				embed: {
					color: theMember.displayColor,
					title: `${theUser.username}'s avatar:`,
					url: `${theUser.avatarURL}`,
					image: {
						url: `${theUser.avatarURL}`,
					},
				},
			});
		};
		const theUser = !args.length ? message.author : message.mentions.users.first();
		const theMember = !args.length ? message.member : message.mentions.members.first();
		setAvatarEmbed(theUser, theMember);
	},
};
