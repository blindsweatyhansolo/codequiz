// question array, questions as objects
var questions = [
    {
        title: "Which is the correct way to reference an external stylesheet?",
        choices: ["<style src='style.css'>",
        "<stylesheet>styles.css</stylesheet>",
        "<link rel='stylesheet' href='styles.css'>",
        "<link rel='styles' href='styles.css'>"],
        answer: "<link rel='stylesheet' href='styles.css'>"
    },

    {
        title: "Which of the following is NOT a CSS display property type?",
        choices: ["inline", "block", "inline-flex", "flex"],
        answer: "inline-flex"
    },

    {
        title: "Which of the following is NOT a primitve value in JavaScript?",
        choices: ["Boolean", "Number", "Text", "BigInt"],
        answer: "Text"
    },

    {
        title: "Which comparison operator means 'Not Equal Value or Equal Type'?",
        choices: ["==", "!=", "<=", "!=="],
        answer: "!=="
    },

    {
        title: "Which is NOT a valid loop in JavaScript?",
        choices: ["for/while", "while", "for", "do/while"],
        answer: "for/while"
    },

    {
        title: "Where is the correct placement for a link to an external JavaScript sheet?",
        choices: ["In the <head> section",
        "After the <body> section",
        "At the end of the <body> section",
        "None of the above"],
        answer: "At the end of the <body> section"
    },
];

// create variables

// timer variables
// start button to start timer
var startTimer = document.querySelector("#startTimeBtn");
var timeLeft = 10;
var holdInterval = 0;


// div container for questions
var questionDiv = document.querySelector("#questionDiv");

// integer displaying time (secs)
var currentTime = document.querySelector("#currentTime");

// special msg variable, use this to display corrent or incorrect over answer text?
var specialMsg = document.querySelector("#specialMsg");

// title, hide on start, change to "time's up" === 0
var title = document.querySelector("#quizTitle");


// function click start button will start time, hide title
startTimer.addEventListener("click", function(){
    title.hidden = true;
    startTimer.hidden = true;
    
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            timeLeft--;
            currentTime.textContent = "Timer: " + timeLeft;

            if (timeLeft === 0) {
                clearInterval(holdInterval);
                currentTime.textContent = "Time's Up!";
                // run endgame function
            }
        }, 1000);
    }
});

// renders questions and choices to page
// var questionFunc = function() {

//     // clear existing data

//     var questionText = document.querySelector("#quizInfo");
//     questionText.innerHTML = 

// }