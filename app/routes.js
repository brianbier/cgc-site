var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

module.exports = function(app){

    // Sendmail route
  app.post('/sendmail', function(req, res){
      var options = {
          auth: {
              api_key: process.env.EMAIL_TOKEN
          }
      }
      var mailer = nodemailer.createTransport(sgTransport(options));
      mailer.sendMail(req.body, function(error, info){
          if(error){
              res.status('401').json({err: info});
          }else{
              res.status('200').json({success: true});
          }
      });
  });

  //Front end routes only for angular js
  app.get("*",function(req,res){
    res.sendfile('./public/index.html');
  });
};