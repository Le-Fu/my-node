var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	name: 'Simon', 
	email: 'simon@qq.com',
	address: 'Harverd University'
});

var option = {
	host: 'www.opcity.cn',
	path: '/application/node/post.php',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form=urlencoded',
		'Content-Length': contents.length,
	} 
};

var req = http.request(option, function (res) {
	res.setEncoding('utf8');
	res.on('data', function (data) {
		console.log(data);
	});
});

req.write(contents);
req.end();