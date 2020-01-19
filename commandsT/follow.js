module.exports = {
	name: 'follow',
	aliases: ['followers'],
	description: 'followers',
	use: '!followers',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		const axios = require('axios');
		const config = require('../config.json');

		const twitchget = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });


		twitchget.get('/helix/users/follows?to_id=107455709')
		.then((response) => {
		  console.log(JSON.stringify(response.data.total, null, 2));
		  clientT.say(target, `Enjoying the stream? Want to know when I'm live? Why not join the other ${JSON.stringify(response.data.total, null, 2)} awesome followers? You're all amazing! <3`);
		})
		.catch((err) => {
		  console.error(err);
		})





	}

}