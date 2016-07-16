var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var app = express();

// Listening PORT
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers
  // We set the token only if we're using the Prerender.io service
app.use(require('prerender-node').set('prerenderToken', ENV('PRERENDER_TOKEN')));
// .set('prerenderServiceUrl', 'http://localhost:3000'));

//ROUTES
require('./app/routes')(app);

//listening port to start
app.listen(port);

console.log('CGC is up and running on port ' + port);

// expose app

exports = module.exports = app;