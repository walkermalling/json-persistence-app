(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fs = require('fs');
var dbdir = './db';

module.exports = function(filename){
  fs.readdir(dbdir, function(err,files){
    if(err) throw err;
    // if(files.indexOf(filename) > 0 ) return true;
    // return false;
    return files;
  });
};

},{"fs":4}],2:[function(require,module,exports){
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

},{"./check-file":1,"fs":4}],3:[function(require,module,exports){
var fs = require('fs');
var checkfile = require('./check-file');
var dbdir = './db';

module.exports = function(filename, data){
  // check if file already exists
  if( !checkfile(filename) ) return {"msg":"file does not exist"};

  // read file
  return fs.createReadStream(dbdir+'/'+filename, {autoClose:true});
};

},{"./check-file":1,"fs":4}],4:[function(require,module,exports){

},{}]},{},[1,2,3]);