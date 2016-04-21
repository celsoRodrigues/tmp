var express=require('express');
var app=express();
var logger=require('./logger_module');

app.set('port', process.env.PORT||process.argv[2]||3000);

app.use(logger.log);
app.use(express.static(__dirname+'/public'));


app.get('/about', function(req, res){
	res.sendFile(__dirname+'/public/about.htm');

});

app.use(function(req, res, next){

	res.status(404);
	res.sendFile(__dirname+'/public/404.html');

});

app.use(function(err, req, res){
	if(err){
		console.error('-500- Internal Server Error.');
		res.status(500);
		res.send('-500- Internal Server Error.');
	}

});

app.listen(app.get('port'), function(){

	console.log('Server started on localhost:'+app.get('port')+'. Please press ctrl+c to kill the server.');

});
