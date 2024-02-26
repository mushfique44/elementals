
//Declaring variables to equal elements from the HTML
const playerSelectDisplay = document.querySelector('.player_element');
const compSelectDisplay = document.querySelector('.comp_element');
const roundNo = document.querySelector('.round');
const winNo = document.querySelector('.wins');
const lossNo = document.querySelector('.loss');
const endGameWinner = document.querySelector('.disp_winner');
const helpDisplay = document.querySelector('.help_screen');
const helpBtn = document.querySelector('.help_btn')
const helpCloseBtn = document.querySelector('.help_close');
const endGameDisplay = document.querySelector('.end_game');

//Hidding the help and end game screens
endGameDisplay.style.visibility = 'hidden';
helpDisplay.style.visibility = 'hidden';
//execute help screen open and close functions
helpScreenOn();
helpScreenOff();






//Declaring the posible outcomes of which elements win
const outcomes = [{
    name: "electric",
    beats: "water",
    lossTo: "earth",
    drawTo: "fire",
    num: 1
},{
    name: "fire",
    beats: "earth",
    lossTo: "water",
    drawTo: "electric",
    num: 2
},{
    name: "water",
    beats: "fire",
    lossTo: "electric",
    drawTo: "earth",
    num: 3
},{
    name: "earth",
    beats: "electric",
    lossTo: "fire",
    drawTo: "water",
    num: 4
},
];


// DOM loading
// button elements and event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    // setting values of button clicked to elementChoice
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let elementChoice = this.getAttribute("data-type");
            runGame(elementChoice);

            // Reload page when clicking the reload button
            if (this.getAttribute("data-type") === "reload"){
                location.reload();
            }
            
        })
            
    }
    
})



//Create run game function
function runGame(playerSelects) {
    // create variable to equal elements of compRandSelection function
    let compSelects = compRandSelection();

    // Rewrite what the player and computer picked onto the id elements on the HTML
    document.getElementById('last_pick').textContent = playerSelects;
    document.getElementById('comp_element').textContent = compSelects['name'];
    
    
    // Result variable equal the winner of the round by running whoWinsRound function
    let result = whoWinsRound(playerSelects, compSelects);
    // Display the winner of the round to Id in HTML
    document.getElementById('round_winner').textContent = result;

}

// function to set what element player selects
function playerSelection(elementChoice) {
    let playerSelects = elementChoice;

}

// function to set what element computer randomly selects
function compRandSelection() {
    // Randomise a number 1-4 and give it appropriate array index from the outcomes array
    let randSelect = outcomes[Math.floor(Math.random()* outcomes.length)];
    return randSelect;
}


// function to run the winner of the round
function whoWinsRound(playerSelects, compSelects) {
    // increment the number of round played
    incrementRound();

    // if statment to determine who wins the round
    if (playerSelects === compSelects['name']) {
        return "You Draw";
        
    } else if (playerSelects === compSelects['lossTo']) {
        // increment player wins
        incrementWins();
        return "You Win!";
        

    } else if (playerSelects === compSelects['drawTo']){
        return "You Draw";
    } else {
        // inrement computer wins
        incrementLosses();
        return "You Lose";
       
    }

    
}

// function to tallying of Rounds
function incrementRound(prevWins) {
    //Declare variable to equal the value of the ID element 'round'
    let prevRound = parseInt(roundNo.innerText);
    //This will set the Inner text of 'round' ID to 1 + prevWins
    roundNo.innerText = ++prevRound;
    
    // once 5 round is complete run gameEnd function and show who wins game
    if (prevRound === 5) {
        gameEnd();
        if (parseInt(incrementWins()-1) === parseInt(incrementLosses()-1)){
            endGameWinner.textContent = "Draw. you both lose.";
        } else if (parseInt(incrementWins()-1) > parseInt(incrementLosses()-1)){
            endGameWinner.textContent = "YOU! Congrats."
        } else {
            endGameWinner.textContent = "Computer :("
        }
    }
}

// function to tally wins
function incrementWins() {
    //Declare variable to equal the value of the ID element 'wins'
    let prevWins = parseInt(winNo.innerText);
    //This will set the Inner text of 'wins' ID to 1 + prevWins
    winNo.innerText = ++prevWins;
    return prevWins;
    
}

// function to tally losses
function incrementLosses() {
    //Declare variable to equal the value of the ID element 'loss'
    let prevLoss = parseInt(lossNo.innerText);
    //This will set the Inner text of 'wins' ID to 1 + prevLoss
    lossNo.innerText = ++prevLoss;
    return prevLoss;
    
}

// function to display the end game screen
function gameEnd() {
    endGameDisplay.style.visibility = 'visible';
}


// function to display the help screen
function helpScreenOn() {
    // Display screen when helpBtn is clicked
    helpBtn.addEventListener('click', function(){
        helpDisplay.style.visibility = 'visible'; 
          
    })

    
}

// function to close help screen
function helpScreenOff() {
    // Hide help screen when helpCloseBtn is clicked
    helpCloseBtn.addEventListener('click', function(){
        helpDisplay.style.visibility = 'hidden'; 
        
    })

    

}
