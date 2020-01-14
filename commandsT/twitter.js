module.exports = {
	name: '!twitter',
	aliases: ['!tweet'],
	description: 'twitter',
	use: '!twitter',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `Follow me on Twitter for updates! ` + links.twitter.substring(8));

	}

}