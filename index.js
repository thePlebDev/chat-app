var http = require('http'); // will use this to create the server object
var fs = require('fs');
var extract = require('./extract');
var handleError = require('./errorHandling')


var server = http.createServer(function(req,res){//this creates an Http server object.
  // the callback function gets called everytime the server gets a request. req= request, res = res
  console.log('responding to a request');
  var filePath = extract(req.url) // returns an url string

  fs.readFile(filePath, function (err,data){
    if(err){
      handleError(err,res);
      return;
    }else{
      res.end(data)
    }
  })
});

server.listen(3000);
// telling the server to listen on port 3000(this is called binding the port)
// the listen function makes the server listen on the specified ports
