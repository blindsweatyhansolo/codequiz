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


// base variables
var score = 0;
var questionIndex = 0;

// title, hide on start, change to "time's up" === 0
var title = document.querySelector("#quizTitle");

// div for quiz body
var quizInfo = document.querySelector("#quizInfo");
// p element that becomes quiz question
var quizText = document.querySelector("#quizText");

// timer variables
// start button to start timer
var startTimer = document.querySelector("#startTimeBtn");
var currentTime = document.querySelector("#currentTime");
var timeLeft = 80;
var timePenalty = 10;
var holdInterval = 0;

// question section variables
// div container for questions
var questionDiv = document.querySelector("#questionDiv");
var quiz = document.querySelector("#quiz");
// special msg variable, use this to display corrent or incorrect over answer text?
var specialMsg = document.querySelector("#specialMsg");



// function click start button will start time, hide title, button and quizinfo text
startTimer.addEventListener("click", function(){
    title.hidden = true;
    startTimer.hidden = true;
    // quizInfo.hidden = true;
    
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            timeLeft--;
            currentTime.textContent = "Timer: " + timeLeft;

            if (timeLeft === 0) {
                clearInterval(holdInterval);
                currentTime.textContent = "Time's Up!";
                endQuiz();
            }
        }, 1000);
    }
    quizStart(questionIndex);
});


// // // renders questions and choices to page
var quizStart = function(questionIndex) {
    
    questionDiv.innerHTML = "";
    quizText.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var question = questions[i].title;
        // console.log(question);
        var choices = questions[i].choices;
        // console.log(choices);
        quizText.textContent = question;
    }

    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "btn");
    choiceBtn.textContent = choices;

    choices.forEach(function (newItem){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "btn");
        choiceBtn.textContent = newItem;
        questionDiv.appendChild(choiceBtn);
        choiceBtn.addEventListener("click", (compareSelection));
    })
};

// function to compare selection to correct answer
 var compareSelection = function(event) {
     var element = event.target;

     if (element.matches("button")) {
        var answerStatusContainer = document.createElement("div");
        answerStatusContainer.setAttribute("class", "answerStatus")

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            answerStatusContainer.setAttribute("style", "color: green;");
            answerStatusContainer.textContent = "Correct!";
        } else {
           timeLeft = timeLeft - timePenalty;
           answerStatusContainer.setAttribute("style", "color: red;");
           answerStatusContainer.textContent = "Incorrect!"; 
        }

        answerStatusContainer.innerHTML = "";
     }

     questionIndex++;

     if (questionIndex >= questions.length) {
         endQuiz();
     } else {
         quizStart(questionIndex);
     }

     questionDiv.appendChild(answerStatusContainer);
 }


 // function to end quiz, switch to highscore board
 var endQuiz = function() {
     location.replace("./highscores.html");
 };


