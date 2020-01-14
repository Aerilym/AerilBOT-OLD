module.exports = {
	name: 'load',
	aliases: ['add'],
	description: 'load',
	use: '!load',

	
	//Actual Command
	execute(target, context, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Broadcaster(context)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");

		const commandNameT = args[0].toLowerCase();
		const commandT = clientT.commandsT.get(commandNameT)
		|| clientT.commandsT.find(cmd => cmd.aliases && cmd.aliases.includes(commandNameT));

		if (!commandT) {
			try {
				const newCommand = require(`./${commandNameT}.js`);
				clientT.commandsT.set(newCommand.name, newCommand);
			} catch (error) {
				console.log(error);
				return clientT.say(target, `There was an error while loading a command`);
			}
			
			return clientT.say(target, `Command was loaded!`);
		}

		return clientT.say(target, `/me \`${commandNameT}\` is already loaded!`);

	}

}

