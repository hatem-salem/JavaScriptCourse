//Number Guessing Game
const MIN_NUMBER = 50;
const MAX_NUMBER = 100;
const answer = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a Number between ${MIN_NUMBER}-${MAX_NUMBER}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter a valid number.");
  } else if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO Low! Try Again!");
    } else if (guess > answer) {
      window.alert("Too High! Try Again");
    } else {
      window.alert(`Correct! the answer was ${answer}. It took you ${attempts} attempts`);
      running = false;
    }
  }

}