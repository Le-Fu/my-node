var pet = {
    words: '..',
    speak: function (say){
        console.log(say + ' ' + this.words);
    }
}

// pet.speak('haah');

var dog = {
    words: 'wang'
};

pet.speak.call(dog, 'daodog'); 