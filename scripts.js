// List of quiz questions
const quizQuestions = [{
    question: "Which year was golf's last appearance at the Olympic Games before returning to the line-up of sports in 2016?",
    answers: ["1904", "1920", "1936", "1960"],
    correctAnswer: 0
},
{
    question: "Who was top of the golf world rankings prior to lockdown?",
    answers: ["Tiger Woods", "Brooks Koepka", "Rory McIlroy", "Dustin Johnson"],
    correctAnswer: 3
},
{
    question: "How many times has Tiger Woods won The Masters?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: 2
},
{
    question: "Which year did Brooks Koepka win his first major?",
    answers: ["2014", "2015", "2016", "2017"],
    correctAnswer: 1
},
{
    question: "Who won The Match: Tiger Woods v Phil Mickelson in 2018?",
    answers: ["Tiger Woods", "Phil Mickelson", "Tie", "Rain Delay"],
    correctAnswer: 0
},
{
    question: "Name the only non-American player to win a major in 2019?",
    answers: ["Rory McIlroy", "Francesco Molinari", "Justin Rose", "Shane Lowry"],
    correctAnswer: 3
},
{
    question: "In dollars, what is the total prize money purse available in The Players Championship – the most lucrative event on the tour?",
    answers: ["$7 million", "$10 million", "$15 million", "$20 million"],
    correctAnswer: 2
},
{
    question: "Which major has Rory McIlroy not won?",
    answers: ["The Masters", "U.S. Open", "The Open Championship", "PGA Championship"],
    correctAnswer: 0
},
{
    question: "Who became the first European player to score what is now the maximum of five points in a single Ryder Cup in 2018?",
    answers: ["Ian Poulter", "Rory McIlroy", "Sergio Garcia", "Henrik Stenson"],
    correctAnswer: 0
},
{
    question: "Which golfer recorded the most points for the USA in the 2019 Ryder Cup?",
    answers: ["Tiger Woods", "Dustin Johnson", "Brooks Koepka", "Patrick Reed"],
    correctAnswer: 2
}
];

let currentQuestionIndex = 0;
let score = {
    correct: 0,
    incorrect: 0
};

// Loads questions and answers
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");

    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    answersElement.innerHTML = ""; // Clears the previous answers

    // Creates the answer buttons
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answerButton = document.createElement("button");
        answerButton.className = "answer-btn";
        answerButton.textContent = currentQuestion.answers[i];
        answerButton.addEventListener("click", evaluateAnswer); // Assigns an event listener to evaluateAnswer
        answersElement.appendChild(answerButton);
    }
}

// Evaluates selected answer
function evaluateAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answers[currentQuestion.correctAnswer]) {
        score.correct++;
        document.getElementById("correct-score").textContent = score.correct;
    } else {
        score.incorrect++;
        document.getElementById("incorrect-score").textContent = score.incorrect;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        // Show final score at end of quiz
        document.getElementById("question-container").style.display = "none";
        showScore();
    }
}

// Displays final score
function showScore() {
    const totalQuestions = quizQuestions.length;
    const finalScore = document.getElementById("score-container");
    finalScore.innerHTML = `

      <p>Congratulations! You got ${score.correct}/${totalQuestions} questions correct!</p>
    `;
}

// Starts quiz
loadQuestion();