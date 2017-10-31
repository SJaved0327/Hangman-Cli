
var Letter = function(actualLetter){

	this.currentDisplay = "_"
	this.actualLetter = actualLetter;
	this.guessCorrect = false;

};

Letter.prototype.letterInWord = function(guessLetter){
	if(this.actualLetter == guessLetter){
			this.currentDisplay = this.actualLetter; 
			this.guessCorrect = true;
		}else{
			this.guessCorrect = false;
		};
};

module.exports = Letter;

