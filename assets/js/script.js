document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('questions-area').innerText = 'Welcome to the Quiz Of Everything';
    document.getElementById('questions-area1').innerText = 'Congratulations You have completed the Quiz';
    document.getElementById('questions-area2').innerText = 'Congratulations you have completed the Quiz Click restart to retry';
});



//variables
const letsGo = document.getElementById('start-btn');
const nextBut = document.getElementById('next-btn');
const restartBut = document.getElementById('restart-btn');
const timershow = document.getElementById('timer-btn');
const scoresshow = document.getElementById('scores-btn');
const scoresinshow = document.getElementById('scoresin-btn');
const finalscoresinshow = document.getElementById('finalscoresin-btn');
const clicksshow = document.getElementById('clicks-btn');
const quizRules = document.getElementById('quiz-rules');
const rulesDiv = document.getElementById('rules-guide');
const infoFront = document.getElementById('info');
const questionCont = document.getElementById('questions-cont');
const questionArea = document.getElementById('questions-area');
const answersArea = document.getElementsByClassName('answer-choice')[0];
const closeBtn = document.getElementById('close-btn');
let submit = document.getElementById('submit');
let myLabel = document.getElementById('myLabel');
let myName = document.getElementById('myName');
const form = document.getElementById('form');
let finishText = document.getElementById('finish-text-score');
let ruleText = document.getElementById('rule-text-score');
let shuffledQuestions; //hold the questions that are random
let currentQuestionIndex; //index for the current question
let score = 0;
var sec = 18000; //this gives time to start the quiz
var clicks = 0;




//event listeners
quizRules.addEventListener('click', function () {
    quizRules.classList.add('hide');
    infoFront.classList.add('hide');
    form.classList.add('hide');
    rulesDiv.classList.remove('hide');
    closeBtn.addEventListener('click', reset);
    console.log(quizRules);
});

//timer code was added by me to set a time for each question

var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec;
    sec--;
    if (sec < -1) { // minus 1 added by me and is used for the seconds to get to zero
        clearInterval(time);
        alert("You are out of Time, The Quiz is over!! :(");
        timeoutendGame();
    }
}

// reset code was added by me to show and hide btns and text

function reset() {
    quizRules.classList.remove('hide');
    finishText.classList.add('hide');
    rulesDiv.classList.add('hide');
    form.classList.remove('hide');
    submit.classList.remove('hide');
    myLabel.classList.remove('hide');
    infoFront.classList.remove('hide');
}

submit.addEventListener('click', function () { //code was added by me to check for user name
    myName = document.getElementById('myName').value;
    if (myName) {

        letsGo.classList.remove('hide');
        ruleText.classList.add('hide'); // code added to remove OOPS message when submit is entered.

    } else {
        ruleText.classList.remove('hide');
        document.getElementById('rule-text-score').innerHTML = `OOPS, you didn't enter your name. Please enter your name and then press submit.`; // code added by me to ask for username
    }

});

letsGo.addEventListener('click', runGame);

nextBut.addEventListener('click', () => {
    sec = 20; //code was added by me so there is 20 sec per question, currently at 2000 for testing
    currentQuestionIndex++;
    getNextQuestion();
    clicks += 1;    //code was added by me to increment number of question completed
    document.getElementById("clicks").innerHTML = clicks; //code was added by me to increment number of question completed

});



//Quiz game

/**
 * hides the start button, shuffles the questions and adds 10
 * moves onto the first question
 */
function runGame() {
    sec = 20; //code was added by me so there is 20 sec per question, currently at 200 for testing
    letsGo.classList.add('hide'); console.log("start btn gone");
    quizRules.classList.add('hide'); //code was added by me to hide rules and text
    finishText.classList.add('hide'); //code was added by me to hide rules and text
    rulesDiv.classList.add('hide'); //code was added by me to hide rules and text
    form.classList.add('hide'); //code was added by me to hide rules and text
    submit.classList.add('hide'); //code was added by me to hide rules and text
    myLabel.classList.add('hide'); //code was added by me to hide rules and text
    infoFront.classList.add('hide'); //code was added by me to hide rules and text
    console.log("infoFront area here");
    // // answersArea.classLiadd('hide');
    console.log("answers area here"); // log console added to test code
    timershow.classList.remove('hide'); console.log("my timer function triggered"); //code was added by me to show timer . log console added to test code
    scoresshow.classList.remove('hide'); console.log("my score function triggered"); //code was added by me to show score. log console added to test code
    scoresinshow.classList.remove('hide'); console.log("my incorrect score function triggered"); //code was added by me to show score. log console added to test code
    clicksshow.classList.remove('hide'); //code was added by me to show progress
    shuffledQuestions = questions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    clicks += 1;    //code was added by me to increment number of question completed
    document.getElementById("clicks").innerHTML = clicks; //code was added by me to increment number of question completed
    questionCont.classList.remove('hide');
    score = 0;
    getNextQuestion();
}

