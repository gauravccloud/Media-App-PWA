var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

var app = express();
var cors = require('cors')

app.set('views', path.join(__dirname, ''));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

app.get('/', function(req, res) {
    res.render('index.html', {title: 'test'});
});


app.post('/getHomePageData/:key', function(req,res) {
    var keyData = req.params.key;
    console.log("Key Data", keyData);
    var obj, resData;

    if(keyData == "1") {
          fs.readFile('./data1.json', 'utf8', function (err, data) {
              obj = JSON.parse(data);
              console.log("length ",obj, obj[0]["assets"]);
              res.send({"data": obj[0]["assets"]});
          })
    }
    if(keyData == "2") {
          fs.readFile('./data2.json', 'utf8', function (err, data) {
              obj = JSON.parse(data);
              console.log("length ",obj, obj["assets"]);
              res.send({"data": obj[0]["assets"]});
          })
    }
    if(keyData == "3") {
          fs.readFile('./data3.json', 'utf8', function (err, data) {
              obj = JSON.parse(data);
              console.log("length ",obj, obj["assets"]);
              res.send({"data": obj[0]["assets"]});
          })
    }

    if(keyData == "4") {
          fs.readFile('./data3.json', 'utf8', function (err, data) {
              obj = JSON.parse(data);
              console.log("length ",obj, obj["assets"]);
              res.send({"data": obj[0]["assets"]});
          })
    }

    if(keyData == "5") {
          fs.readFile('./data3.json', 'utf8', function (err, data) {
              obj = JSON.parse(data);
              console.log("length ",obj, obj["assets"]);
              res.send({"data": obj[0]["assets"]});
          })
    }
})

var port = "9001"
app.listen(port, function(){
    console.log("Server running at "+ port);
});
