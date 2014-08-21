require('../../server');
var fs = require('fs');
var chai = require('chai');
var crypto = require('crypto');
var moment = require('moment');
var chaihttp = require('chai-http');

chai.use(chaihttp);
var expect = chai.expect;

describe('Create File', function() {

  var hash =  crypto.createHash('sha1')
                .update( moment().format() )
                .digest('hex');

  it('creates a file and returns contents', function(done) {
    chai.request('http://localhost:3000')
      .post('/api/v_0_0_1/filedb/'+ hash + '.json')
      .req(function(req){
        req.send({"data":"here is some data"});
      })
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body.data).to.eql('here is some data');
        done();
    });
  });

});
