var Letter = require("./letters.js");

//==============================//

//word selected during the new game passes into constructor
//individual word is stored as object
//Word
var Word = function(actualWord){
	//value of the word is stored as actualWord
	this.actualWord = actualWord;
	//empty array will hold all the individual letters
	this.wordArray = [];
	//empty array will hold what's printed to console
	this.displayArray = [];
	//call function to populate array
	this.RenderLetters();
};

//splits word into individual letters and push each to array
//individual letters passed into Letter constructor
//RenderLetters
Word.prototype.RenderLetters = function(){
	for(var i = 0; i < this.actualWord.length; i++){
		//passes each letter in actualWord through Letter constructor
		var pushLetter = new Letter(this.actualWord[i]);
		//pushes each Letter object into array
		this.wordArray.push(pushLetter);
		this.displayArray.push(pushLetter.currentDisplay);
	};
};

Word.prototype.CheckLetters = function(userGuess){

	var letterInWord = false;

	for(var i = 0; i < this.wordArray.length; i++){
		var currentLetter = this.wordArray[i];
		if (currentLetter === userGuess){
			currentLetter.guessCorrect = true;
			currentLetter.currentDisplay = currentLetter.actualLetter;
			letterInWord = true;
		};
	};

	if (letterInWord) {

		console.log(this.displayArray);
  	}
  	else{

    guesses--;

  	};
};














module.exports = Word;





