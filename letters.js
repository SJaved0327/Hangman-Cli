

function Letters (actualLetter) {

	this.currentDisplay = "_"
	this.actualLetter = actualLetter;
	this.guessCorrect = false;

Letters.prototype.letterInWord = function(guessLetter){
	if(this.actualLetter == guessLetter){
			this.currentDisplay = this.actualLetter; 
			this.guessCorrect = true;
		}else{
			this.guessCorrect = false;
		};
};








module.exports = Letters;

function checkLetters(letter) {

  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word.
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }
    // Logging for testing.
    console.log(blanksAndSuccesses);
  }
  // If the letter doesn't exist at all...
  else {
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
    wrongGuesses.push(letter);
    numGuesses--;
  }
}
