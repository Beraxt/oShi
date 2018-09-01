module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	aliases: ['guild'],
	usage: '',
	type: 'information',
	cooldown: 2,
	args: false,
	guild: true,
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};

