(function() {
    try {
         var http = require('http');

        console.log('Before');

        var server = http.createServer(function(req, res) { 
            console.log('after');
        // Creates http server. 

            console.log("Request Reached server::");
            console.log("Res :"); 


           // dosomething(req,res);
            res.writeHead(500, {
                'Access-Control-Allow-Origin': '*'
            });

              var buf = new Buffer('hello world', 'ascii');
console.log(buf.toString('hex'));
  // prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));

            res.end('I am returing some response..!');
        });

            server.listen(9999, function(err, info) {  // here, we are listening to server
                if (err)
                    console.warn("Error in server");
                console.log("server listening at 9919...!");

            });




    } catch (e) {
        console.error("Exception in Server.js:", e);
        console.error("Exception stack:", e.stack);
    }
})();