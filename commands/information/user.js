module.exports = {
	name: 'user',
	description: 'Give information about you !',
	aliases: ['people'],
	usage: '',
	type: 'information',
	cooldown: 5,
	args: true,
	guild: false,
	execute(message, args) {
		message.channel.send(`${message.mentions.users.first().displayAvatarURL}\n:smiley_cat: **|** *Tag* : **${message.mentions.users.first().tag}**\n:id: **|** *ID* : **${message.mentions.users.first().id}**\n:stopwatch: **|** *Created at* : **${message.mentions.users.first().createdAt}**\n:speech_left: **|** *You're* : **${message.mentions.users.first().presence.status}**\n:joystick: **|** *You're playing to* : **${message.mentions.users.first().presence.game}**\n**Test**: ${message.mentions.users.first().discriminator}`
		);
	},
};
