module.exports = {
	name: 'lurk',
	aliases: ['lurking'],
	description: 'lurk',
	use: '!lurk',

	
	//Actual Command
	execute(target, user, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `/me CoolCat ` + user.username + ` is now lurking, thx for hanging out! CoolCat `);

	}

}