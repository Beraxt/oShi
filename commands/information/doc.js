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
			message.channel.send({ embed: { color: 0x00c7ff,
				title: ':incoming_envelope: **SEND !**',
				description: `I\'ve sent you a message, ${message.author} !`,
			} });
		}
		message.author.send('**Here is some documentation about how to make a Discord bot in Javascript :yellow_heart:**\n*Discord.js :* https://discord.js.org/#/docs/main/stable/general/welcome \n*Discord.js Guide :* https://discordjs.guide/#/');
	},
};
