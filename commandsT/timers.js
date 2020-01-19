module.exports = {
	name: 'timers',
	aliases: ['timer'],
	description: 'timer',
	use: '!timer',
	//Actual Command
	execute(target, userstate, msg, self, args) {
		
		const links = require('../links.json');
		const axios = require('axios');
		const config = require('../config.json');
		const permissions = require('../permission.js');
		if (!permissions.Broadcaster(userstate)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");

		//Timers to call
function timerDiscord() {
	clientT.commandsT.get('discord').execute(target, userstate, msg, self, args);
}
function timerFollow() {
	clientT.commandsT.get('follow').execute(target, userstate, msg, self, args);
}
//function timerSub() {
//	clientT.commandsT.get('!discord').execute(target, userstate, msg, self, args)
//}
function timerTip() {
	clientT.commandsT.get('tip').execute(target, userstate, msg, self, args);
}
function timerHost() {

		const twitchgetuser = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });

		twitchgetuser.get(`/helix/streams?user_login=aerilbot`)
		.then((response) => {
			console.log(response)
			if (!response.data.data[0]) { 
				return; 
			}

		})
}

		clientT.say(`#aerilbot`, `/host aerilym_`)

		//Timers (ms)
		intervalDiscord = setInterval(timerDiscord, 60000*25);
		intervalFollow = setInterval(timerFollow, 60000*34);
		//intervalSub = setInterval(timerSub, 60000);
		intervalTip = setInterval(timerTip, 60000*58);
		//intervalHost = setInterval(timerHost, 60000*30);
		clearInterval(intervalDiscord);
		clearInterval(intervalFollow);
		clearInterval(intervalTip);
		//clearInterval(intervalHost);
		intervalDiscord = setInterval(timerDiscord, 60000*25);
		intervalFollow = setInterval(timerFollow, 60000*34);
		//intervalSub = setInterval(timerSub, 60000);
		intervalTip = setInterval(timerTip, 60000*58);
		//intervalHost = setInterval(timerHost, 60000*60);

	}

}