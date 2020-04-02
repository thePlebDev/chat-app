var path = require('path');

var extractFilePath = function (url){
  var filePath;
  var fileName = 'index.html';

  if (url.length > 1) {
    fileName = url.substring(1); // this removes the / from the beggining. gives us what is typed into the url
  }
  console.log('the fileName is: ' + fileName);
  if(fileName !== 'index.html'|| 'text.html'){
    fileName = '404.html'
  }

  filePath = path.resolve(__dirname, 'app',fileName);
  // I am expecting maybe app/test.html to be returned. that is because our file is in the app folder. the dirname is the path to the
  //current file.
  console.log(filePath)
  return filePath;
};

module.exports = extractFilePath;
