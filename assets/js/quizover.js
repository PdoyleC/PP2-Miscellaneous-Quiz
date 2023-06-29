const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const RecentScore = localStorage.getItem("RecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = RecentScore;

//if there is no input of user name, buttom is disabled
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: RecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("highscores.html");
};


function runGame() {
    letsGo.classList.add('hide');
    shuffledQuestions = questions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    questionCont.classList.remove('hide');
    getNextQuestion();


}

function endGame() {
    document.getElementById('questions-area').innerHTML = `
            <strong><em>Quiz Of Everything!</em></strong>
            <br>
            Click restart to retry
            `;
    //* setTimeout(myFunction, 3000);
    setTimeout(() => {
        checkAnswer();
    }, 3000);
    return window.location.assign("index.html");



}