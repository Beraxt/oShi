module.exports = {
	name: 'me',
	description: 'Give information about you !',
	aliases: ['myself'],
	usage: '',
	type: 'information',
	cooldown: 5,
	args: false,
	guild: false,
	execute(message, args) {
		message.channel.send(`${message.author.displayAvatarURL}\n:smiley_cat: **|** *Tag* : **${message.author.tag}**\n:id: **|** *ID* : **${message.author.id}**\n:stopwatch: **|** *Created at* : **${message.author.createdAt}**\n:speech_left: **|** *You're* : **${message.author.presence.status}**\n:joystick: **|** *You're playing to* : **${message.author.presence.game}**\n**Test**: ${message.author.discriminator}`
		);
	},
};