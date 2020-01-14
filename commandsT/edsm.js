module.exports = {
	name: 'edsm',
	aliases: ['elite', 'ed', 'edprofile'],
	description: 'edsm',
	use: '!edsm',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `Check out my Elite Dangerous profile! ` + links.edsm.substring(8));

	}

}