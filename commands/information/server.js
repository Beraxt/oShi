const { explicitcontent, security } = require('../../data.json');

module.exports = {
	name: 'server',
	description: ':gear: **|** Display info about this server.',
	aliases: ['s', 'g', 'guild'],
	usage: '',
	type: 'information',
	cooldown: 15,
	args: false,
	guild: true,
	execute(message) {
		const theGuild = message.guild;
		const sizeMessage = theGuild.large ? 'This server is huge :muscle: !' : 'This server is so little :baby: !';
		let securityMessage = '';
		for (let i = 0; i < security.length; i++) {
			if (theGuild.mfaLevel === security[i].index) securityMessage = security[i].message;
		}
		let explicitContentMessage = '';
		for (let i = 0; i < explicitcontent.length; i++) {
			if (theGuild.explicitContentFilter === explicitcontent[i].index) explicitContentMessage = explicitcontent[i].message;
		}

		const statusMap = new Map();
		statusMap.set('online', 0);
		statusMap.set('idle', 0);
		statusMap.set('dnd', 0);
		statusMap.set('offline', 0);
		for (const [key, value] of theGuild.members) {
			const statusValue = value.presence.status;

			statusMap.has(statusValue) ? statusMap.set(statusValue, statusMap.get(statusValue) + 1) : statusMap.set(statusValue, 1);
		}
		const statusList = `**🍏 ${statusMap.get('online')}  🍊 ${statusMap.get('idle')}   🍅 ${statusMap.get('dnd')} 🥚${statusMap.get('offline')}**`;

		let afkChannel;
		if (theGuild.afkChannel) afkChannel = theGuild.afkChannel.name;
		else afkChannel = '❌';

		const guildEmbed = {
			color: 0x1CCBFF,
			title: ':point_down: __**S E R V E R / G U I L D   I N F O R M A T I O N S**__ :point_down:',
			author: {
				name: `${theGuild.name}`,
				icon_url: `${theGuild.iconURL}`,
				// url: 'https://discordapp.com/oauth2/authorize?&client_id=483717645233815563&scope=bot&permissions=1745349696',
			},
			description: '\u200b',
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
		if (message.guild.available) return message.channel.send({ embed: guildEmbed });
	},
};

// v

