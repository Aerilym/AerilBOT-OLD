module.exports = {
	name: 'instagram',
	aliases: ['ig', 'insta', 'photography'],
	description: 'instagram',
	use: '!instagram',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `I've got a whole load of hobbyist photography shiz on my Instagram ` + links.instagram.substring(8));

	}

}