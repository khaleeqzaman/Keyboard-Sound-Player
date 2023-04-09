const keys = document.querySelectorAll('.key');
const message = document.getElementById('message');

// Define the allowed keys
const allowedKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function playSound(event) {
  const audio = document.getElementById(event.target.id + '-sound');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  event.target.classList.add('highlight');
}

function removeHighlight(event) {
  event.target.classList.remove('highlight');
}

keys.forEach(key => {
  key.addEventListener('mousedown', playSound);
  key.addEventListener('mouseup', removeHighlight);
});

document.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toLowerCase();
  const audio = document.getElementById(pressedKey + '-sound');
  if (!audio) {
    // Check if the pressed key is not included in the allowed keys
    if (!allowedKeys.includes(pressedKey)) {
      const wrongKeyAudio = new Audio('assets/mp3/wrongkey.mp3');
      wrongKeyAudio.play();
    }
    return;
  }
  audio.currentTime = 0;
  audio.play();
  const key = document.getElementById(pressedKey);
  key.classList.add('highlight');
});

document.addEventListener('keyup', (event) => {
  const key = document.getElementById(event.key.toLowerCase());
  if (!key) return;
  key.classList.remove('highlight');
});

// Code for touch screen devices
keys.forEach(key => {
  key.addEventListener('touchstart', playSound);
  key.addEventListener('touchend', removeHighlight);
});