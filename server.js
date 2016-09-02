var express = require('express');
var app = express();

app.use(
    "/", //the URL throught which you want to access to you static content
    express.static("/home/ DebugVsCode") //where your static content is located in your filesystem
);

app.listen(3001, function () {
  console.log('Express server listening on port 3001!');
});
