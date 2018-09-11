exports.commands = ["cookies", "cs"];

var api;
var users = {};

exports.constructor = (cbceAPI) => {
	api = cbceAPI;
};

exports.cs = {
	execute: (command, parameters, message) => {
		this.cookies.execute(command, parameters, message);
	}
};

exports.cookies = {
	execute: (command, parameters, message) => {
		if (parameters === null || parameters[0] === undefined) {
			var reciever = message.username.toLowerCase();
		
			if (users[reciever] === undefined) {
				api.say(message.username + " does not have any cookies. :(");
			} else {
				api.say(message.username + " has " + users[reciever] + " cookies! :)");
			}
			
			return;
		}
		
		var reciever = parameters[0].toLowerCase();
		
		if (users[reciever] === undefined) {
			users[reciever] = 1;
		} else {
			users[reciever] = users[reciever] + 1;
		}
		
		api.say(reciever + " has been given a cookie from " + message.username + "!");
	}
};