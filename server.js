var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.envPORT || 8000;
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.listen(port, function(){
    console.log('listening on: ', port)
})