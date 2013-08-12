var DEBUG_PORT = 8000;

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("Welcome to radiof.at! <form action='/' method='post'><input type='file' /><input type='submit' /></form>");
});

app.post('/', function(req, res) {
	res.send(req.files);
});

app.listen(process.env.PORT || DEBUG_PORT);