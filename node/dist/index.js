"use strict";
require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path'); // for referencing the file system
// set up static asset directories 
app.use(express.static(path.resolve(__dirname, '..', '..', './angular/dist/angular')));
app.get('/', function (req, res) {
    res.sendFile(express.static(path.resolve(__dirname, '..', '..', './angular/dist/angular/index.html')));
});
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
