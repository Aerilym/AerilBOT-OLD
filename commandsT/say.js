module.exports = {
	name: 'say',
	aliases: ['aerilybotsays'],
	description: 'say',
	use: '!say',

	
	//Actual Command
	execute(target, context, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Broadcaster(context)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");
		
		const links = require('../links.json');


	clientT.say(target, args.join(' '));

	}

}