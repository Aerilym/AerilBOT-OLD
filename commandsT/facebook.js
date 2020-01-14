module.exports = {
	name: 'facebook',
	aliases: ['fb', 'face'],
	description: 'facebook',
	use: '!facebook',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `Be sure to like my Facebook page for extra content! ` + links.facebook.substring(8));

	}

}