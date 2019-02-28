        //Array of words to be selected
        var words = ["Keith Costa", "Jordyn Zubak", "Bijan Barikbin", "Nikki Zand"];
        // Randombly selected word in string form 
        var guessWord = "";
        // guessword in array form
        var wordarray = []
        // User guess 
        var letterGuess
        // Incorrect guesses
        var guessList = []
        // Remaining guesses
        var guessesLeft = 12;
        // Word array made from "_" and spaces
        var dashArray = [];



        //Randomly select from the array (computer)
        document.onkeyup = function (event) {
            function play() {
                // function generateword(){
                for (var i = 0; i < words.length; i++) {
                    guessWord = words[Math.floor(Math.random() * words.length)];
                }
                console.log(guessWord)
                // convert guessword to array
                wordarray = guessWord.split("")
                console.log(wordarray)

                // convert each letter into an "_" leaving in the spaces. for loop with if else statement
                dashArray = wordarray.map(function (element) {
                    return element === " " ? "&nbsp;&nbsp;&nbsp;" : "_";
                })

                //push dasharray to the html
                document.getElementById("guessword").innerHTML = dashArray;

                // };

                if (event.keyCode > 64 && event.keyCode < 91) {
                    letterguess = event.key;

                    //check letters 

                    let letterFound = false
                    dashArray = dashArray.map(
                        function (element, idx) {
                            const letterMatch = wordarray[idx].toLowerCase() === letterguess;
                            if (letterMatch) {
                                letterFound = true
                                return wordarray[idx]
                            }
                            else {
                                return element
                            }
                        }
                    )
                    if (letterFound === false) {
                        guessesLeft--
                        guessList[event.key] = true
                        if (guessesLeft === 0) {

                            var guessText = document.getElementById("guessesLeft");
                            guessText.textContent = "Guesses Left: " + guessCount;

                            alert("You Lose!")
                            play();
                        }
                    }



                    document.getElementById("guessword").innerHTML = dashArray;
                    document.getElementById("guessedletters").innerHTML = letterGuess;
                    document.getElementById("guessesleft").innerHTML = guessesLeft;
                    document.getElementById("wins").innerHTML = wins;
                    document.getElementById("loss").innerHTML = loss;


                    console.log(wordarray)


                };
            }
            play()
        };
