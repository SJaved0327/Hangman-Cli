var Word = require("./words.js");
var Letter = require("./letters.js");

//==============================//

var NewGame = function(){

	this.wordList = ["hello", "goodbye", "whenevs"];
	this.randomWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
	this.chosenWord = new Word(this.randomWord);
	this.guesses = 9;
	
};

//==============================//

module.exports = NewGame;