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
	//
	this.CheckLetters = function(userGuess){

			this.displayArray = [];

			for(var i = 0; i < this.wordArray.length; i++){
				
				var currentLetter = this.wordArray[i];

				if (currentLetter.actualLetter === userGuess){

					currentLetter.currentDisplay = currentLetter.actualLetter;

					this.displayArray.push(currentLetter.currentDisplay);

				}else{

					this.displayArray.push(currentLetter.currentDisplay);

				};
			};

			console.log(this.displayArray);

		};
	//
	this.CheckWords = function(){
		 	for(var i = 0; i < this.actualWord.length; i++){
		 		if(this.actualWord.charAt(i) != this.displayArray[i]){
		 			return false;
		 		}
	 		}

	 		return true;

		};
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

	console.log(this.displayArray);
};


module.exports = Word;



/*
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

		this.displayArray = [];

		for(var i = 0; i < this.wordArray.length; i++){
			this.displayArray.push(this.wordArray[i].currentDisplay);
		}

		console.log(this.displayArray);
  	}
  	else{

    	guesses--;

    	console.log(this.displayArray);

  	};
};


Word.prototype.CheckWords = function(){
 	for(var i = 0; i < this.actualWord.length; i++){
 		if(this.actualWord.charAt(i) != this.displayArray[i]){
 			return false;
 		}

 		return true;
 	}

};
*/







