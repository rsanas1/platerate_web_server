

var data = {

	description:{
		question:" Tell me a little bit about yourself?",
		answer:" My name is Rishi Sanas "
	},

	tech:{
		question:"What excites you about technology?  ",
		answer:"Consuming it " 
		},

	techstack:{
		question:"What is your preferred technology stack? ",
		answer:" Mobile "
	},

	hobbies:{
		question:"What are your favorite hobbies?",
		answer:"Movies, Sports "
	}

};
module.exports = function(option){

	return new Promise(function(resolve,reject){

		if(!option){

			resolve(data);
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