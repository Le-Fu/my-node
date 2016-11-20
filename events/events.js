var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
life.setMaxListeners(15);

//addEventListener
function water(who) {
    console.log('给 ' + who + ' 1');
}
life.on('求安慰', water);

life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 2');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 2');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 4');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 5');
});
life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 6');
}); 

life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 7');
});

life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 8');
});

life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 9');
});

life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 10');
});

life.on('求安慰', function(who) {
    console.log('给 ' + who + ' 11');
});

life.on('求溺爱', function(who) {
    console.log('给 ' + who + ' 交工资');
});

life.on('求溺爱', function(who) {
    console.log('给 ' + who + ' 买衣服');
});

life.removeListener('求安慰', water);
life.removeAllListeners('求安慰');

var hasA = life.emit('求安慰', 'Simon');
var hasB = life.emit('求溺爱', 'Lisa');
var hasC = life.emit('求忘怀', 'Lucus');

// console.log(hasA);
// console.log(hasB);
// console.log(hasC);
console.log(life.listeners('求安慰').length);
console.log(life.listeners('求溺爱').length);