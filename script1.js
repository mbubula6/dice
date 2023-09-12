    alert("huh?");
    
    const setup1 = document.getElementById("setup1");

    setup1.addEventListener("click", () => {
        
        let numberOfPlayers = prompt("Insert number of players",);
        let playerName = [];

        const table = document.getElementById("table");

        const newRow = document.createElement("tr");
        table.appendChild(newRow);

        for ( row = 0; row < numberOfPlayers; row++) {
            playerName[row] = prompt("Insert player " + row + " name:", );
            const newCell = document.createElement("th");
            newRow.appendChild(newCell);
            newCell.insertAdjacentText("beforeend", playerName[row]);
 
        }


    });
