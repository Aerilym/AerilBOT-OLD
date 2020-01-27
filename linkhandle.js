module.exports = {
	scanLink: function (target, userstate, msg, self) {
	if (msg.includes("twitch.tv/aerilym_") || msg.includes("twitch.tv/"&&"clip") || msg.includes("clips.twitch.tv/")){ return; }
	else if (userstate['custom-reward-id']) {
		if (userstate['custom-reward-id']==='f87a2700-6470-4693-a4e6-dd3202fbf3f'&&msg.includes("youtube.com"||"youtu.be")) { return; }
	} else { 
		clientT.deletemessage(target, userstate['id']); 
		/*delete require.cache[require.resolve('/linkwarning.json')];
		const warncheck = require('/linkwarning.json');
		if 
				fs.writeFile('/linkwarning.json', JSON.stringify(warncheck.concat([userstate.username]), null, 4), 'utf8', (err) => {
					if (err) throw err
				})

				function warnCooldown(userstate) {
				delete require.cache[require.resolve('/linkwarning.json')];
				const warncheck = require('/linkwarning.json');
				removewarn = warncheck.filter(e => e !== userstate.username);
				fs.writeFile('./whois.json', JSON.stringify(removewarn, null, 4), 'utf8', (err) => {
					if (err) throw err
				  })
				}
				setTimeout(warnCooldown(userstate), 60000*30);*/


}
}
};