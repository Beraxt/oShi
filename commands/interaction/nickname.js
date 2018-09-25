module.exports = {
	name: 'nickname',
	description: 'Check if the bot is online.',
	aliases: ['nick'],
	usage: 'yourNickname',
	type: 'interaction',
	cooldown: 2,
	args: true,
	guild: true,
	execute(message, args) {
		message.member.setNickname('Cool Name')
  	.then(console.log)
  	.catch(console.error);
	},
};
