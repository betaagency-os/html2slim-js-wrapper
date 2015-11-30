var assert = require('assert');
var h2s = require('../index.js');

describe('Normal usage', function() {
  it('should compile template', function (done) {
    h2s('<h1>hello world</h1>', function(err, txt){
      assert.equal(txt, 'h1 hello world\n');
      done();
    });
  });
  it('should compile empty string', function (done) {
    h2s('', function(err, txt){
      assert.equal(txt, '\n');
      done();
    });
  });
  it('should compile div install a', function (done) {
    h2s('<div><a><div>hello world</div></a></div>', function(err, txt){
      assert.equal(txt, 'div\n  a\n    div hello world\n');
      done();
    });
  });
});
