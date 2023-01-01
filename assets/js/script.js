var startBtnEl = document.querySelector(".start-btn");
var instructEl = document.querySelector(".instruct")
var questionLabelEl = document.querySelector(".question-label")
var questionEl = document.querySelector(".question")
var btnContainerEl = document.querySelector(".btn-container")
var displayEl = document.querySelector(".display")
var timeBankEl = document.querySelector(".time-bank");
var solutionEl = document.querySelector(".btn");

var questions = [
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        correctAnswer: 3,
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: 2,
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: 2,
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: 0,
    },
    {
        question: "How do you create a function in JavaScript",
        answers: ["function = myFunction()", "function myFunction()", "function:myFunction()", "createMyFunction()"],
        correctAnswer: 1,
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["=", "-", "x", "*"],
        correctAnswer: 0,
    },
    {
        question: "How do you call a function named myFunction?",
        answers: ["call myFunction()", "call function myFunction()", "myFunction()", "call myFunction"],
        correctAnswer: 2,
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
        correctAnswer: 2,
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["if i == 5 then", "if i = 5 then", "if(i == 5)", "if i = 5"],
        correctAnswer: 2,
    },
    {
        question: "Questions 5 : To see if two variables are equal in an if / else statement you would use ____.",
        answers: ["=", "==", "'equals'", "!="],
        correctAnswer: 1,
    },
];

var currentQuestion = 0;
/* todos:
- start timer
- remove hidden classes from answers and hide to start screen
- loop through array display questions & answers
- check answers
- update score
- deduct time for incorrect answers
*/
function startGame() {
    
    // countdown();
    stealthMode();
    // showQuestions();
    console.log("Ouch, don't click so hard!");
};

function countdown() {
    var timer = 60;
    var timeInterval = setInterval(function () {
        if (timer == 0) {
            clearInterval(timeInterval);
        } else {
            timer--;
            timeEl.textContent = timer;
            console.log(timer);
        }
    }, 1000);
};

function stealthMode() {
    instructEl.classList.add("hidden");
    startBtnEl.classList.add("hidden");
    questionLabelEl.classList.remove("hidden");
    btnContainerEl.classList.remove("hidden");
    displayEl.classList.remove("hidden");
}

startBtnEl.addEventListener("click", startGame);