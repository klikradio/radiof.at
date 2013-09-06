var config = require('./config.json');

var express = require('express');
var sys = require('sys');
var exec = require('child_process').exec;
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.send("Welcome to radiof.at! <form action='/' method='post' enctype='multipart/form-data'><input type='file' name='song' /><input type='submit' /></form>");
});

app.post('/', function(req, res) {
	if (req.files.song.type == 'audio/mp3') {
		// Convert an MP3
		res.send("OK, we're converting!");
		exec('./PROCESSMP3 ' + req.files.song.path, { cwd: __dirname + '/bin/', timeout: 0, maxBuffer: 10485760 }, function(err, stdout, stderr) {
			console.log("Send e-mail to this person!");
		});
	}
	else if (req.files.song.type == 'audio/m4a' || req.files.song.type == 'audio/x-m4a') {
		// TODO
		res.send("OK, we're converting!");
		exec('./PROCESSM4A ' + req.files.song.path, { cwd: __dirname + '/bin/', timeout: 0, maxBuffer: 10485760 }, function(err, stdout, stderr) {
			console.log("Send e-mail");
			console.log(err);
			console.log(stdout);
			console.log(stderr);
		});
	}
	else {
		res.send(req.files.song);
	}
});

app.listen(config.port || process.env.PORT || 8000);
