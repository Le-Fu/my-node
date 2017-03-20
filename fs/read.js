var fs = require('fs');

fs.readFile('./context.txt', 'utf-8', function (err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});

console.log('Be confident. Simon you are the best!');
