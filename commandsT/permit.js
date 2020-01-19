module.exports = {
	name: 'permit',
	aliases: ['allow'],
	description: 'permit',
	use: '!permit',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Mod(userstate)) { console.log("User does not have permission"); return; } //Mod Permission
		console.log("User has permission");

		const axios = require('axios');
		const config = require('../config.json');
		const linkPermit = require('../linkpermit.json');
		if (!args[0]) {return;}
		const linkPermitName = JSON.stringify(args[0].toLowerCase().replace('@',''));

		var fs = require('fs');
		// fs is a module of nodejs to interact with file system
		// we specify the file name and the stringified JSON object
		// as well as a callback to handle a possible error
		fs.writeFile('linkpermit.json', JSON.stringify(linkPermitName, null, 4), 'utf8', (err) => {
		  if (err) throw err
		})

		function removePermit() {
			const linkPermit = require('../linkpermit.json');

		const linkPermitName = JSON.stringify("aerilym_");

		var fs = require('fs');
		// fs is a module of nodejs to interact with file system
		// we specify the file name and the stringified JSON object
		// as well as a callback to handle a possible error
		fs.writeFile('linkpermit.json', JSON.stringify(linkPermitName, null, 4), 'utf8', (err) => {
		  if (err) throw err
		})
		}
		clientT.say(target, `@${linkPermitName.slice(1,-1)} You have 30 seconds to post your link!`);
		permitRemover = setTimeout(removePermit, 30000);
	}

}