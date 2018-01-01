

var data = {

	description:{
		question:" Tell me a little bit about yourself?",
		answer:" I am an Android developer, and currently I try to keep myself updated about everything related to Android."
	},

	tech:{
		question:"What excites you about technology?  ",
		answer:"ways in which it can affect my life positively and negatively." 
		},

	techstack:{
		question:"What is your preferred technology stack? ",
		answer:" Android application development"
	},

	hobbies:{
		question:"What are your favorite hobbies?",
		answer:"Watching movies, tech Channels and playing an sport"
	}

};
module.exports = function(option){

	return new Promise(function(resolve,reject){

		if(!option){

			resolve(data);
			//instead fetch data from datbase
		}
		else{

			switch(option){

				case "description":
					resolve(data.description);
					break;
				case "tech":
					resolve(data.tech);
					break;
				case "techstack":
					resolve(data.techstack);
					break;
				case "hobbies":
					resolve(data.hobbies);
					break;
				default:
					reject('Invalid Query');

			}
		}

	});
}