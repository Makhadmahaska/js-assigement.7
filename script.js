
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");


const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];


let randomWord;
let score = 0;
let time = 10; 


function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord; 
}


function updateScore() {
  score++;
  scoreEl.textContent = `Score: ${score}`; 
}


function updateTime() {
  const timerInterval = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerInterval); 
      gameOver(); 
    } else {
      time--; 
      timeEl.textContent = `Time: ${time}`; 
    }
  }, 1000);
}


function gameOver() {
  endgameEl.style.display = 'block'; 
  document.getElementById('final-score').textContent = score; 
}


text.addEventListener('input', () => {
  if (text.value === randomWord) {
    updateScore(); 
    addWordToDOM(); 
    time += 5; 
    text.value = ''; 
  }
});

settingsBtn.addEventListener('click', () => {
  settingsForm.style.display = 'none'; 
});


difficultySelect.addEventListener('change', (e) => {
  const difficulty = e.target.value;

  if (difficulty === 'easy') {
    time = 30; 
  } else if (difficulty === 'medium') {
    time = 20; 
  } else if (difficulty === 'hard') {
    time = 10; 
  }

  timeEl.textContent = `Time: ${time}`; 
});


addWordToDOM();
updateTime(); 
