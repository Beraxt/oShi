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
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
		}
		const avatarList = message.mentions.users.map(user => {
			return `**${user.username}**'s avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	},
};
