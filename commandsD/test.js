module.exports = {
	name: 'test',
	description: 'test',
	use: '!test',

	//Actual Command
	execute(message, args) {

				message.channel.send(member.guild.name)
	}

}