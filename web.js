#!/usr/bin/env node
var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
    console.log("Request received!");
    response.send(fs.readFileSync("index.html").toString("utf-8"));
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
