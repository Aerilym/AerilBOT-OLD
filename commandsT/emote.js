module.exports = {
	name: 'emote',
	aliases: ['fremotes', 'freemotes'],
	description: 'emote',
	use: '!emote',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const bttvemotes = `PepoDance pepeJAMMER pepeJAM pepeD PartyParrot lewiPlz kekw HYPEROMEGACATBEDOINGTHELAUNDRYULTRA gachiHYPER gachiBASS FeelsRedditMan COGGERS ClapHD Clap bongoTap`;
		const ffzemotes = `WTFF weSmart TrainSkip ToroSalt SuchMeme PressF PPHands PogU POGGIES POGGERS Pog pikachuS pepeScheme PepeREE PepeHands PepeGun Pepega Pepeg peepoRIP peepoLove peepoHug PeekaBoo OMEGALUL okiRIP OhISee monkaW monkaTOS monkaS monkaHmm monkaH monkaGun monkaGIGA monkaEyes mantheSub LULW KEKW JUSTDOIT HYPERBRUH FeelsSpecialMan FeelsAmazingMan FacePalm drinkWater dogeKek ChooChoo Bruh `;

	clientT.say(target, `Here be all the free emotes! FFZ: ${ffzemotes}`);
	clientT.say(target, `BTTV: ${bttvemotes}`);

	}

}