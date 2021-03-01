// DOM Elements.
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endGameElement = document.getElementById("end-game");
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

// Function to generate a random word from the words array.
getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

// Function to add word to the DOM.
addWordToDOM = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
};

addWordToDOM();
