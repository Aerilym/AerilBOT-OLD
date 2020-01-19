module.exports = {
	name: 'edsm',
	aliases: ['elite', 'ed', 'edprofile'],
	description: 'edsm',
	use: '!edsm',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `Check out my Elite Dangerous star map & profile! ${links.edsmT.substring(8)}`);

	}

}