module.exports = {
	Sub: function (userstate) {//Sub only permission
		if(userstate.subscriber) { return true;
		} else if(userstate.mod) { return true;
		} else if(userstate.badges){ if(userstate.badges.broadcaster) { return true; }
		} else { return false; }
	},
		
	Mod: function (userstate) {//Mod only permission
		if(userstate.mod) { return true;
		} else if(userstate.badges){ if(userstate.badges.broadcaster) { return true; }
		} else { return false; }
	},

	Broadcaster: function (userstate) {//Broadcaster only permission
		 if(userstate.badges) { if(userstate.badges.broadcaster) {return true; }
		 } else { return false; }
	}
  };
