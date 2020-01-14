module.exports = {
	name: 'timers',
	aliases: ['timer'],
	description: 'timers',
	use: '!timers',

	
	//Actual Command
	execute(target, context, msg, self) {

		const permissions = require('../permission.js');
		if (!permissions.Broadcaster(context)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");
		
		const links = require('../links.json');

		//Timers to call
function timerDiscord() {
	clientT.commandsT.get('!discord').execute(target, context, msg, self)
}
//function timerFollow() {
//	clientT.commandsT.get('!discord').execute(target, context, msg, self)
//}
//function timerSub() {
//	clientT.commandsT.get('!discord').execute(target, context, msg, self)
//}
function timerTip() {
	clientT.commandsT.get('!tip').execute(target, context, msg, self)
}

		//Timers (ms)

		setInterval(timerDiscord, 1800000)
//		setInterval(timerFollow, 1800000)
//		setInterval(timerSub, 3000000)
		setInterval(timerTip, 1500000)

	}

}