module.exports = {
	name: 'DEADtip',
	aliases: ['DEADdonate', 'DEADstreamlabs', 'DEADslabs', 'tts'],
	description: 'tip',
	use: '!tip',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `Want to support the stream? You can send a tip at ${links.streamlabs.substring(8)}`);

	}

}