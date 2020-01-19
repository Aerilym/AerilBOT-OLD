module.exports = {
	scanLink: function (target, userstate, msg, self) {
	if (msg.includes("twitch.tv/aerilym_") || msg.includes("twitch.tv/"&&"clip") || msg.includes("clips.twitch.tv/")){ return; }
	else if (userstate['custom-reward-id']) {
		if (userstate['custom-reward-id']==='f87a2700-6470-4693-a4e6-dd3202fbf3f'&&msg.includes("youtube.com"||"youtu.be")) { return; }
	} else { clientT.deletemessage(target, userstate['id']); }
}
};