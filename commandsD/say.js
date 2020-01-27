module.exports = {
	name: 'say',
	aliases: ['aerilybotsays'],
	description: 'say',
	use: '!say',

	
	//Actual Command
	execute(message, args) {

		
		const links = require('../links.json');


		message.channel.send(args.join(' '));

	}

}