var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEve', function (arg1, arg2) {
	console.log('listener1', arg1, arg2);
});

emitter.on('someEve', function (arg1, arg2) {
	console.log('listener2', arg1, arg2);
});


emitter.emit('someEve', 'Simon', '666');