var fs = require('fs');

fs.open('./context.txt', 'r+', function (err, fd) {
	if (err) {
		console.error(err);
	} else {
		console.log(fd);
	}
});

console.log('Be confident. Simon you are the best!');
