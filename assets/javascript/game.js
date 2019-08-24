window.onload = function () {

    // List of randomly generated words
    var wordChoices =
        [
            "zelda",
            "link",
            "ganondorf",
            "navi",
            "ocarina",
            "hyrule",
            "heart",
            "sheik"
        ];

    var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    //variable for wins, losses
    var wins = 0;
    var remainingGuesses = 10;


    var zeldaIMG = document.createElement("IMG");
    zeldaIMG.src = "assets/images/" + word + ".gif";
    


    // Create variables that hold references to the places in the HTML where we want to display things.
    var wordText = document.getElementById("currentWord");
    var guessesText = document.getElementById("remainingGuesses");
    var winsText = document.getElementById("totalWins");
    var guessedText = document.getElementById("lettersGuessed");

    //Begin Game Loop
    startGame();
    function startGame() {
        

        var answerArray = [];

        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_ ";
            wordText.textContent += answerArray[i];
        }

        document.onkeyup = function (event) {
            userGuess = event.key;
            wordText.innerHTML = "";

            // while (remainingLetters > 0) {
            console.log(word);
            for (var j = 0; j < word.length; j++) {

                if (word[j] == userGuess) {
                    answerArray[j] = userGuess;
                }

                wordText.innerHTML += answerArray[j];
            }

            if (word[j] != userGuess) {

                if (remainingGuesses == 0) {
                    reset();
                }

                else {
                    remainingGuesses--;
                    guessedText.innerHTML += event.key + ", ";
                    console.log(guessedText);
                }

            }

            if (wordText.innerHTML === word) {
                wins++;
                document.getElementById('images').appendChild(zeldaIMG);
                reset();
            }

            winsText.innerHTML = wins;
            guessesText.innerHTML = remainingGuesses;
            console.log(remainingGuesses);
        }
    }

    function reset() {
        word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        answerArray = [];
        wordText.innerHTML = "";
        remainingGuesses = 10;
        guessedText.innerHTML = [];
        startGame();
    }


}



// var img = document.createElement("IMG");
// img.src = "images/";
// document.getElementbyId('imageDiv'akaimgid).appendChild(img);
// image('zelda.gif');