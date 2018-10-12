const { status } = require('../../data.json');

module.exports = {
	name: 'me',
	description: ':bust_in_silhouette: **|** Give information about you !',
	aliases: ['m', 'myself'],
	usage: '',
	type: 'information',
	cooldown: 30,
	args: false,
	guild: false,
	execute(message) {
		const theUser = message.author;
		const theMember = message.member;
		const roleList = theMember.roles.map(role => ' ' + role.name);
		roleList.shift();
		let authorStatus = theUser.presence.status;
		for (let i = 0; i < status.length; i++) {
			if (authorStatus === status[i].status) authorStatus = status[i].message;
		}
		const authorEmbed = {
			color: theMember.displayColor,
			title: ':point_down: __**P E R S O N A L   I N F O R M A T I O N S**__ :point_down:',
			author: {
				name: `${theUser.tag}`,
				icon_url: `${theUser.avatarURL}`,
				url: 'https://discordapp.com/oauth2/authorize?client_id=483717645233815563&scope=bot',
			},
			description: `Here is a little list of information about ${theUser.username} !`,
			thumbnail: {
				url: `${theUser.avatarURL}`,
			},
			fields: [
				{
					name: '\u200b',
					value: ':bust_in_silhouette: __**User informations :**__',
				},
				{
					name: ':id: **ID :**',
					value: `${theUser.id}`,
					inline: true,
				},
				{
					name: ':bulb: **Status :**',
					value: `${authorStatus}`,
					inline: true,
				},
				{
					name: ':hourglass_flowing_sand: **User account created at :**',
					value: `${theUser.createdAt}`,
					inline: true,
				},
				{
					name: ':joystick: **Playing :**',
					value: `${theMember.presence.game}`,
					inline: true,
				},
				{
					name: ':robot: **Is a bot :**',
					value: `${theUser.bot}`,
					inline: true,
				},
				{
					name: '\u200b',
					value: ':busts_in_silhouette: __**Guild member informations :**__',
				},
				{
					name: ':label: **Nickname on this guild :**',
					value: `${theMember.displayName}`,
					inline: true,
				},
				{
					name: ':paintbrush: **User color :**',
					value: `\`${theMember.displayHexColor}\``,
					inline: true,
				},
				{
					name: ':hourglass: **Join the guild at :**',
					value: `${theMember.joinedAt}`,
					inline: true,
				},
				{
					name: ':necktie: **Roles :**',
					value: `${roleList}`,
					inline: true,
				},
				{
					name: ':trophy: **Highest role :**',
					value: `${theMember.highestRole.name}`,
					inline: true,
				},
				{
					name: ':x: **Kickable :**',
					value: `${theMember.kickable}`,
					inline: true,
				},
				{
					name: ':no_entry_sign: **Bannable :**',
					value: `${theMember.bannable}`,
					inline: true,
				},
			],
			timestamp: new Date(),
			footer: {
				text: `🔵 ${message.client.user.username} - ⓒ 2018 | Made with 💛 & Javascript`,
				icon_url: `${message.client.user.avatarURL}`,
			},
		};
		return message.channel.send({ embed: authorEmbed });
	},
};

// v