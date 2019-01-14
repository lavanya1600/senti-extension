var express = require('express');
var app = express();
var qs = require('querystring');
var senti = require('./senti');

app.get('/:url',function(req,res){
	var data = qs.parse(req.params.url);
	console.log(data.q);
	var final  = senti(data.q);
	final.then(function(val){
		console.log(val);
		if(val>0.5)
			res.send("Your Mood Is POSITIVE");
		else
			res.send("Your Mood Is NEGATIVE");
	});
	
});

app.listen(3000);
console.log("Listening on port 3000");