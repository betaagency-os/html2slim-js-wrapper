var spawn = require('child_process').spawn;

module.exports = function(htmlstring, cb){
  var h2h = spawn('html2haml');
  var h2s = spawn('haml2slim');
  var r ='';

  h2h.stdin.write(htmlstring);
  h2h.stdin.end();
  h2h.stdout.pipe(h2s.stdin);

  h2s.stdout.on('data', function (data) {
    r = r+data;
  });

  h2s.on('exit', function(code){
    cb(null, r);
  });
};

