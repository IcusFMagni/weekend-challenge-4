var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var gallery = require('./routes/gallery');


var port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('server/public'));

app.use('/gallery', gallery);


app.listen(port, function(){
    console.log('server is listening on port', port);
});