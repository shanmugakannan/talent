var express = require("express"),
  fs = require('fs'),
  app = express();

// routes ==================================================
require('./routes/file.routes')(app); // configure our routes

//static files location  ==========================================
app.use(express.static('./'));

var server = app.listen(8080, function() {
  console.log("Listening on port %s...", server.address().port);
});
