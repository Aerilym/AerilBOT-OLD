module.exports = {
	name: 'shoutout',
	aliases: ['so'],
	description: 'shoutout',
	use: '!shoutout',

	
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

		twitchgetuser.get(`/helix/streams?user_login=${args[0].toLowerCase()}`)
		.then((response) => {
			if (!response.data.data[0]) { 
				clientT.say(target, `Go check out ${args[0]} over at https://www.twitch.tv/${args[0]}`); 
				return; 
			}
		  const soName = JSON.stringify(response.data.data[0].user_name).slice(1,-1)
		  const soUserID = JSON.stringify(response.data.data[0].user_id).slice(1,-1)
		  const soGameID = JSON.stringify(response.data.data[0].game_id).slice(1,-1)
		  
		  const twitchgetgame = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });

		twitchgetgame.get(`/helix/games?id=${soGameID}`)
		.then((response) => {
		  const soGame = JSON.stringify(response.data.data[0].name).slice(1,-1)
		  clientT.say(target, `Go check out ${soName} over at https://www.twitch.tv/${soName}, they're playing ${soGame}`);
		})
		.catch((err) => {
		  console.error(err);
		})

		})
		.catch((err) => {
		  console.error(err);
		})


		





	}

}