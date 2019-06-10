const definEntry = document.querySelector("#definition");
const quizWrapper = document.querySelector(".inputWrapper");
const quizArea = document.querySelector("#quiz-area")
const pointsEarned = document.querySelector("#points");
const startQuiz = document.querySelector("#start");
const skipEntry = document.querySelector("#skip");
const pageReset = document.querySelector("#reset");
const countDown = document.querySelector(".countdown");

var wordsDuplicate = words.slice(0);
var answerEntry;
var points = 0;

var myInterval;
var min = 1;
var sec = 0;
var hun = 0;



// Get random definitions and display them
function getDefinition() {
    if (wordsDuplicate.length == 0) {
        definEntry.innerHTML = "That's all of them. Well done!";
        quizArea.disabled = true;
        stopTheClock();
    } else {
        let randomNumber = Math.floor(Math.random() * wordsDuplicate.length);
        definEntry.innerHTML = wordsDuplicate[randomNumber].definition;
        answerEntry = wordsDuplicate[randomNumber].vocab;
        wordsDuplicate.splice(randomNumber, 1);
    }
}

// See if the input matches the word, wrapper->green
function match() {
    if (quizArea.value.toLowerCase() == answerEntry.toLowerCase()) {
        points++;
        pointsEarned.innerHTML = points;
        quizArea.value = '';
        quizArea.style.borderColor = "#BDC667";
        setTimeout(function () { quizArea.style.borderColor = "rgba(162, 0, 32, 0.424)"; }, 500);
        getDefinition();
    }
}

// Skip the entry
function skipCurrentWord() {
    quizArea.value = '';
    getDefinition();
}

// Number correction
function numberCorrect(number){
    if(number < 10){
        number = "0" + number;
    }
    return number;
}

// Countdown
function countdown() {
    if (hun == 0) {
        if (sec == 0) {
            if (min == 0) {
                clearInterval(myInterval);
                quizArea.disabled = true;
                definEntry.innerHTML = "Time's up! You got " + points + " right!";
            } else {
                min--;
                sec = 59;
                hun = 99;
            }
        } else {
            sec--;
            hun = 99;
        }
    } else {
        hun--;
    }
    countDown.innerHTML = numberCorrect(min) + ":" + numberCorrect(sec) + ":" + numberCorrect(hun);
}

// Start the game
function startTheGame() {
    resetPage();
    quizArea.disabled = false;
    getDefinition();
    startTheClock();
    startQuiz.disabled = true;
}

// Start the clock
function startTheClock() {
    if (hun == 0 && sec == 0 && min == 1) {
        myInterval = setInterval(countdown, 10);
    }
}

// Stop the clock
function stopTheClock(){
    clearInterval(myInterval);
}

// Reset the page
function resetPage() {
    stopTheClock();
    min = 1;
    sec = 0;
    hun = 0;
    countDown.innerHTML = numberCorrect(min) + ":" + numberCorrect(sec) + ":" + numberCorrect(hun);
    startQuiz.disabled = false;
    wordsDuplicate = words.slice(0);
    quizArea.value = '';
    definEntry.innerHTML = "Click the start button to begin.";
    points = 0;
    pointsEarned.innerHTML = points;
}



// Add event listeners
quizArea.addEventListener("keyup", match);
startQuiz.addEventListener("click", startTheGame);
skipEntry.addEventListener("click", skipCurrentWord);
pageReset.addEventListener("click", resetPage, false);


// document.addEventListener("DOMContentLoaded", getDefinition);