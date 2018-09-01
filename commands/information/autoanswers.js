const { responses } = require('../../config.json');
module.exports = {
	name: 'autoanswers',
	description: 'Send all the auto answers of the bot !',
	aliases: ['answers', 'answer'],
	usage: '',
	type: 'information',
	cooldown: 30,
	args: false,
	guild: false,
	execute(message) {
		const responsesArray = [];
		responsesArray.push(responses.map(response => '`' + response.cited + '` ➤  *' + response.response + '*').join('\n'));
		message.channel.send(responsesArray);
	},
};
