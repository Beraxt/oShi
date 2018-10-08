const { prefix } = require('../../config.json');

module.exports = {
	name: 'user',
	description: '👤👀 **|** Give information about someone !',
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

		const userEmbed = {
			color: theMember.displayColor,
			// title: ':arrow_right: **Add me** to your server !\n',
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
					name: '**User account created at :**',
					value: `${theUser.createdAt}`,
					inline: true,
				},
				{
					name: '**Is a bot :**',
					value: `${theUser.bot}`,
					inline: true,
				},
				{
					name: '\u200b',
					value: ':busts_in_silhouette: __**Guild member informations :**__',
				},
				{
					name: '**Nickname on this guild :**',
					value: `${theMember.displayName}`,
					inline: true,
				},
				{
					name: '**Playing :**',
					value: `🕹 ${theMember.presence.game}`,
					inline: true,
				},
				{
					name: '**Join the guild at :**',
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
					name: '**User color :**',
					value: `${theMember.displayHexColor}`,
					inline: true,
				},
				{
					name: '**Role color :**',
					value: `${theMember.colorRole.hexColor}`,
					inline: true,
				},
				{
					name: '**Kickable :**',
					value: `${theMember.kickable}`,
					inline: true,
				},
				{
					name: '**Bannable :**',
					value: `${theMember.bannable}`,
					inline: true,
				},
			],
		};
		message.channel.send({ embed: userEmbed });
	},
};
