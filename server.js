var express = require('express');
var app = express();

// Listening PORT
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers
  // We set the token only if we're using the Prerender.io service
app.use(require('prerender-node').set('prerenderToken', 'w4ww74MqTwznrpvNJXSi').set('prerenderServiceUrl', 'http://localhost:3000'));

//ROUTES
require('./app/routes')(app);

//listening port to start
app.listen(port);

console.log('CGC is up and running on port ' + port);

// expose app

exports = module.exports = app;