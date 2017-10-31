var Letter = require("./letters.js");
var Word = require("./words.js");

//==============================//

//at the top of the game, a random word is pulled and stored as chosenWord
//chosenWord is passed through Word constructor and stored as object within NewGame
var Game = function(){
	//all words that could be chosen
	this.wordList = ["hello", "goodbye", "whenevs"];
	//randomWord is grabbed from all words
	this.randomWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
	//randomWord is passed into Word constructor
	//chosenWord is stored as Word object
	this.chosenWord = new Word(this.randomWord);
	//guesses available in NewGame starts as 9
};

//==============================//

module.exports = Game;