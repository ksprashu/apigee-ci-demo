'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('https://apis-bank-dev.apigee.net'); // supertest init;

chai.should();

describe('/branches', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
	  this.timeout(0);
      api.get('/apis/v1/locations/branches')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });
  });
});
