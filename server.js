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
	if (req.files.song.type == 'audio/mp3') {
		// Convert an MP3
		exec('./PROCESSMP3 ' + req.files.song.path, function(err, stdout, stderr) {
			console.log("We're done!!!");
			console.log(stdout);
			res.sendfile(req.files.song.path + ".mp3");
		});
	}
});

app.listen(process.env.PORT || DEBUG_PORT);
