module.exports = {
	name: 'nickname',
	description: ':label: **|** Change your username',
	aliases: ['nick'],
	usage: 'yourNickname',
	type: 'interaction',
	cooldown: 30,
	args: true,
	guild: true,
	execute(message, args) {
		message.member.setNickname(args[0])
  	.then(console.log)
  	.catch(console.error);
	},
};
