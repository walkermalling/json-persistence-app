require('../../server');
var fs = require('fs');
var chai = require('chai');
var crypto = require('crypto');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('Read File', function() {

  it('it returns error is file does not exist', function(done) {
    var hash =  crypto
                  .createHash('sha1')
                  .update('skljdhfaljdflasjdf')
                  .digest('hex');
    chai.request('http://localhost:3000')
      .get('/api/v_0_0_1/filedb/'+ hash)
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('msg');
        expect(res.body.msg).to.eql('file does not exist');
        done();
    });
  });

  it('returns true if file exists', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/v_0_0_1/filedb/test.json')
      .res(function(res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('msg');
        expect(res.body.msg).to.eql('this is a test file');
        done();
    });
  });

});
