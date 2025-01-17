// DOM Elements.
const word = document.getElementById("word");
const text = document.getElementById("text");
const toast = document.getElementById("toast");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const gameElement = document.getElementById("game-container");
const endGameElement = document.getElementById("end-game-container");
const highScoreEntry = document.getElementById("high-score-board-entry");
const settingsButton = document.getElementById("settings-button");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const highScoreBoard = document.getElementById("high-score-board");
const difficultySelect = document.getElementById("difficulty");

// Initialize the word.
let randomWord;

// Initialize the score.
let score = 0;

// Initialize the time.
let time = 15;

// Sets the difficulty to value in local storage or to the default value (medium).
let difficulty =
    localStorage.getItem("difficulty") !== null
        ? localStorage.getItem("difficulty")
        : "medium";

// Sets the difficulty select value to its default value or to whatever is saved in localStorage.
difficultySelect.value = difficulty;

// On game start, calling focus method to focus on text.
text.focus();

// Function to start the timer to count down.
const timeInterval = setInterval(updateTime, 1000);

// Function to get random word from API.
const getRandomWord = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    return data[0].toLowerCase();
};

getRandomWord();

// Function to update the timer and display it on the DOM.
function updateTime() {
    time--;
    timeElement.innerHTML = time + "s";

    // When the time is 5 seconds or less, it is displayed in a different color.
    if (time < 6) {
        timeElement.style.color = "#35caed";
    }

    // Disables the difficulty selection once the game has started.
    if (time < 15) {
        document.getElementById("difficulty").disabled;
    }

    // Disables the difficulty selection once the game is over.
    if (time === 0) {
        document.getElementById("difficulty").disabled;
        clearInterval(timeInterval);

        // Function to end game.
        gameOver();
    }
}

// Function to display random word onto DOM.
addWordToDOM = async () => {
    randomWord = await getRandomWord();
    word.innerHTML = randomWord;
};

// Function to update the score and display it on DOM.
updateScore = () => {
    score++;
    scoreElement.innerHTML = score;
};

addWordToDOM();

// Event listener when typing the word.
text.addEventListener("input", (event) => {
    const insertedText = event.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // Clears the input field.
        event.target.value = "";

        // Appends additional seconds to time (dependent on difficulty level) and updates the time.
        if (difficulty === "hard") {
            time += 2;
        } else if (difficulty === "normal") {
            time += 3;
        } else if (difficulty === "easy") {
            time += 5;
        }

        updateTime();
    }
});

// Event listener when clicking the settings icon.
settingsButton.addEventListener("click", () =>
    settings.classList.toggle("hide")
);

// Event listener when selecting the settings difficulty.
settingsForm.addEventListener("change", (event) => {
    difficulty = event.target.value;

    localStorage.setItem("difficulty", difficulty);
});

const highScoreKey = "highScores";
const maxHighScores = 5;

// Retrieve high scores from localStorage.
function getHighScores() {
    const storedScores = localStorage.getItem(highScoreKey);
    return storedScores ? JSON.parse(storedScores) : [];
}

// Save high scores to localStorage.
function saveHighScores(newScore, playerName) {
    const highScores = getHighScores();

    // Add the new score and sort.
    highScores.push({score: newScore, name: playerName});
    highScores.sort((a, b) => b.score - a.score);

    // Keep only the top `maxHighScores` scores.
    if (highScores.length > maxHighScores) {
        highScores.length = maxHighScores;
    }

    localStorage.setItem(highScoreKey, JSON.stringify(highScores));
}

// Displays high scores in the board.
function showHighScores() {
    const highScores = getHighScores();

    // Generate the HTML for the high score board.
    highScoreBoard.innerHTML = `
        <h1>High Scores</h1>
        <ul id="high-score-list">
            ${highScores.map((score) => `<li>${score.name}: ${score.score}</li>`).join("")}
        </ul>
        <button class="button close-score-button">Close</button>
    `;

    // Show the high-score board.
    highScoreBoard.style.display = "flex";

    // Add event listener for the "Close" button.
    document.querySelector(".close-score-button").addEventListener("click", () => {
        // Hide the high-score board
        highScoreBoard.style.display = "none";

        // Show the end-game container
        endGameElement.style.display = "flex";
    });
}

// Function to show a toast message.
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

gameOver = () => {
    // Update the end game container with a message and options.
    endGameElement.innerHTML = `
        <h1>Game Over</h1>
        <p>Think you can beat your high score? Give it another shot!</p>
        <div class="button-container">
            <a class="restart-link"><button onClick="window.location.reload()" class="button">Play Again</button></a>
            <a class="quit-link" href="index.html"><button class="button">Quit</button></a>
        </div>
    `;

    // Hide the game container.
    gameElement.style.display = "none";

    // Add high-score entry form after hiding the end game container.
    highScoreEntry.innerHTML = `
        <h1>Sorry! Time has run out.</h1>
        <p>Your final score is ${score}.</p>
        <p>Enter your name to save your score:</p>
        <input type="text" id="player-name" placeholder="Enter First Name" class="input-field" />
        <button id="save-score-button" class="button">Save Score</button>
    `;
    highScoreEntry.style.display = "flex";

    // Hide the end-game container.
    endGameElement.style.display = "none";

    // Add event listener to handle saving the score.
    document.getElementById("save-score-button").addEventListener("click", () => {
        const playerName = document.getElementById("player-name").value.trim();
        if (playerName) {
            saveHighScores(score, playerName);

            // Hide the name entry container and show the high score board.
            highScoreEntry.style.display = "none";
            showHighScores();
        } else {
            // Show a toast notification if the input is invalid.
            showToast("Please enter a valid name!");
        }
    });
};