module.exports = {
	name: 'youtube',
	aliases: ['yt', 'vod', 'vid', 'past'],
	description: 'youtube',
	use: '!youtube',
	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `Check out my YouTube channel :) ${links.youtube.substring(8)}`);

	}

}