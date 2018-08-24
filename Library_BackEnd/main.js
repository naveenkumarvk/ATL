var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require('mongoose');
var router = require("./routes/routes");
var clientPath = path.resolve(__dirname, "client");
var logger = require("morgan");
var helmet = require('helmet')
var bodyParser = require('body-parser');
var webpush = require('web-push');
var app = express();
//const webpush = require('web-push');
//var clientPath = path.resolve(__dirname, "client");
var config = require('./config/config')

const vapidKeys = {
  "publicKey": "BKuJVZKcfjDNG4MYMTPFBySCcOnmVB7wMGAuUO9WPZKypY2P2hSvfnRUXH1DMJWA5oKJ7sH1V1nNrQliBQufr00",
  "privateKey": "4WDLoEIWb0xPPWNzTVuYwx0NVwKp8gBIZt91-FfhZ2w"
}


webpush.setVapidDetails(
  'mailto:naveen.vk@mindtree.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);


app.use(helmet())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(logger("dev"));
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS SUCCESS');
    res.end();
  }
  next();
});
var mongodb = config.database.dialect + '://' + config.database.host + '/' + config.database.name
var promise = mongoose.connect(mongodb, { useNewUrlParser: true });

app.use("/", express.static(clientPath));
app.use("/api", router);
app.all('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '/client/index.html'));
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express server listening on port ' + port);