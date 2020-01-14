module.exports = {
	name: 'reload',
	aliases: ['refresh'],
	description: 'reload',
	use: '!reload',

	
	//Actual Command
	execute(target, context, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Broadcaster(context)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");

		const commandNameT = args[0].toLowerCase();
		const commandT = clientT.commandsT.get(commandNameT)
		|| clientT.commandsT.find(cmd => cmd.aliases && cmd.aliases.includes(commandNameT));

		if (!commandT) {
			return clientT.say(target, `/me There is no command with name or alias \`${commandNameT}\`!`);
		}

		delete require.cache[require.resolve(`./${commandNameT}.js`)];

		try {
			const newCommand = require(`./${commandNameT}.js`);
			clientT.commandsT.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			return clientT.say(target, `There was an error while reloading a command`);
		}
		
		clientT.say(target, `Command was reloaded!`);

	}

}