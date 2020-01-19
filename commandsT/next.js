module.exports = {
	name: 'next',
	aliases: ['tz', '!timezone'],
	description: 'next',
	use: '!next',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

//timezones
var moment = require('moment-timezone');
moment().tz("Australia/Melbourne").format();
var jun = moment("2014-06-01T12:00:00Z");
var dec = moment("2014-12-01T12:00:00Z");

jun.tz('America/Los_Angeles').format('ha z');  // 5am PDT
dec.tz('America/Los_Angeles').format('ha z');  // 4am PST

jun.tz('America/New_York').format('ha z');     // 8am EDT
dec.tz('America/New_York').format('ha z');     // 7am EST

jun.tz('Europe/London').format('ha z');           // 9pm JST
dec.tz('Europe/London').format('ha z');           // 9pm JST

jun.tz('Australia/Melbourne').format('ha z');     // 10pm EST
dec.tz('Australia/Melbourne').format('ha z');     // 11pm EST

var melbourne    = moment.tz("2014-06-01 12:00", "Australia/Melbourne");
var losAngeles = melbourne.clone().tz("America/Los_Angeles");
var newYork     = melbourne.clone().tz("America/New_York");
var london     = melbourne.clone().tz("Europe/London");

melbourne.format();    // 2014-06-01T12:00:00-04:00
newYork.format();    // 2014-06-01T12:00:00-04:00
losAngeles.format(); // 2014-06-01T09:00:00-07:00
london.format();     // 2014-06-01T17:00:00+01:00

console.log(melbourne.format());
console.log(losAngeles.format());
console.log(newYork.format());
console.log(london.format());
console.log(target);
console.log(context);
console.log(msg);
console.log(self);

	clientT.say(target, `Join the community Discord! ` + links.discord.substring(8));

	}

}