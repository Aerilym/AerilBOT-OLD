module.exports = {
	name: 'discord',
	aliases: ['disc', 'community', 'IRC', 'invite'],
	description: 'discord',
	use: '!discord',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `Join the community Discord! ${links.discord.substring(8)}`);

	}

}