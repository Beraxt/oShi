const { token } = require('../config.json');

module.exports = {
	name: 'restart',
	description: 'Restart the bot',
	aliases: ['reload'],
	usage: '',
	type: 'interaction',
	cooldown: 2,
	args: false,
	guild: false,
	botOwner: true,
	execute(message) {
		message.channel.send('Relanching.. 🔄');
		process.exit();
		message.channel.send('Killed.. 💀');
		message.client.login(token);
		message.channel.send('.. and reborn 👼');
	},
};
