module.exports = {
	name: 'next',
	aliases: ['stream', 'nextstream', 'streams', 'schedule'],
	description: 'next',
	use: '!next',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		var fs = require('fs');
		//timezones
		var moment = require('moment-timezone');
		moment().tz("Australia/Melbourne").format();

		delete require.cache[require.resolve(`../streamlist.json`)];
		const streamlist = require('../streamlist.json');

		//checks if 1st item is in the past
		var nowTime = new Date();
		var nowUTC = nowTime.getTime();
		var melbourne = moment.tz(streamlist[0].substr(0,16), "Australia/Melbourne");
		var usertime = melbourne.clone().tz('Australia/Melbourne').format();
		const stYear = usertime.substr(0,4);
		const stMonth = usertime.substr(5,2)-1;
		const stDay = usertime.substr(8,2);
		const stHour = usertime.substr(11,2);
		const stMinute = usertime.substr(14,2);
		const stSecond = usertime.substr(17,2);
		if (Date.UTC(stYear, stMonth, stDay, stHour, stMinute, stSecond)<nowUTC) {
			for (i=0; i<1;) {
				if (!datecheck) { var datecheck = streamlist; }
				var melbourne = moment.tz(datecheck[0].substr(0,16), "Australia/Melbourne");
				var usertime = melbourne.clone().tz('Australia/Melbourne').format();

				//time setup
				const stYear = usertime.substr(0,4);
				const stMonth = usertime.substr(5,2)-1;
				const stDay = usertime.substr(8,2);
				const stHour = usertime.substr(11,2);
				const stMinute = usertime.substr(14,2);
				const stSecond = usertime.substr(17,2);

				if (Date.UTC(stYear, stMonth, stDay, stHour, stMinute, stSecond)<nowUTC) {
					datecheck.shift();
				} else {
					fs.writeFile('./streamlist.json', JSON.stringify(datecheck, null, 4), 'utf8', (err) => {
						if (err) throw err;
							clientT.commandsT.get('next').execute(target, userstate, msg, self, args);
					})
					i++;
					return;
				}
			}
		}

		//melb if no tz selection
		if (!args[0]) { 
			 var usertz = 'Australia/Melbourne';
		} else {
			var usertz = args.join(' '); 
		}

		//aborts if invalid tz
		if (!moment.tz.zone(usertz)) { clientT.say(target, `Sorry I can't find that zone, it needs to be like: America/Los_Angeles`); return; }

		var timeformatted = ["", "", "", "", ""];
		var stringstream = ["", "", "", "", ""];

		if (streamlist.length > 5) { var lengthshow = 5; } else { var lengthshow = streamlist.length; }

		for (n=0; n < lengthshow; n++ ) {
			var melbourne = moment.tz(streamlist[n].substr(0,16), "Australia/Melbourne");
			var usertime = melbourne.clone().tz(usertz).format();

			//time setup
			const stYear = usertime.substr(0,4);
			const stMonth = usertime.substr(5,2)-1;
			const stDay = usertime.substr(8,2);
			const stHour = usertime.substr(11,2);
			const stMinute = usertime.substr(14,2);
			const stSecond = usertime.substr(17,2);
			const tzstring = usertime.substr(19,6);

			const dateowo = new Date(Date.UTC(stYear, stMonth, stDay, stHour, stMinute, stSecond));

			timeformatted[n] = `${stHour}:${stMinute} ${dateowo.toUTCString().substr(0,11)}`;
			stringstream[n] = `PurpleStar ${timeformatted[n]} - ${streamlist[n].substring(16)}`;
		
		}
		clientT.say(target, `For the ${usertz} timezone the next 5 streams are: ${stringstream.join(` `)}`);
	}

}