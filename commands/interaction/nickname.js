module.exports = {
	name: 'nickname',
	description: ':label: **|** Change your username',
	aliases: ['nick', 'name'],
	usage: 'yourNickname',
	type: 'interaction',
	cooldown: 30,
	args: true,
	guild: true,
	execute(message, args) {
		const newUsername = args.join(' ');
		message.member.setNickname(newUsername)
  	.then(console.log)
  	.catch(console.error);
	},
};
