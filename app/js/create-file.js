var fs = require('fs');
var fileExists = require('./check-file');
var dbdir = './db';

module.exports = function(filename, fileContents){
  // check if file already exists
  if( fileExists(filename) ) throw "FileAlreadyExists";

  // create file
  fs.writeFileSync( dbdir + '/' + filename , JSON.stringify(fileContents));

  return true;
};
