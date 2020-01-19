module.exports = {
	name: 'contact',
	aliases: ['appeal', 'report', 'contactform'],
	description: 'contact',
	use: '!contact',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `You can contact the mod team, report a user, or make an appeal at ${links.contact.substring(8)}`);

	}

}