// const { unsplashAccessKey, unsplashSecretKey } = require('../../config.json');

// // ES Modules syntax
// import Unsplash from 'unsplash-js';

// // require syntax
// const Unsplash = require('unsplash-js').default;

// const unsplash = new Unsplash({
//   applicationId: unsplashAccessKey,
//   secret: unsplashSecretKey,
//   callbackUrl: "{CALLBACK_URL}"
// });

// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//     "public",
//     "read_user",
//     "write_user",
//     "read_photos",
//     "write_photos"
// ]);

// unsplash.auth.userAuthentication(query.code)
//   .then(toJson)
//   .then(json => {
//     unsplash.auth.setBearerToken(json.access_token);
//   });
// unsplash.users.profile("naoufal")
//   .catch(err => {
//     console.error(error);
//   });

//   location.assign(authenticationUrl);

// module.exports = {
// 	name: 'bunny',
// 	description: ':rabbit:️ **|** Display a random bunny pic',
// 	aliases: ['rabbit'],
// 	usage: '',
// 	type: 'interaction',
// 	cooldown: 15,
// 	args: true,
// 	guild: true,
// 	execute(message, args) {
//         message.channel.send('wsh');
// 	},
// };

// // v