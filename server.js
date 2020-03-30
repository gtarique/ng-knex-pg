var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.envPORT || 8000;
var todoCtrl = require('./todoCtrl');
var app = express();

app.use(express.static(__dirname+'/public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Routes
app.get('/todos', todoCtrl.getAll)
app.get('/todos/:id', todoCtrl.getOne)
app.post('/todos', todoCtrl.addOne)
app.put('/todos', todoCtrl.changeOne)
app.delete('/todos', todoCtrl.deleteOne)

app.listen(port, function(){
    console.log('listening on: ', port)
})