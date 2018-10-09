module.exports = {
	name: 'doc',
	description: ':bookmark_tabs: **|** Send a direct message with Discord.js documentation links',
	aliases: ['d', 'documentation'],
	usage: '',
	type: 'information',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message) {
		if (message.channel.type === 'text') {
			message.reply('I\'ve sent you a message :incoming_envelope: !');
		}
		message.author.send('**Here is some documentation about how to make a Discord bot in Javascript :yellow_heart:**\n*Discord.js :* https://discord.js.org/#/docs/main/stable/general/welcome \n*Discord.js Guide :* https://discordjs.guide/#/');
	},
};
