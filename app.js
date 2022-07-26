// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const cupOneButton = document.getElementById('cupOne-button');
const cupTwoButton = document.getElementById('cupTwo-button');
const cupThreeButton = document.getElementById('cupThree-button');
const resetButton = document.getElementById('reset-button')

const cupOneImage = document.getElementById('cupOne-image');
const cupTwoImage = document.getElementById('cupTwo-image');
const cupThreeImage = document.getElementById('cupThree-image');







const correctGuesses = document.getElementById('correct-guesses');
const incorrectGuesses = document.getElementById('incorrect-guesses');
const totalGames = document.getElementById('total-games');


const hidingPlaces = ['cupOne', 'cupTwo', 'cupThree'];

let correctTally = 0;
let incorrectTally = 0;
let gameTally = 0;

 function getRandomIndex(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

cupOneButton.addEventListener('click', () => {
  handleGuess('cupOne', getRandomIndex(hidingPlaces));
  
});

cupTwoButton.addEventListener('click', () => {
  handleGuess('cupTwo', getRandomIndex(hidingPlaces));
});

cupThreeButton.addEventListener('click', () => {
  handleGuess('cupThree', getRandomIndex(hidingPlaces));
});

resetButton.addEventListener('click', () => {
  resetImages();
  resetScore();
})

function handleGuess(userGuess, correctSpot) {
  resetImages();
  
  if (userGuess === correctSpot) {
    correctTally++;
    correctGuesses.textContent = correctTally;
  } else if (userGuess !== correctSpot) {
    incorrectTally++;
    incorrectGuesses.textContent = incorrectTally;
  }
  console.log(correctSpot);
  let correctCupImg = document.getElementById(`${correctSpot}-image`)
  correctCupImg.src = './assets/ghosty.png';

  gameTally++;
  totalGames.textContent = gameTally;

  


}

function resetImages() {
  cupOneImage.src = './assets/upside-down-solo.jpg';
  cupTwoImage.src = './assets/upside-down-solo.jpg';
  cupThreeImage.src = './assets/upside-down-solo.jpg';
}

function resetScore() {
  gameTally = 0;
  correctTally = 0;
  incorrectTally = 0;
  totalGames.textContent = gameTally;
  correctGuesses.textContent = correctTally;
  incorrectGuesses.textContent = incorrectTally;

}