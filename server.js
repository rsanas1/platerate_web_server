// server.js
// load the things we need
var express = require('express');
var app = express();
var request_data = require('./request_data.js');

var request_aboutme = require('./request_aboutme');

var PORT = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

//requestData
app.get('/post',function(req,res){

	request_data().then(function(data){
		
		console.log(data[0]);

		res.render('pages/post',{notes:data});

	}).catch(function(error){

	});

});

//index page
app.get('/', function(req, res) {
    res.send('Home Page');
});

// aboutme page 
app.get('/aboutme', function(req, res) {
    //res.render('pages/about');

    request_aboutme(req.query.q)
    	.then(function(data){

    			res.send(JSON.stringify(data),null,4);
    	}).catch(function(error){
    		res.send(error);
    	});
  
});


//server listening on port 3000
app.listen(PORT,function(){
	console.log(PORT+' is the magic port');
});
