module.exports = {
	Sub: function (context) {//Sub only permission
		if(context.subscriber) { return true;
		} else if(context.mod) { return true;
		} else if(context.badges){ if(context.badges.broadcaster) { return true; }
		} else { return false; }
	},
		
	Mod: function (context) {//Mod only permission
		if(context.mod) { return true;
		} else if(context.badges){ if(context.badges.broadcaster) { return true; }
		} else { return false; }
	},

	Broadcaster: function (context) {//Broadcaster only permission
		 if(context.badges) { if(context.badges.broadcaster) {return true; }
		 } else { return false; }
	}
  };
