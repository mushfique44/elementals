
//Declaring variables to equal elements from the HTML
const electicButton = document.querySelector('.btn_electric');
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


endGameDisplay.style.visibility = 'hidden';
helpDisplay.style.visibility = 'hidden';
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

const noWins = 0;

// DOM loading
// button elements and event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let elementChoice = this.getAttribute("data-type");
            console.log(elementChoice);
            runGame(elementChoice);


            if (this.getAttribute("data-type") === "reload"){
                location.reload();
            }
            
        })
            
    }
    
})




function runGame(playerSelects) {
    let compSelects = compRandSelection();
    // console.log(compSelects['name']);
    // console.log(compSelects['beats']);

    document.getElementById('last_pick').textContent = playerSelects;
    document.getElementById('comp_element').textContent = compSelects['name'];
    
    

    const result = whoWinsRound(playerSelects, compSelects);
    //alert(result);
    document.getElementById('round_winner').textContent = result;
   

}

function playerSelection(elementChoice) {
    let playerSelects = elementChoice;

}

function compRandSelection() {
    let randSelect = outcomes[Math.floor(Math.random()* outcomes.length)];
    return randSelect;
}



function whoWinsRound(playerSelects, compSelects) {
    incrementRound();
    if (playerSelects === compSelects['name']) {
        return "You Draw";
        
    } else if (playerSelects === compSelects['lossTo']) {
        incrementWins();
        return "You Win!";
        

    } else if (playerSelects === compSelects['drawTo']){
        return "You Draw";
    } else {
        incrementLosses();
        return "You Lose";
       
    }

    
}

/**
 * Tallying of Rounds
 */
function incrementRound(prevWins) {
    //Declare variable to equal the value of the ID element 'round'
    let prevRound = parseInt(roundNo.innerText);
    //This will set the Inner text of 'round' ID to 1 + prevWins
    roundNo.innerText = ++prevRound;
    
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

/**
 * Tallying of Wins
 */
function incrementWins() {
    //Declare variable to equal the value of the ID element 'wins'
    let prevWins = parseInt(winNo.innerText);
    //This will set the Inner text of 'wins' ID to 1 + prevWins
    winNo.innerText = ++prevWins;
    return prevWins;
    
}

/**
 * Tallying of Losses
 */
function incrementLosses() {
    //Declare variable to equal the value of the ID element 'loss'
    let prevLoss = parseInt(lossNo.innerText);
    //This will set the Inner text of 'wins' ID to 1 + prevLoss
    lossNo.innerText = ++prevLoss;
    return prevLoss;
    
}

function gameEnd() {
    endGameDisplay.style.visibility = 'visible';
}



function helpScreenOn() {
    
    helpBtn.addEventListener('click', function(){
        helpDisplay.style.visibility = 'visible'; 
          
    })

    
}

function helpScreenOff() {
    
    helpCloseBtn.addEventListener('click', function(){
        helpDisplay.style.visibility = 'hidden'; 
        
    })

    

}
