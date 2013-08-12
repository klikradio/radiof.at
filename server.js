var DEBUG_PORT = 8000;

var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.send("Welcome to radiof.at! <form action='/' method='post' enctype='multipart/form-data'><input type='file' name='song' /><input type='submit' /></form>");
});

app.post('/', function(req, res) {
	res.send(req.files);
	console.log('file uploaded');
	console.log(req.files);
});

app.listen(process.env.PORT || DEBUG_PORT);
