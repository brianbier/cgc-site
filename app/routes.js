module.exports = function(app){
  //Front end routes only for angular js
  app.get("*",function(req,res){
    res.sendfile('./public/index.html');
  });
};