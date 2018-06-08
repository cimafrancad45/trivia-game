//ensures the document is ready before running the game.

//variables for the game
var correct = 0;
var wrong = 0;
var unanswered = 0;
var timer = 30;
var transitionTimer = 5;
//interval set
var intervalID;
//variables to show if games and timer is active
var gameActive = false;
var timerActive = false;
//Array of questions
var questions = [
    "Why is Final Fantasy titled the way it is?",
    "Which one of these is NOT a Street Fighter special move?",
    "Which of these Overwatch characters need healing?",
    "How many Dragon Balls are there in Akira Toryima's series, Dragon Ball?",
    "Which one of these shows isn't considered an anime by most anime fans?",
    "Power Rangers was a re-production of which one of these Japanese series?"
]
//Answer variables to be printed as forms in the HTML
var answerOne = [
    "Because it was going to be Squaresoft's final game.", 
    "Because it sounded trendy.", 
    "Because the developers liked fantasy and it will be the first and last fantasy game they would make.", 
    "Because they wanted a title with impact."
];

var answerTwo = [
    "Sonic Boom",
    "Hadoken",
    "Power Wave",
    "Rekka-ken"
];

var answerThree = [
    "Junkrat",
    "Winston",
    "Mercy",
    "Genji"
];

var answerFour = [
    "Six",
    "Seven",
    "Eight",
    "Nine"
];

var answerFive = [
    "Cowboy Bebop",
    "Avatar: The Last Airbender",
    "FLCL",
    "Naruto"
];

var answerSix = [
    "Super Sentai",
    "Kikaider",
    "Choujinki Metalder",
    "Kamen Rider"
];

// countdown function
function countdown(){
    timer --;
    timer = setInterval(decrement, 1000);
}

function resetClock(){
    timer = 30;
    timer = setInterval(decrement, 0);
}

if (timer == 0) {
    alert("You are out of time!")
    nextQuestion();
    resetClock();
};

$("#start-button").click(function(){
    if (gameActive == false) {
        gameActive == true;
        $("#start-button").html("Go for it!");
        $("#timer").html("Time: "+ timer);
        countdown();
        questionOne();
        console.log("This button is working!")
    }
    else{
        console.log("kek")
    } 
});
