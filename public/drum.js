var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   animation(buttonInnerHTML);
   
  });};
  document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animation(event.key);
  });


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("../assets/images/tom-1.mp3");
            tom1.play();
            var tom2 = new Audio("../assets/images/tom-2.mp3");
            tom2.play();
            var tom3 = new Audio("../assets/images/tom-3.mp3");
            tom3.play();
            var tom4 = new Audio("../assets/images/tom-4.mp3");
            tom4.play();
            var snare = new Audio("../assets/images/snare.mp3");
            snare.play();
            var crash = new Audio("../assets/images/crash.mp3");
            crash.play();
            break;
    
        case "a":
            var tom2 = new Audio("../assets/images/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio("../assets/images/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("../assets/images/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare = new Audio("../assets/images/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash = new Audio("../assets/images/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kick = new Audio("../assets/images/kick-bass.mp3");
            kick.play();
            break;
    
        default:
    
            
      };
};

function animation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

};
