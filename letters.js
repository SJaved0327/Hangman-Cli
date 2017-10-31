
function Letters (actualLetter) {

	this.currentDisplay = "_"
	this.actualLetter = actualLetter;
	this.guessCorrect = false;

};

Letters.prototype.letterInWord = function(guessLetter){
	if(this.actualLetter == guessLetter){
			this.currentDisplay = this.actualLetter; 
			this.guessCorrect = true;
		}else{
			this.guessCorrect = false;
		};
};

module.exports = Letters;

