function clickIt(e){
    window.alert('Button');
}

var btn = document.getElementById('button');

btn.addEventListener('click', clickIt);

//EventEmitter

//TODO:事件队列
//事件循环