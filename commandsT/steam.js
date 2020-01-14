module.exports = {
	name: 'steam',
	aliases: ['curator', 'steamgroup'],
	description: 'steam',
	use: '!steam',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `Join the community Steam group & curator page! ` + links.steam.substring(8));

	}

}