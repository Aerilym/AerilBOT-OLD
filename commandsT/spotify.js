module.exports = {
	name: 'spotify',
	aliases: ['music'],
	description: 'spotify',
	use: '!spotify',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `If you're curious about what I listen to, here's my Spotify I guess MiniK ${links.spotifyT.substring(8)}`);

	}

}