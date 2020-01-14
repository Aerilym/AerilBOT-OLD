module.exports = {
	name: 'spotify',
	aliases: ['music'],
	description: 'spotify',
	use: '!spotify',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `If you're curious about what I listen to, here's my Spotify I guess MiniK ` + links.spotify.substring(8));

	}

}