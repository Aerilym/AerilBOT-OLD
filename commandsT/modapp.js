module.exports = {
	name: 'modapp',
	aliases: ['apply'],
	description: 'modapp',
	use: '!modapp',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `So you think you have what it takes to be a Moderator? Apply at ` + links.modapp.substring(8));

	}

}