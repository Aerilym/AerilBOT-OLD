const fs = require('fs');
const Discord = require('discord.js');
const tmi = require('tmi.js');
const axios = require('axios');

const config = require('./config.json');

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(config.giphyToken)

  // Define configuration options
  const opts = {
	identity: {
	  username: config.BOT_USERNAME,
	  password: config.OAUTH_TOKEN
	},
	channels: [
	  config.CHANNEL_NAME,
	  config.BOT_USERNAME
	]
  };

  const optsListen = {
	identity: {
	  username: config.CHANNEL_NAME,
	  password: config.OAUTH_TOKEN_AERILYM
	},
	channels: [
	  config.CHANNEL_NAME,
	]
  };
  //var TwitchJs = require('twitch-js')
  //const twitchJs = new TwitchJs({ BOT_USERNAME, OAUTH_TOKEN })

clientD = new Discord.Client();
clientT = new tmi.client(opts);
clientTListen = new tmi.client(optsListen);
clientD.commandsD = new Discord.Collection();
clientT.commandsT = new Discord.Collection();
const commandFilesD = fs.readdirSync('./commandsD').filter(file => file.endsWith('.js'));
const commandFilesT = fs.readdirSync('./commandsT').filter(file => file.endsWith('.js'));

const twitchget = axios.create({
	baseURL: 'https://api.twitch.tv',
	headers: {'Client-ID': config.CLIENT_ID},
  });

//Discord command handle
for (const file of commandFilesD) {
	const commandD = require(`./commandsD/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	clientD.commandsD.set(commandD.name, commandD);
}

clientD.once('ready', () => {
	console.log('Discord is a Go!');
});

//Read Message
clientD.on('message', message => {
	//Creates args array which contains everything after the prefix split by strings
	const args = message.content.slice(config.prefix.length).split(/ +/);
	//Creates commad constant was first string after prefix, then removes it from the args string.
	const commandD = args.shift().toLowerCase();
	//Ignore if the text doesnt have any valid command
	if (!clientD.commandsD.has(commandD)) return;
try {
	clientD.commandsD.get(commandD).execute(message, args);
	//Makes sure that if shit hits the fan the bot doesn't panic
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
})
// Create an event listener for new guild members
clientD.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const userJoinChannel = member.guild.channels.find(ch => ch.name === 'general');
	// Do nothing if the channel wasn't found on this server
	if (!userJoinChannel) return;
	// Send the message, mentioning the member
	userJoinChannel.send(`Welcome to **${member.guild.name}**, ${member} :partying_face:`);
  });

  //Twitch
  
  // Register our event handlers (defined below)
  clientT.on('message', onMessageHandler);
  clientT.on('connected', onConnectedHandler);
 // clientTListen.on('message', onMessageHandler2);
  clientTListen.on('connected', onConnectedHandler2);
  
  clientT.connect();  // Connect to Twitch:
  clientTListen.connect();  // Connect to Twitch:
  
//Twitch command handle
for (const file of commandFilesT) {
	const commandT = require(`./commandsT/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	clientT.commandsT.set(commandT.name, commandT);
}

clientT.once('ready', () => { console.log('Ready!'); });
clientTListen.once('ready', () => { console.log('Ready!'); });



//Event Listeners
clientTListen.on("anongiftpaidupgrade", (channel, username, userstate) => {
	if (!userstate['display-name']) { messagename = username; } else { messagename = userstate['display-name']; }
	clientT.say(channel, `${messagename} just continued their Gift Sub! Thanks so much for sticking with me!`);
});
clientTListen.on("ban", (channel, username, reason, userstate) => {
    // Do your stuff.
});
clientTListen.on("cheer", (target, userstate, msg) => {
	if (!userstate['display-name']) { messagename = username; } else { messagename = userstate['display-name']; }
	clientT.say(target, `${messagename} just cheered ${userstate.bits} bits! Thank you so much!`);
});
clientTListen.on("giftpaidupgrade", (channel, username, sender, userstate) => {
	clientT.say(channel, `${username} just continued their Gift Sub from ${sender}! Thanks for sticking with me!`);
});
clientTListen.on("hosted", (channel, username, viewers, autohost) => {
	setTimeout( function () {
		clientT.say(channel, `${username} is now hosting us with ${viewers} viewers! Welcome everyone!`);
		msg = 'host';
		self = false;
		args = [username];
		clientT.commandsT.get('shoutout').execute(channel, require(`./givendata/aerilbot.json`), msg, self, args);
	}, 5000)
});
clientTListen.on("hosting", (channel, target, viewers) => {
	clientT.say(channel, `${channel} is now hosting ${target} with ${viewers} viewers!`);
});
clientTListen.on("raided", (channel, username, viewers) => {
	setTimeout( function () {
		clientT.say(channel, `${username} is raiding with ${viewers} viewers! Welcome everyone!`);
		msg = 'raid';
		self = false;
		args = [username];
		clientT.commandsT.get('shoutout').execute(channel, require(`./givendata/aerilbot.json`), msg, self, args);
	}, 5000)
});
clientTListen.on("resub", (channel, username, months, message, userstate, methods) => {
    // Do your stuff.
	let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
	clientT.say(channel, `${username} Re-Subscribed for ${cumulativeMonths} months!!! Thanks for all the support! They said: ${message}`);
});
clientTListen.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
	let senderCount = ~~userstate["msg-param-sender-count"];
	clientT.say(channel, `Thanks for gifting a Sub to ${recipient}! You're a legend ${username}! ${username} has gifted ${senderCount} total Subs!`);
});
clientTListen.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
	let senderCount = ~~userstate["msg-param-sender-count"];
	clientT.say(channel, ` ${username} is gifting ${numbOfSubs} subs to the community! ${username} has gifted ${senderCount} total Subs! What a legend!`);
});
clientTListen.on("subscription", (channel, username, method, message, userstate) => {
	clientT.say(channel, `${username} just Subscribed!!! Thanks for the support!`);
});


