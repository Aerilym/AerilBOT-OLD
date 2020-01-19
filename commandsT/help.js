module.exports = {
	name: 'help',
	aliases: ['commands', 'command'],
	description: 'help',
	use: '!help',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		console.log(target);
		if (target !== `#aerilbot`) {
			clientT.say(target, `Please use this command over at twitch.tv/AerilBOT`);
			return;
		}

		clientT.say(target, `here are the commands`)
	}

}