/**
 * resets and shuffles questions
 */
function getNextQuestion() {
    defaultState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Gets the questions and answers from the array
 * and displays them
 */
function displayQuestion(question) {
    questionArea.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', checkAnswer);
        answersArea.appendChild(button);
    });
}

/**
 * takes out the old answers so new ones can go in
 */
function defaultState() {
    nextBut.classList.add('hide');
    while (answersArea.firstChild) {
        answersArea.removeChild(answersArea.firstChild);
    }
}

/**checks user answer and increments score if correct
 * increments incorrect score if wrong
 * highlights colours for right and wrong buttons
 */
function checkAnswer(event) {
    const clickedButton = event.target;
    const correct = clickedButton.dataset.correct;
    // and increments score if correct
    if (correct) score++; // code added by me to increment score and display at end of quiz.

    setStatusClass(document.body, correct);
    Array.from(answersArea.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBut.classList.remove('hide');
    } else { // else end the game and show the score after name input
        var sec = 18000; //added so there is time to read the result 
        scoresinshow.classList.add('hide');
        scoresshow.classList.add('hide');
        answersArea.classList.add('hide');
        clicksshow.classList.add('hide');
        timershow.classList.add('hide');
        questionCont.classList.add('hide');
        finishText.classList.remove('hide');
        restartBut.classList.add('hide');
        if (score >= 8) {   // if else code added by me to display at end of quiz.

            document.getElementById('finish-text-score').innerHTML = `Your General knowledge is Fantastic ${myName}. You have scored ${score} out of 10. Thank you for taking the Quiz.`;
        } else if (score >= 6 && score < 8) {

            document.getElementById('finish-text-score').innerHTML = `Great work ${myName}. You have scored ${score} out of 10. Thank you for taking the Quiz.`;
        } else if (score >= 4 && score < 6) {

            document.getElementById('finish-text-score').innerHTML = `Good effort ${myName}. You have scored ${score} out of 10. Thank you for taking the Quiz.`;
        } else {

            document.getElementById('finish-text-score').innerHTML = `They just didn't suit you ${myName}. It's all about trying. You have scored ${score} out of 10. Thank you for taking the Quiz,`;


        }
        // document.getElementById('finish-text-score').innerHTML = `Well done ${myName}.You have scored ${score} out 10. Thank you for taking the Quiz`; // code added by me to and display at end of quiz.
        setTimeout(endGameover, 10000); //comment out to test score page at end of quiz
    }

    if (correct) {
        incrementCorrectScore();
    } else {
        incrementWrongAnswer();
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * Gets the current score from the DOM and increments it by 1
 */

function incrementCorrectScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = oldScore + 1;   //* ++oldscore can also be used here, changed from CI;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = oldScore + 1;
}


function endGame() {
    document.getElementById('questions-area').innerHTML = `
            <strong><em>Congratulations you have completed the Quiz!</em></strong>
            <br>
            Click restart to retry
            `;
    timershow.classList.add('hide');
    answersArea.classList.add('hide');
    scoresinshow.classList.add('hide');
    clicksshow.classList.add('hide');
    finalscoresinshow.classList.add('hide');
    quizRules.classList.add('hide');
    infoFront.classList.add('hide');
    form.classList.add('hide');
    finishText.classList.add('hide');
    setTimeout(endGameover, 5000); //* setTimeout(myFunction, 5 seconds after timer and progress is removed);

}

function timeoutendGame() {  //code was added by me for quiz timing out
    document.getElementById('questions-area').innerHTML = `
            <strong><em>Unfortunately the timer ended the Quiz!</em></strong>
            <br>
            
            `;

    // sec = 5;
    timershow.classList.add('hide'); console.log("timershow 1/9 triggered");
    answersArea.classList.add('hide'); console.log("answersArea 2/9  triggered");
    scoresinshow.classList.add('hide'); console.log("scoresinshow 3/9  triggered");
    clicksshow.classList.add('hide'); console.log("clicksshow 4/9  triggered");
    // finalscoresinshow.classList.add('hide'); console.log("finalscoresinshow 5/9  triggered");
    quizRules.classList.add('hide'); console.log("quizRules 6/9  triggered");
    infoFront.classList.add('hide'); console.log("infoFront 7/9  triggered");
    form.classList.add('hide'); console.log("form 8/9  triggered");
    finishText.classList.add('hide'); console.log("9/9  triggered");
    //return window.location.assign("toquizover.html");
    //* setTimeout(myFunction, 5 seconds);
    setTimeout(restart, 5000); console.log("restart function triggered");
}

function restart() { //code was added by me for completeing the quiz
    return window.location.assign("toquizover.html");
}

function endGameover() { //code was added by me for the quiz timing out
    return window.location.assign("quizover.html");
}

