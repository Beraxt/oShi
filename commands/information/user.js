const { prefix } = require('../../config.json');

module.exports = {
	name: 'user',
	description: '👤👀 **|** Give information about someone !',
	aliases: ['member'],
	usage: '@user',
	type: 'information',
	cooldown: 30,
	args: true,
	guild: false,
	execute(message, args) {
		const oShiClient = message.client.users.get('483717645233815563');
		const theUser = message.mentions.users.first();
		const theMember = message.guild.members.get(theUser.id);

		const roleList = theMember.roles.map(role => ' ' + role.name);
		roleList.shift();
		let authorStatus = theUser.presence.status;
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
			// url: `${theUser.avatarURL}`,
			author: {
				name: `${theUser.tag}`,
				icon_url: `${theUser.avatarURL}`,
				url: 'https://discordapp.com/oauth2/authorize?client_id=483717645233815563&scope=bot',
			},
			description: `:wave: Hello ${message.author.username}\, Here is the basic informations about ${theUser.username} !`,
			thumbnail: {
				url: `${theUser.avatarURL}`,
			},
			fields: [
				{
					name: '\u200b',
					value: ':information_source: __Informations about you :__',
				},
				{
					name: '**Nickname here :**',
					value: `${theMember.displayName}`,
					inline: true,
				},
				{
					name: '**ID :**',
					value: `${theUser.id}`,
					inline: true,
				},
				{
					name: '**Status :**',
					value: `${authorStatus}`,
					inline: true,
				},
				{
					name: '**You\'re playing :**',
					value: `🕹 ${theMember.presence.game}`,
					inline: true,
				},
				{
					name: '**Created at :**',
					value: `${theUser.createdAt}`,
					inline: true,
				},
				{
					name: '**Join the server at :**',
					value: `${theMember.joinedAt}`,
					inline: true,
				},
				{
					name: '**Roles :**',
					value: `${roleList}`,
					inline: true,
				},
				{
					name: '**Highest role :**',
					value: `${theMember.highestRole.name}`,
					inline: true,
				},
				{
					name: '**Kickable :**',
					value: `${theMember.kickable}`,
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
