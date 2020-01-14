module.exports = {
	name: 'DEAD!tip',
	aliases: ['DEAD!donate', 'DEAD!streamlabs', 'DEAD!slabs', '!tts'],
	description: 'tip',
	use: '!tip',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `Want to support the stream? You can send a tip at ` + links.streamlabs.substring(8));

	}

}