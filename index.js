var spawn = require('child_process').spawn;

module.exports = function(htmlstring, cb){
  var h2s = spawn('html2slim');
  var r ='';

  h2s.stdin.write(htmlstring);
  h2s.stdin.end();

  h2s.stdout.on('data', function (data) {
    r = r+data;
  });

  h2s.on('exit', function(code){
    cb(null, r);
  });
};

