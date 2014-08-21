var fs = require('fs');
var checkfile = require('./check-file');
var dbdir = './db';

module.exports = function(filename, data){
  // check if file already exists
  if( checkfile(filename) ) return {"msg":"file already exists"};

  // create file
  var newfile = fs.createWriteStream( dbdir+'/'+filename, { encoding: 'utf8' });

  // write data to file
  newfile.write(data);
  newfile.end();
};
