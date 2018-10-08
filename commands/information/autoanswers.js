const { responses } = require('../../config.json');

module.exports = {
	name: 'autoanswers',
	description: '🗃 **|** Send a list of the auto answers of the bot ! ',
	aliases: ['at', 'auto', 'answers', 'answer'],
	usage: '',
	type: 'information',
	cooldown: 5,
	args: false,
	guild: false,
	execute(message) {
		const responsesArray = [];
		responsesArray.push(responses.map(response => '`' + response.cited + '` ➤  *' + response.response + '*').join('\n'));
		message.channel.send(responsesArray);
	},
};