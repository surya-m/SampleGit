(function() {
    try {
        var express = require('express');
      var fs= require('fs');

      var data = fs.createReadStream('/Users/surya/Documents/courseworksheet.doc', {
  flags: 'r',
  encoding: null,
  fd: null,
  mode: 0o666,
  autoClose: true
})


       var app = express();

       app.get('/', function (req, res) {
        fs.createWriteStream('/Users/surya/Documents/test.doc', {
  flags: 'w',
  defaultEncoding: 'utf8',
  fd: null,
  mode: 0o666,
  autoClose: true
});
  res.send("Hello world!");
});

       app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
} catch (e) {
        console.error("Exception in Server.js:", e);
        console.error("Exception stack:", e.stack);
    }



})();