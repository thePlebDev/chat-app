


var handleError = function(err,res){
  res.writeHead(404);
  res.end();
}

module.exports = handleError;

// the res.writeHead(404) sends a response header, turns this response header into a 404, which will gives a 404 page
