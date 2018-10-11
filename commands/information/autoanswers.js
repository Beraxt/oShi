const { responses } = require('../../data.json');

module.exports = {
	name: 'autoanswers',
	description: ':card_box: **|** Send a list of the auto answers of the bot !',
	aliases: ['aa', 'auto', 'answers', 'answer'],
	usage: '',
	type: 'information',
	cooldown: 5,
	args: false,
	guild: false,
	execute(message) {
		const responsesArray = [];
		responsesArray.push(responses.map(response => `\`${response.cited} \` ➤  *${response.response}*`).join('\n'));
		return message.channel.send(responsesArray);
	},
};

// v