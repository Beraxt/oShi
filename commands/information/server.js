const { explicitcontent, security } = require('../../data.json');

module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	aliases: ['s', 'g', 'guild'],
	usage: '',
	type: 'information',
	cooldown: 2,
	args: false,
	guild: true,
	execute(message, args) {
		const theGuild = message.guild;
		console.log(theGuild.mfaLevel);
		console.log(theGuild.mfaLevel);

		let sizeMessage = '';
		if (theGuild.large) sizeMessage = 'This server is huge :muscle: !';
		else sizeMessage = 'This server is so little :baby: !';

		let securityMessage = '';
		for (let i = 0; i < security.length; i++) {
			if (theGuild.mfaLevel === security[i].index) securityMessage = security[i].message;
		}
		let explicitContentMessage = '';
		for (let i = 0; i < explicitcontent.length; i++) {
			if (theGuild.explicitContentFilter === explicitcontent[i].index) explicitContentMessage = explicitcontent[i].message;
		}

		// let statusStats;
		// for (let i = 0; i < theGuild.memberCount; i++) {
		// 	const element = array[i];
		// }
		const statusMap = new Map();
		statusMap.set('online', 0);
		statusMap.set('idle', 0);
		statusMap.set('dnd', 0);
		statusMap.set('offline', 0);
		for (const [key, value] of theGuild.members) {
			switch (value.presence.status) {
			case 'online':
				statusMap.set('online', statusMap.get('online') + 1);
				break;
			case 'idle':
				statusMap.set('idle', statusMap.get('idle') + 1);
				break;
			case 'dnd':
				statusMap.set('dnd', statusMap.get('dnd') + 1);
				break;
			case 'offline':
				statusMap.set('offline', statusMap.get('offline') + 1);
				break;
			}
		}
		console.log(statusMap.get('online'));
		const statusList = '🍏 **' + statusMap.get('online') + '** , 🍊 **' + statusMap.get('idle') + '** , 🍅 **' + statusMap.get('dnd') + '** ,🥚**' + statusMap.get('offline') + '**';

		let afkChannel;
		if (theGuild.afkChannel) afkChannel = theGuild.afkChannel.name;
		else afkChannel = '❌';

		const guildEmbed = {
			color: 0x1CCBFF,
			title: ':arrow_right: *go* !\n',
			// url: `${theGuild.iconURL}`,
			author: {
				name: `${theGuild.name}`,
				icon_url: `${theGuild.iconURL}`,
				// url: 'https://discordapp.com/oauth2/authorize?&client_id=483717645233815563&scope=bot&permissions=1745349696',
			},
			description: 'Here\'s some informations about this server !',
			thumbnail: {
				url: `${theGuild.iconURL}`,
			},
			fields: [
				{
					name: '**AFK Channel :**',
					value: `${afkChannel}`,
					inline: true,
				},
				{
					name: '**Time needed to be AFK :**',
					value: `${theGuild.afkTimeout} seconds`,
					inline: true,
				},
				{
					name: '**Default channel :**',
					value: `${theGuild.defaultChannel}`,
					inline: true,
				},
				{
					name: '**Default role :**',
					value: `${theGuild.defaultRole.name}`,
					inline: true,
				},
				{
					name: '**Is this server huge ?**',
					value: `${sizeMessage}`,
					inline: true,
				},
				{
					name: '**Members status :**',
					value: statusList,
					inline: true,
				},
				{
					name: '**Created at :**',
					value: `${theGuild.createdAt}`,
					inline: true,
				},
				{
					name: '**Security level :**',
					value: `${securityMessage}`,
					inline: true,
				},
				{
					name: '**Explicit content level :**',
					value: `\`${explicitContentMessage}\``,
					inline: true,
				},
			],
			timestamp: new Date(),
			footer: {
				text: `🔵 ${message.client.user.username} - ⓒ 2018 | Made with 💛 & Javascript`,
				icon_url: `${message.client.user.avatarURL}`,
			},
		};
		if (message.guild.available) message.channel.send({ embed: guildEmbed });
	},
};

