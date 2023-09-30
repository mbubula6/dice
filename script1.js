const setup1 = document.getElementById("setup1");
const round = document.getElementById("round");
const table = document.getElementById("table");
const body = document.querySelector("body");
const scores = document.getElementById("scores");

let roundNum = 0;
let numberOfPlayers;
let playerScore = [];

setup1.addEventListener("click", () => {
    numberOfPlayers = prompt("Insert number of players",);
    let playerName = [];

    const newRow = document.createElement("tr");
    table.appendChild(newRow);

    const cell = document.createElement("th");
        newRow.appendChild(cell);
        cell.insertAdjacentText("beforeend", "Round");

    for ( row = 0; row < numberOfPlayers; row++) {
        playerName[row] = prompt("Insert player " + (row+1) + " name:", );
        const cell = document.createElement("th");
        newRow.appendChild(cell);
        cell.insertAdjacentText("beforeend", playerName[row]);
        playerScore[row] = 0;
    }

    const cellScore = document.createElement("th");
    scores.appendChild(cellScore);
    cellScore.insertAdjacentText("beforeend", "Score");

    for ( row = 0; row < numberOfPlayers; row++) {
        const cell = document.createElement("th");
        cell.id = "score-player-" + row;
        scores.appendChild(cell);
        cell.insertAdjacentText("beforeend", playerScore[row]);
    }

    
    setup1.remove();
});

round.addEventListener("click", () => {
    roundNum++;
    const newRow = document.createElement("tr");
    table.appendChild(newRow);

    const cell = document.createElement("td");
    newRow.appendChild(cell);
    cell.insertAdjacentText("beforeend", roundNum);

    for ( i = 0; i < numberOfPlayers; i++) {
        const cell = document.createElement("td");
        cell.style.width = 100/numberOfPlayers + "%";
        newRow.appendChild(cell);
        const input = document.createElement("input");
        input.style.width = "100%";
        input.id = "cell-" + roundNum + "-" + i;
        cell.appendChild(input);

        if ( roundNum > 1 ) {
            const thatInput = document.querySelector("#cell-" + (roundNum-1) + "-" + i);
            thatInput.setAttribute("readonly",true);
            
            // if ( thatInput.value != "") {
            //     playerScore[i] += parseInt(thatInput.value);
            //     document.getElementById("score-player-" + i).innerHTML = playerScore[i];
            // }
        }
    }

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
        
            for ( i = 0; i < numberOfPlayers; i++ ) {
                playerScore[i] = 0;
                
                for ( j = 0; j < roundNum; j++ ) {
                    let thatInput = document.querySelector("#cell-" + (j+1) + "-" + i);
                
                    if ( thatInput.value != "") {
                        playerScore[i] += parseInt(thatInput.value);
                        document.getElementById("score-player-" + i).innerHTML = playerScore[i];
                    }
                }
            }




            // if ( input.value == "") {
            //     body.style.backgroundColor = "red";
            // } else {
            //     body.style.backgroundColor = "blue";
            // }
        });
    });
});