module.exports = {
	name: 'doc',
	description: 'Send Discord.js documentation',
	aliases: ['documentation'],
	usage: '',
	type: 'information',
	cooldown: 5,
	args: false,
	guild: false,
	execute(message, args) {
		if (message.channel.type === 'text') {
			message.reply('I\'ve sent you a message :incoming_envelope: !');
		}
		message.author.send('**Here is some documentation about how to make a Discord bot in Javascript :yellow_heart:**\n*Discord.js :* https://discord.js.org/#/docs/main/stable/general/welcome \n*Discord.js Guide :* https://discordjs.guide/#/');
	},
};
