let scoreA = 0;
let scoreB = 0;
let seconds = 0;
let interval = null;

// Funcție pentru actualizare scor random
function updateScore() {
  const scorer = Math.random() < 0.5 ? 'A' : 'B';
  if (scorer === 'A') {
    scoreA++;
    document.getElementById('scoreA').textContent = scoreA;
  } else {
    scoreB++;
    document.getElementById('scoreB').textContent = scoreB;
  }
}

// Funcție cronometru live
function startTimer() {
  interval = setInterval(() => {
    seconds++;
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    document.getElementById('timer').textContent = `Timp: ${pad(min)}:${pad(sec)}`;
  }, 1000);
}

function pad(num) {
  return num < 10 ? '0' + num : num;
}

// Reset meci
function resetMatch() {
  clearInterval(interval);
  scoreA = 0;
  scoreB = 0;
  seconds = 0;
  document.getElementById('scoreA').textContent = '0';
  document.getElementById('scoreB').textContent = '0';
  document.getElementById('timer').textContent = 'Timp: 00:00';
  startTimer();
}

// Pornește automat la încărcare
window.onload = startTimer;

