var assert = require('assert');
var h2s = require('../index.js');

describe('Normal usage', function() {
  it('should compile template', function (done) {
    h2s('<h1>hello world</h1>', function(err, txt){
      assert.equal(txt, 'h1\n  | hello world\n');
      done();
    });
  });
  it('should compile empty string', function (done) {
    h2s('', function(err, txt){
      assert.equal(txt, '');
      done();
    });
  });
});
