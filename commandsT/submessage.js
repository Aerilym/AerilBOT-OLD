module.exports = {
	name: 'submessage',
	aliases: ['freemessage', 'streammessage', 'submess'],
	description: 'submessage',
	use: '!submessage',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		const permissions = require('../permission.js');
		var fs = require('fs');
		if (!permissions.Sub(userstate)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");
		
		delete require.cache[require.resolve('../submessageuses.json')];
		const submessageuses = require(`../submessageuses.json`)
		var nowTime = new Date();
		var nowUTC = nowTime.getTime();

		//if ( submessageuses.length <1 ) { checklength = 1 } else { checklength = submessageuses.length; }
		for (n=0; n < submessageuses.length; n++) {
			console.log(n);
			console.log(submessageuses[n]);
		if ( submessageuses[n].includes(userstate.username) ) {
			console.log("it do");
			return;
		}
	}

			Smessage = args.join(` `);
			fs.writeFile('./submessageuses.json', JSON.stringify(submessageuses.concat([`${nowUTC} | ${userstate.username}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
			})
			clientD.commandsD.get('submessage').execute(msg, args);






	}

}