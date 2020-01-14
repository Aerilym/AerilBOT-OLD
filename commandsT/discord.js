module.exports = {
	name: 'discord',
	aliases: ['disc', 'community', 'IRC'],
	description: 'discord',
	use: '!discord',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `Join the community Discord! ` + links.discord.substring(8));

	}

}