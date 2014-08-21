var fs = require('fs');
var fileExists = require('./check-file');
var dbdir = './db';

module.exports = function(filename){

  // check if file already exists
  if( !fileExists(filename) ) {
    return {"msg":"file does not exist"};
  }

  // read file
  var filepath = dbdir + '/' + filename;
  var data = JSON.parse(fs.readFileSync( filepath, {encoding:'utf8'}));

  // return
  return data;

};
