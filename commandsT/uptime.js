module.exports = {
	name: 'uptime',
	aliases: ['livetime'],
	description: 'uptime',
	use: '!uptime',

	
	//Actual Command
	execute(target, context, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Mod(context)) { console.log("User does not have permission"); return; } //Mod Permission
		console.log("User has permission");

		const axios = require('axios');
		const config = require('../config.json');

		const twitchgetuser = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });

		twitchgetuser.get(`/helix/streams?user_login=yogscast`)
		.then((response) => {
			//const uptime = JSON.stringify(response.data).slice(1,-1)
			//clientT.say(target, `Aerilym_ has been live for ${uptime}`);
			console.log(response.data);
		  })
		
	}

}