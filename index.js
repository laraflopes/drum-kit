
// Detecting Button Press - if a button was pressed, check innerHTML and pass that in the makeSound() function

var buttons = document.querySelectorAll(".drum");

// this. is the button that triggered the event

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        // this becomes the key of the makeSound(key)

        buttonAnimation(buttonInnerHTML);

    });
}


// Detecting Keyboard Press - if a keypress was detected instead send the event.key (key property of the event)

document.addEventListener("keydown", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

})


// if I press the w button it plays the w sound and if I press the key w it also plays the w sound


function makeSound(key) {
    switch (key) { // it checks if the case is = to the switch
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation (currentKey) {

    // I need to concactonate the dot. otherwise it's just a character and not a class which is what we need
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}