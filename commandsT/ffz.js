module.exports = {
	name: 'ffz',
	aliases: ['bttv', 'btv', 'extention', 'frankerfacez', 'betterttv', 'franker', 'frankerface', 'frankers'],
	description: 'ffz',
	use: '!ffz',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `To view all the free emotes used in this chat you'll need the FrankerFaceZ or BTTV plugin for your browser - https://www.frankerfacez.com/ or https://betterttv.com/`);

	}

}