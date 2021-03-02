// DOM Elements.
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endGameElement = document.getElementById("end-game-container");
const settingsButton = document.getElementById("settings-button");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// Array of words for game.
const words = [
  "fastness",
  "swiftness",
  "upper",
  "accelerate",
  "hasten",
  "hie",
  "hotfoot",
  "race",
  "rush",
  "hurrying",
  "speeding",
  "hurry",
  "zip",
  "quicken",
  "velocity",
  "ready",
  "speedy",
  "immediate",
  "prompt",
  "straightaway",
  "agile",
  "nimble",
  "spry",
  "promptly",
  "quickly",
  "fast",
  "flying",
];

// Initialize the word.
let randomWord;

// Initialize the score.
let score = 0;

// Initialize the time.
let time = 10;

// On game start, calling focus method to focus on text.
text.focus();

// Function to start the timer to count down.
const timeInterval = setInterval(updateTime, 1000);

// Function to generate a random word from the words array.
getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

// Function to update the timer and display it on the DOM.
function updateTime() {
  time--;
  timeElement.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);

    // Function to end game.
    gameOver();
  }
}

// Function to end game and display the end screen on DOM.
gameOver = () => {
  endGameElement.innerHTML = `
<h1>Sorry! Time has run out.</h1>
<p class="final-score-message">Your final score is ${score}.</p>
<button onClick="window.location.reload()" class="button play-again-button">Play Again</button>
`;

  endGameElement.style.display = "flex";
};

// Function to display random word onto DOM.
addWordToDOM = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};

// Function to update the score and display it on DOM.
updateScore = () => {
  score++;
  scoreElement.innerHTML = score;
};

addWordToDOM();

// Adds event listener to the input field, so that the user-inputted word or phrase is targeted. If the displayed word and the input phrase are the same, then a new word is displayed on the DOM and the input field is cleared.
text.addEventListener("input", (event) => {
  const insertedText = event.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clears the input field.
    event.target.value = "";
  }
});
