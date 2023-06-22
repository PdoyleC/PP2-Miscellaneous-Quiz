document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('questions-area').innerText = 'Welcome to the Quiz Of Everything, please click Start to continue';
});

//variables
const letsGo = document.getElementById('start-btn');
const nextBut = document.getElementById('next-btn');
const questionCont = document.getElementById('questions-cont');
const questionArea = document.getElementById('questions-area');
const answersArea = document.getElementById('answer-choice');
const restartBut = document.getElementById('restart-btn');
const quizsection = document.getElementById('quiz-section');
let shuffledQuestions; //hold the questions that are random
let currentQuestionIndex; //index for the current question
let currentCorrectScore = 0;
let currentIncorrectScore = 0;


//event listeners
letsGo.addEventListener('click', runGame);



nextBut.addEventListener('click', () => {
    currentQuestionIndex++;
    getNextQuestion();
});

restartBut.onclick = function () {
    restartBut.classList.add('hide');
    questionCont.classList.add('hide');
    letsGo.classList.remove('hide');
    currentCorrectScore = 0;
    currentIncorrectScore = 0;
    document.getElementById('correct').innerText = currentCorrectScore;
    document.getElementById('incorrect').innerText = currentIncorrectScore;
    runGame();
};

//Quiz game

/**
 * hides the start button, shuffles the questions and adds 10
 * moves onto the first question
 */
function runGame() {
    letsGo.classList.add('hide');
    shuffledQuestions = questions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    questionCont.classList.remove('hide');
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
    setStatusClass(document.body, correct);
    Array.from(answersArea.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBut.classList.remove('hide');
    } else {
        endGame();
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

function incrementCorrectScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function endGame() {
    document.getElementById('questions-area').innerHTML = `
            <strong><em>Quiz Of Everything!</em></strong>
            <br>
            Click restart to retry
            `;
    restartBut.classList.remove('hide');
}