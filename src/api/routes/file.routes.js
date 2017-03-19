var path = require('path');
var https = require('https'); 
module.exports = function(app){

//Add headers
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Serve Index.html
  app.get('/',function(req,res){
    var filepath = path.join(__dirname, '../', 'data.json');
    res.sendFile(filepath);
  });

}
