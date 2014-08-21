var createfile = require('../app/js/create-file');
var readfile = require('../app/js/read-file');

module.exports = function(app) {
  var baseUrl = '/api/v_0_0_1/filedb';

  app.get(baseUrl, function(req, res){
    res.json({"msg":"index"});
  });

  // get a file
  app.get(baseUrl + '/:filename', function(req, res) {
    var data = readfile(req.params.filename);
    res.status(200).json(data);
  });

  // create a file
  app.post(baseUrl + '/:filename', function(req, res) {
    createfile(process.params.filename);
    var data = readfile(req.params.filename);
    res.status(200).json(data);
  });

  // 404
  app.get('*', function(req,res){
    return res.status(404).json({'msg': '404'});
  });
};
