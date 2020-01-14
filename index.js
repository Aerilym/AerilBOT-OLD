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
	  config.CHANNEL_NAME
	]
  };

  //var TwitchJs = require('twitch-js')
  //const twitchJs = new TwitchJs({ BOT_USERNAME, OAUTH_TOKEN })

clientD = new Discord.Client();
clientT = new tmi.client(opts);
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
  
  // Connect to Twitch:
  clientT.connect();
  
//Twitch command handle
for (const file of commandFilesT) {
	const commandT = require(`./commandsT/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	clientT.commandsT.set(commandT.name, commandT);
}
/*
const cooldowns = new Discord.Collection();
*/
clientT.once('ready', () => {
	console.log('Ready!');
});

const permissions = require('./permission.js');

function onMessageHandler (target, context, msg, self) {

	//if (self) { return; } // Ignore messages from the bot
	if (msg.charAt(0)!=config.prefix) { return; }  // Ignore messages with no prefix

//console.log("msg: " + msg);

	//Creates args array which contains everything after the prefix split by strings
	const args = msg.slice(config.prefix.length).split(/ +/);
	
	//Creates commad constant was first string after prefix, then removes it from the args string.
	const commandNameT = args.shift().toLowerCase();

	//console.log("commandNameT: " + commandNameT);
	//console.log("args: " + args);

	const commandT = clientT.commandsT.get(commandNameT)
		|| clientT.commandsT.find(cmd => cmd.aliases && cmd.aliases.includes(commandNameT));

	if (!commandT) return;
/*
	if (!cooldowns.has(commandT.name)) {
		cooldowns.set(commandT.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(commandT.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
*/
	try {
		commandT.execute(target, context, msg, self, args);
	} catch (error) {
		console.error(error);
		console.log('there was an error trying to execute that command!');
	}
};

  // Called every time the bot connects to Twitch chat
  function onConnectedHandler (addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
  }



//endtwtich


//Don't touch this for the love of god and keep it at the end :)
clientD.login(config.token);