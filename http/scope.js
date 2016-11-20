var globalVarible = 'This is a globalVarible';

function globalFunction(){
    var localVarible = 'This is a localVarible';

    function localFunction(){

    }

    localFunction();

}

globalFunction();

