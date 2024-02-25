
const electicButton = document.querySelector('.btn_electric');

// DOM loading
// button elements and event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let elementChoice = this.getAttribute("data-type");
            console.log(elementChoice);
            runGame(elementChoice);
            
        })
            
    }

    runGame();
})


function runGame(elementChoice) {
    let randSelect = Math.floor(Math.random()* 4 + 1);
    console.log(randSelect);
    
    compRandSelection(randSelect);

    const result = whoWinsRound(elementChoice, randSelect);

    alert(result);
    

}

function playerSelection(elementChoice, electicButton) {
    document.getElementById('player_element').textContent = elementChoice;

}

function compRandSelection(randSelect) {
    const elements = ["Electric", "Fire", "Water", "Earth"];

    if (randSelect === 1) {
        document.getElementById('comp_element').textContent = "Electric";
    } else if (randSelect === 2) {
        document.getElementById('comp_element').textContent = "Fire";
    } else if (randSelect === 3) {
        document.getElementById('comp_element').textContent = "Water";
    } else if (randSelect === 4) {
        document.getElementById('comp_element').textContent = "Earth";
    }
}



function whoWinsRound(elementChoice, randSelect) {
    const outcomes = {
        "electric": { beats: 3, losesTo: 4 },
        "fire": { beats: 4, losesTo: 3 },
        "water": { beats: 2, losesTo: 1 },
        "earth": { beats: 1, losesTo: 2 }
    };

    if (elementChoice === randSelect) {
        return "Draw";
    } else if (randSelect === outcomes[elementChoice].beats) {
        return "Win";
    } else {
        return "Lose";
    }
}

function playerWins() {

}

function draw() {

}

function compWins() {

}

function whoWins() {

}

function incrementRound() {

}

function incrementWins() {

}

function incrementLosses() {

}

function restartGame() {

}

function helpScreen() {

}
