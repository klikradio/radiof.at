var DEBUG_PORT = 8000;

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("Welcome to radiof.at!");
});

app.listen(process.env.PORT || DEBUG_PORT);