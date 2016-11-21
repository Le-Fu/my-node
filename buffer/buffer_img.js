var fs = require('fs');

fs.readFile('./pig.jpg', function(err, origin_buffer){
    console.log(Buffer.isBuffer(origin_buffer));

    fs.writeFile('pig_buffer.jpg', origin_buffer, function(err){
        if(err){
            console.log(err);
        }
    });

    var base64Img = origin_buffer.toString('base64');
    console.log(base64Img);
    var decodedImage = new Buffer(base64Img, 'base64');
    console.log(Buffer.compare(origin_buffer, decodedImage));
    fs.writeFile('pig_decoded.jpg', decodedImage, function(err){
        if(err){
            console.log(err);
        }
    })
}); 
