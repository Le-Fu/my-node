var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pen')
}

https
    .createServer(options, function(req, res) {
        res.writeHead(/*'ContentType', 'text/plain'*/200);
        res.end('Hello Imooc');
    })
    .listen(3000);