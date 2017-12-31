const request = require('request');
var URL ='https://jsonplaceholder.typicode.com/posts'
 
module.exports = function(){

	return new Promise(function(resolve,reject){
		request({
			url:URL,
			json:true
		}, function(error,response,body){

			if(error){
				reject('Unable to fetch Response');
			}

			else{

				resolve(body);
			}

		});
	});
};
/*request(URL, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});*/