const { prefix } = require('../../config.json');

module.exports = {
	name: 'shi',
	description: 'Give information about the bot !',
	aliases: ['bot'],
	usage: '',
	type: 'information',
	cooldown: 30,
	args: false,
	guild: false,
	execute(message, args) {
		const exampleEmbed = {
			color: 0x1CCBFF,
			title: ':arrow_right: **Add me** to your server !\n',
			url: `${message.client.user.avatarURL}`,
			author: {
				name: `${message.client.user.username}`,
				icon_url: 'https://cdn.discordapp.com/avatars/483717645233815563/bc77cf9023c2c87c1d664a2384af73d2.png?size=2048',
				url: 'https://discordapp.com/oauth2/authorize?client_id=483717645233815563&scope=bot',
			},
			description: `:wave: Hello, I'm **\`🔵 ${message.client.user.username}\`**, a basic **Discord bot** thats performs only simple tasks for now,\nbut my *creator*, \`${message.client.users.get('301433177703186442').tag}\`, is always tring to improve me !`,
			thumbnail: {
				url: `${message.client.user.avatarURL}`,
			},
			fields: [
				{
					name: '\u200b',
					value: ':white_check_mark: **__How to use me :__**',
				},
				{
					name: `\`${prefix}<command>\``,
					value: `Write \`${prefix}help\` to get information about how to use my commands !`,
				},
				{
					name: '\u200b',
					value: ':information_source: __Informations about me :__',
				},
				{
					name: '**Tag :**',
					value: `${message.client.user.tag}`,
					inline: true,
				},
				{
					name: '**ID :**',
					value: `${message.client.user.id}`,
					inline: true,
				},
				{
					name: '**Created at :**',
					value: `${message.client.user.createdAt}`,
					inline: true,
				},
			],
			timestamp: new Date(),
			footer: {
				text: `🔵 ${message.client.user.username} - ⓒ 2018 | Made with 💛 & Javascript`,
				icon_url: 'https://cdn.discordapp.com/avatars/483717645233815563/bc77cf9023c2c87c1d664a2384af73d2.png?size=2048',
			},
		};
		message.channel.send({ embed: exampleEmbed });
	},
};
