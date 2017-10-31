
//==============================//

//individual letter from selected word passes into constructor
//individual letter is stored as object
//Letter
var Letter = function(actualLetter){
	//letter prints to display as a blank(underscore)
	this.currentDisplay = "_";
	//value of the letter is stored as actualLetter
	this.actualLetter = actualLetter;
	//value of letter being guessed correctly starts as false
	//value will switch to true when user guesses correctly
	this.guessCorrect = false;
};

//function to check if the letter guessed is in the word
Letter.prototype.letterInWord = function(guessLetter){
	//if the value of the letter is equal to the value of letter being guessed
	if(this.actualLetter == guessLetter){
			//value of the letter prints to the display
			this.currentDisplay = this.actualLetter; 
			//value of letter being guessed correctly switches to true
			this.guessCorrect = true;
		}else{
			//if they do not equal to each other, 
			//value of letter being guessed correctly stays as false
			this.guessCorrect = false;
		};
};

module.exports = Letter;

