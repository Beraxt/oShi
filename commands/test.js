const Discord = require('discord.js');

module.exports = {
	name: 'test',
	description: 'Test command',
	aliases: ['t'],
	usage: '<issou>',
	type: 'interaction',
	cooldown: 2,
	args: false,
	guild: false,
	execute(message, args) {
		const exampleEmbed = {
			color: 0x0099ff,
			title: 'Some title',
			url: 'https://discord.js.org',
			author: {
				name: 'Some name',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
				url: 'https://discord.js.org',
			},
			description: 'Some description here',
			thumbnail: {
				url: 'https://i.imgur.com/wSTFkRM.png',
			},
			fields: [
				{
					name: 'Regular field title',
					value: 'Some value here',
				},
				{
					name: '\u200b',
					value: '\u200b',
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
			],
			image: {
				url: 'https://i.imgur.com/wSTFkRM.png',
			},
			timestamp: new Date(),
			footer: {
				text: 'Some footer text here cc',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
			},
		};
		message.channel.author.send('odfeofe');
	},
};