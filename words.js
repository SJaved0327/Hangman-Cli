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
	//call function to populate array
	this.RenderLetters();
	//empty array will hold guesses
	this.guesses = [];
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
	};
};

Word.prototype.CompareLetters = function(userGuess){
	for(var i = 0; i < this.wordArray.length; i++){
		var currentLetter = this.wordArray[i];
		if (currentLetter === userGuess){
			currentLetter.guessCorrect = true;
			currentLetter.currentDisplay = currentLetter.actualLetter;
		};
	};
};













module.exports = Word;





