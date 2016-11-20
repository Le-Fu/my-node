function Pet(words){
    this.words = words;
    this.speak = function(){
        console.log(this.words);
    }
}

function Dog(words) {
    Pet.call(this, words);
    //or apply
}

var dog  = new Dog('wang');
dog.speak();