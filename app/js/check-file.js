var fs = require('fs');
var dbdir = './db';

module.exports = function(filename){

  var files = fs.readdirSync(dbdir);

  if(files.indexOf(filename) < 0 ) return false;

  return true;

};
