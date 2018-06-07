//ensures the document is ready before running the game.
//$(document).ready(function(){
//variables for the game
var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 30;
var transitionTimer = 5;

// countdown function
function countdown(){
    timer(decrement, 1000);
};

function resetClock(){
    timer = 30;
    timer(decrement, 0);
};

if (timer == 0) {
    alert("You are out of time!")
    nextQuestion();
    function resetClock();
};

$("#start-button").on("click", function(){
    $("#start-button").html("");
    $("#timer").html(timer);
    countdown();
});
//});