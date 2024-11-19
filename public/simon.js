buttonColours = ["red", "blue", "green", "yellow"];
gamePattern =[];
var userClickedPattern = [];
var level = 0;
var started =false;


$(document).click(function(event) {
  if (!started) {
    $("h1").text("level " + level);
    nextSequence();
    console.log("First key press detected!");
    started = true;
  }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern); 
    checkAnswer(userClickedPattern.length-1);
  });

  function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function (){
            nextSequence();
          }, 1000);
        }
  
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      };
  };

function nextSequence(){
    userClickedPattern = [];
    level++;
    randomNumber =  Math.floor(Math.random()*5);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    $("h1").text("level " + level);
};

function playSound(name){
    var audio = new Audio("../assets/images/"+ name + ".mp3");
    audio.play();
};

function  animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);

};

function  startOver() {
  level = 0;
  gamePattern = [];
  setTimeout(function() {
    started = false;
  }, 100);
  
};






