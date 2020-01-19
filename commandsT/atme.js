module.exports = {
	name: 'atme',
	aliases: ['attack', 'attackme', '@me', '@'],
	description: 'atme',
	use: '!atme',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
	clientT.say(target, `${userstate['display-name']}`);

	}

}