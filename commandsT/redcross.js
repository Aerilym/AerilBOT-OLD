module.exports = {
	name: 'tip',
	aliases: ['donate', 'streamlabs', 'slabs', 'red', 'fire', 'aus', 'australia', 'bushfire', 'support', 'redcross', 'sup'],
	description: 'tip',
	use: '!tip',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `Donate to the Australian Red Cross & help those affected by the Australian fires! ` + links.streamlabs.substring(8));

	}

}