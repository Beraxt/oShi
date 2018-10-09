const { prefix } = require('../../config.json');

module.exports = {
	name: 'user',
	description: ':bust_in_silhouette::eyes: **|** Give information about someone !',
	aliases: ['u', 'member'],
	usage: '@user',
	type: 'information',
	cooldown: 30,
	args: true,
	guild: false,
	execute(message, args) {
		const theUser = message.mentions.users.first();
		const theMember = message.mentions.members.first();
		console.log('theUser = ');
		console.log(theUser);
		console.log('theMember = ');
		console.log(theMember);
		const roleList = theMember.roles.map(role => ' ' + role.name);
		roleList.shift();
		let authorStatus = theUser.presence.status;
		switch (authorStatus) {
		case 'online':
			authorStatus = 'Ready to chat ! :green_apple';
			break;
		case 'idle':
			authorStatus = 'AFK. :orange:';
			break;
		case 'dnd':
			authorStatus = 'Busy I think ? :tomato:';
			break;
		case 'offline':
			authorStatus = 'Sleeping.. :egg:';
			break;
		}

		const userEmbed = {
			color: theMember.displayColor,
			title: ':point_down: __**U S E R   I N F O R M A T I O N S**__ :point_down:',
			// url: `${theUser.avatarURL}`,
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
		message.channel.send({ embed: userEmbed });
	},
};
