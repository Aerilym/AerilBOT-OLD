module.exports = {
	name: '!uni',
	aliases: ['!university', '!study', '!school'],
	description: 'uni',
	use: '!uni',

	
	//Actual Command
	execute(target, context, msg, self) {
		const links = require('../links.json');

	clientT.say(target, `I'm in my 2nd year of a Bachelor of Science course majoring in Astrophysics and Physics (they're two different things Kappa ) Want to know more? I'm happy to answer and questions! `);

	}

}