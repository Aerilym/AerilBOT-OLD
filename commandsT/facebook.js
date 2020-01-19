module.exports = {
	name: 'facebook',
	aliases: ['fb', 'face'],
	description: 'facebook',
	use: '!facebook',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `Like and follow the facebook page for clips! ${links.facebook.substring(8)}`);

	}

}