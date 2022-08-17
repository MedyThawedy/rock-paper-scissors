let varRoundNr = 0;
let varSelectedRoundsNumber;
let varCurrentRound;
let varChoicePlayer;
let varChoiceComp;
let playerScore = 0;
let compScore = 0;
let gameResult = '';


const cSelectedRoundsNumber = document.querySelectorAll('input[name="rbSelectedRoundsNumber"]');
console.log(cSelectedRoundsNumber);

//https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
function fnSetSelectedRoundsNumber() {

    for (const cSelectedRoundNumber of cSelectedRoundsNumber) {
        if (cSelectedRoundNumber.checked) {
            varSelectedRoundsNumber = cSelectedRoundNumber.value;
            console.log(varSelectedRoundsNumber);
        }
    }

}

/* Uncaught TypeError: cSelectedRoundsNumber.addEventListener is not a function at main.js:22:23 */
// cSelectedRoundsNumber.addEventListener('click', fnSetSelectedRoundsNumber());

//This function will handle the choice of the player and compare it with the choice of the computer and do the rest!
function fnCompareChoices(choice) {

    if (varSelectedRoundsNumber > 0) {
        varRoundNr = varRoundNr + 1;

        // Write the round number on the p element
        document.getElementById('idRoundNumber').innerHTML = varRoundNr;

        console.log('varRoundNr : ' + varRoundNr);
        varChoicePlayer = choice;
        console.log(varChoicePlayer);
        // This function will gerate the computer choice
        fnComputerChoice();
        // Here is implementation of the logic of the game

        /* The combinations for 2 players, each with 3 possibilities ("scissors", "rock", "paper") = 9 combinations:
        1. Scissors - scissors | 2. Scissors - rock | 3. Scissors - paper | 4. rock - scissors | 5. rock - rock | 6. rock - paper | 7. paper - scissors | 8. paper - rock | 9. paper - paper */

        // 1 | 5 | 9
        if (varRoundNr < varSelectedRoundsNumber) {
            if (varChoiceComp === varChoicePlayer) {
                console.log('-------------------------------------------------------------------------------');
                console.log('This round is draw because computer selected the same like player!');
                console.log('varChoiceComp = ' + varChoiceComp + ' varChoicePlayer = ' + varChoicePlayer);
                console.log('Please select a choice again! ');
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);

                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML +=
                    '<hr>'
                    + '<p>' + 'This round is draw because computer selected the same like player!' + '</p>'
                    + '<p>' + 'varChoiceComp = ' + varChoiceComp + ' varChoicePlayer = ' + varChoicePlayer + '</p>'
                    + '<p>' + 'Please select a choice again! ' + '</p>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';
            }
            // 2
            else if ((varChoicePlayer === 'Scissors') && (varChoiceComp === 'Rock')) {
                compScore = compScore + 1;
                console.log('Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer);
                console.log(varChoiceComp + ' beats ' + varChoicePlayer);
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);

                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer + '</p>'
                    + '<p>' + varChoiceComp + ' beats ' + varChoicePlayer + '</p>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';

            }    // 4
            else if ((varChoicePlayer === 'Rock') && (varChoiceComp === 'Scissors')) {
                playerScore = playerScore + 1;
                console.log('Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer);
                console.log(varChoicePlayer + ' beats ' + varChoiceComp);
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);

                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer + '</p>'
                    + '<p>' + varChoicePlayer + ' beats ' + '</p>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';

            } // 3
            else if ((varChoicePlayer === 'Scissors') && (varChoiceComp === 'Paper')) {
                playerScore = playerScore + 1;
                console.log('Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer);
                console.log(varChoicePlayer + ' beats ' + varChoiceComp);
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);

                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer + '</p>'
                    + '<p>' + varChoicePlayer + ' beats ' + varChoiceComp + '</p>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';

            }    // 7
            else if ((varChoicePlayer === 'Paper') && (varChoiceComp === 'Scissors')) {
                compScore = compScore + 1;
                console.log('Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer);
                console.log(varChoiceComp + ' beats ' + varChoicePlayer);
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);

                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer + '</p>'
                    + '<p>' + varChoiceComp + ' beats ' + varChoicePlayer + '</p>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';

            } // 6     
            else if ((varChoicePlayer === 'Rock') && (varChoiceComp === 'Paper')) {
                compScore = compScore + 1;
                console.log('Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer);
                console.log(varChoiceComp + ' beats ' + varChoicePlayer);
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);
                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer + '</p>'
                    + '<p>' + varChoiceComp + ' beats ' + varChoicePlayer + '</p>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';
            }    // 8
            else if ((varChoicePlayer === 'Paper') && (varChoiceComp === 'Rock')) {
                playerScore = playerScore + 1;
                console.log('Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer);
                console.log(varChoicePlayer + ' beats ' + varChoiceComp);
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);
                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer chose ' + varChoiceComp + ' | Player chose = ' + varChoicePlayer + '</p>'
                    + '<p>' + varChoicePlayer + ' beats ' + varChoiceComp + '</p>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';
            }
            // Write the scores in the p elements
            document.getElementById('idPlayerScore').innerHTML = playerScore;
            document.getElementById('idCompScore').innerHTML = compScore;

        } else {
            console.log('Game is over!');
            if (compScore > playerScore) {
                console.log('Computer won the game! ' + ' ----------> ' + 'Computer score: ' + compScore + ' Player score :' + playerScore);

                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer won the game! ' + ' ----------> ' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';

            } else if (compScore < playerScore) {
                console.log('Player won the game! ' + ' ----------> ' + ' Player score :' + playerScore + 'Computer score: ' + compScore);
                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Player won the game! ' + ' ----------> ' + ' Player score :' + playerScore + 'Computer score: ' + compScore + '</p>';
            } else {
                console.log('Game is a draw');
                console.log('Computer score: ' + compScore + ' Player score :' + playerScore);
                // Write the result in the p element 
                document.getElementById('idPOutput').innerHTML += '<hr>'
                    + '<p>' + 'Computer score: ' + compScore + ' Player score :' + playerScore + '</p>';
            }


            alert('Game is over! You can start again! ');
            fnResetTheGame();
        }

    } else {
        alert('Select rounds number to start the game! ');
    }

}

function fnResetTheGame() {
    varRoundNr = 0;
    compScore = 0;
    playerScore = 0;
    varSelectedRoundsNumber = 0;
    varChoiceComp = '';
    varChoicePlayer = '';
    document.getElementById('r5').checked = false;
    document.getElementById('r10').checked = false;
    document.getElementById('r15').checked = false;
    document.getElementById('r20').checked = false;
    document.getElementById('idPlayerScore').innerHTML = '';
    document.getElementById('idCompScore').innerHTML = '';
    document.getElementById('idRoundNumber').innerHTML = '';
    document.getElementById('idPOutput').innerHTML = '';
    console.clear();
}

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_0_9
function fnComputerChoice() {
    let arrChoices = ['Rock', 'Paper', 'Scissors'];
    varChoiceComp = arrChoices[Math.floor(Math.random() * 3)];
    console.log('Computer chose = ' + varChoiceComp);
    return varChoiceComp;
}