const permissions = require('./permission.js');
const linkhandle = require('./linkhandle.js');
const linkPermit = require('./linkpermit.json');

//function onMessageHandler2 (target, userstate, msg, self) {
//	if (self) {return;}
//	clientTListen.say(target, `fugma`);
//}


function onMessageHandler (target, userstate, msg, self) {
	if (self) { return; } // Ignore messages from the bot
	if (userstate.username === "buttsbot") { return; } // Ignore messages from buttsbot

	if (msg.toLowerCase() === `aerilbot yes`) { 
		var yesResponse = Math.random();
		if (yesResponse >= 0 && yesResponse < 0.5 ) { clientT.say(target, `:)`); }		//50%
		if (yesResponse >= 0.5 && yesResponse < 0.75 ) { clientT.say(target, `:D`); }	//25%
		if (yesResponse >= 0.75 && yesResponse < 0.9 ) { clientT.say(target, `LUL`); }	//15%
		if (yesResponse >= 0.9 && yesResponse <= 1 ) { clientT.say(target, `aerilyPog aerilyPog `); }	//10%
		
	}

	//Link subhandler
	if (msg.includes("www.") || msg.includes("http://") || msg.includes("https://") || msg.includes(".com") || msg.includes(".org") || msg.includes(".net") || msg.includes(".co") || msg.includes(".ru") || msg.includes(".tv") || msg.includes(".biz") || msg.includes(".gg")){
		delete require.cache[require.resolve('./linkpermit.json')];
		const linkPermit = require('./linkpermit.json');
		if (permissions.Mod(userstate)) { return; 
		} else if (linkPermit.slice(1,-1)===userstate.username.toLowerCase()) {const linkPermitName = JSON.stringify("aerilym_"); var fs = require('fs'); fs.writeFile('linkpermit.json', JSON.stringify(linkPermitName, null, 4), 'utf8', (err) => { if (err) throw err })
		} else { linkhandle.scanLink(target, userstate, msg, self); }
	}

	if (userstate['custom-reward-id']) {
		if (userstate['custom-reward-id']==='0aad94bd-aa90-4ee8-ba0d-bd87b420cb2f') { if(!userstate.mod) {try {clientT.timeout(target, userstate.username, 426, "They Redeemed Devil's Time Out"); } catch (error) { } } }
		if (userstate['custom-reward-id']==='1d25daa1-09f2-4c6c-9278-ab31d4f265eb') { clientT.say(target, `drinkWater drinkWater drinkWater`); }
	}

	if (msg.charAt(0)!=config.prefix) { return; }  // Ignore messages with no prefix
	const args = msg.slice(config.prefix.length).split(/ +/);	//Creates args array which contains everything after the prefix split by strings
	const commandNameT = args.shift().toLowerCase();	//Creates commad constant was first string after prefix, then removes it from the args string.
	const commandT = clientT.commandsT.get(commandNameT)
		|| clientT.commandsT.find(cmd => cmd.aliases && cmd.aliases.includes(commandNameT));
	if (!commandT) return;
	try {
		commandT.execute(target, userstate, msg, self, args);
	} catch (error) {
		console.error(error);
		console.log('there was an error trying to execute that command!');
	}
};

  // Called every time the bot connects to Twitch chat
  function onConnectedHandler (addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
  }
  function onConnectedHandler2 (addr, port) {
	console.log(`* Listener Connected to ${addr}:${port}`);
  }

clientD.login(config.token); //Don't touch this for the love of god and keep it at the end :)