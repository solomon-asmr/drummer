var numDrums=document.querySelectorAll(".drum").length;
for (var i = 0; i < numDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var Htmltxt=this.innerHTML;
        makeSound(Htmltxt)
        
    });
    
}
addEventListener("keypress", function(event){
    makeSound(event.key);
});


function makeSound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snaree = new Audio('./sounds/snare.mp3');
            snaree.play();
            break;
        case 'k':
            var kickb = new Audio('./sounds/kick-bass.mp3');
            kickb.play();
            break;
        case 'l':
            var crashh = new Audio('./sounds/crash.mp3');
            crashh.play();
            break;
    
        default:console.log(key)
    }

}
