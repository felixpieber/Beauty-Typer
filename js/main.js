window.addEventListener('load', init);

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate', 
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'dime',
    'knot',
    'old',
    'hammer',
    'treat',
    'tree',
    'silver',
    'ring',
    'found',
    'harmonious',
    'gorgeous',
    'train',
    'inconclusive',
    'exchange',
    'ambiguous'
    'accumulation',
    'likely',
    'value',
    'explain',
    'arch',
    'relinquish',
    'incredible',
    'home',
    'courtesy',
    'preach',
    'convert',
    'bomb',
    'plant',
    'institution',
    'effort',
    'composer',
    'glue',
    'rough',
    'nominate',
    'stem',
    'brother',
    'sister',
    'divorce',
    'favorable',
    'github',
    'coding',
    'paradox',
    'commitment',
    'repetition',
    'employee',
    'debate',
    'analyst',
    'beauty',
    'typer',
    'maximum',
    'hardship',
    'potential',
    'virus',
    'appendix',
    'disestablishment'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  // Highscore based on score value for Session Storage
  if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
    sessionStorage['highscore'] = score;
  } else {
    sessionStorage['highscore'] = sessionStorage['highscore'];
  }

  // Prevent display of High Score: -1
  if (sessionStorage['highscore'] >= 0) {
  highscoreDisplay.innerHTML = sessionStorage['highscore'];
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = '';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'GAME OVER';
    score = -1;
  }
}

// Background change buttons
function background1() {
   document.getElementById("background-change").style.backgroundImage = "url(https://wallpaperaccess.com/full/2471303.gif)";
}

function background2() {
   document.getElementById("background-change").style.backgroundImage = "url(https://wallpaperaccess.com/full/2825787.gif)";
}

function background3() {
   document.getElementById("background-change").style.backgroundImage = "url(https://wallpaperaccess.com/full/2825711.gif)";
}

function background4() {
   document.getElementById("background-change").style.backgroundImage = "url(https://wallpaperaccess.com/full/2825724.gif)";
}

function background5() {
   document.getElementById("background-change").style.backgroundImage = "url(https://wallpaperaccess.com/full/2825801.gif)";
}