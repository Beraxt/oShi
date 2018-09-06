const { prefix } = require('../../config.json');

module.exports = {
	name: 'user',
	description: 'Give information about someone !',
	aliases: ['people'],
	usage: '@user',
	type: 'information',
	cooldown: 5,
	args: true,
	guild: false,
	execute(message, args) {
		const oShiClient = message.client.users.get('483717645233815563');
		const userClient = message.mentions.users.first();
		console.log(userClient);
		console.log('=========');
		let authorStatus = message.author.presence.status;
		switch (authorStatus) {
		case 'online':
			authorStatus = 'Ready to chat ! 🍏';
			break;
		case 'idle':
			authorStatus = 'AFK. 🍊';
			break;
		case 'dnd':
			authorStatus = 'Busy I think ? 🍅';
			break;
		case 'offline':
			authorStatus = 'Sleeping.. 🥚';
			break;
		}
		const authorEmbed = {
			color: 0x1CCBFF,
			title: ':arrow_right: **Add me** to your server !\n',
			//url: `${message.author.avatarURL}`,
			author: {
				name: `${message.author.tag}`,
				icon_url: `${message.author.avatarURL}`,
				url: 'https://discordapp.com/oauth2/authorize?client_id=483717645233815563&scope=bot',
			},
			description: `:wave: Hello, I'm **\`🔵 ${message.author.username}\`**, a basic **Discord bot** thats performs only simple tasks for now,\nbut my *creator*, \`$, is always tring to improve me !`,
			thumbnail: {
				url: `${message.author.avatarURL}`,
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
					name: '**Status :**',
					value: `${authorStatus}`,
					inline: true,
				},
				{
					name: '**ID :**',
					value: `${message.author.id}`,
					inline: true,
				},
				{
					name: '**Created at :**',
					value: `${message.author.createdAt}`,
					inline: true,
				},
				{
					name: '**Created at :**',
					value: `${message.author.note}`,
					inline: true,
				},
			],
			timestamp: new Date(),
			footer: {
				text: `🔵 ${oShiClient.username} - ⓒ 2018 | Made with 💛 & Javascript`,
				icon_url: `${message.client.users.get('483717645233815563').avatarURL}`,
			},
		};
		message.channel.send({ embed: authorEmbed });
	},
};
