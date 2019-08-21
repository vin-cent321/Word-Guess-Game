var wordChoices = ["Zelda","Link"];

var wins = 0;
var losses = 0;

// Pick a random word
var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var wordText = document.getElementById("word-text");

// Set up the answer array
var answerArray = [];

for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
    wordText.textContent(answerArray);
}

var remainingLetters = wordChoices.length;

//Begin Game Loop

document.onkeyup = function (event) {

    var userGuess = event.key;

    if ((userGuess === randomWord.length)) 
        {wins++;
    }

directionsText.textContent = "";

}
