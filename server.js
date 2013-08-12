var DEBUG_PORT = 8000;

var express = require('express');
var sys = require('sys');
var exec = require('child_process').exec;
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.send("Welcome to radiof.at! <form action='/' method='post' enctype='multipart/form-data'><input type='file' name='song' /><input type='submit' /></form>");
});

app.post('/', function(req, res) {
	res.send(req.files);

	var tempFileName = req.files.song.path;
	var realFileName = req.files.song.name;

	exec('avconv -i "' + tempFileName + '" "' + tempFileName + '.wav"', function(err, stdout, stderr) {
		console.log("We're done!!!");
		console.log(tempFileName);
	});
});

app.listen(process.env.PORT || DEBUG_PORT);
