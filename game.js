const quizData = [
    {
        question: "I'm the hardest of stones, in a crown I'm well known, worn by a ruler with grace on the throne.",
        options: ["Sapphire", "Diamond", "Ruby"],
        correctAnswer: "Diamond"
    },
    {
        question: "I'm a force of great power, unseen by the eye, I keep planets in place, in the vast, endless sky.",
        options: ["Air", "Energy", "Gravity"],
        correctAnswer: "Gravity"
    },
    {
        question: "I'm a creature so ancient, a relic of yore, with scales and sharp teeth, in legends I roar.",
        options: ["Dinosaur", "Dragon", "Unicorn"],
        correctAnswer: "Dinosaur"
    }
];

let currentQuestion = 0;
let userScore = 0;
let gameHistory = [];

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuizData = quizData[currentQuestion];

    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.correctAnswer) {
        userScore++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    resultElement.textContent = `Your score: ${userScore} out of ${quizData.length}`;
    scoreElement.textContent = "";
    gameHistory.push({ score: userScore, date: new Date().toLocaleDateString() });
    saveGameHistory();
}

function saveGameHistory() {
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
}

function loadGameHistory() {
    const storedHistory = localStorage.getItem('gameHistory');
    if (storedHistory) {
        gameHistory = JSON.parse(storedHistory);
    }
}

function startNewGame() {
    currentQuestion = 0;
    userScore = 0;
    displayQuestion();
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    resultElement.textContent = "";
    scoreElement.textContent = "";
}

function checkAnswer() {
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    if (currentQuestion === 0) {
        loadGameHistory();
    }

    if (currentQuestion === 0 && gameHistory.length > 0) {
        scoreElement.textContent = `Your previous score: ${gameHistory[gameHistory.length - 1].score} (${gameHistory[gameHistory.length - 1].date})
           Coupon Code: 09DH4H`;
    }

    if (currentQuestion === 0 && gameHistory.length === 0) {
        scoreElement.textContent = "No previous games recorded.";
    }

    if (currentQuestion < quizData.length) {
        resultElement.textContent = "Please complete the quiz before checking the answer.";
    } else {
        resultElement.textContent = `Your final score: ${userScore} out of ${quizData.length} Coupon Code: 09DH4H`;
    }
}
