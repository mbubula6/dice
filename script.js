const setup = document.querySelector(".setup");
let numberOfPlayers = 0;
let players = [];
let player = [];
let roundNum = 0;

setup.addEventListener("click", () =>  {
    numberOfPlayers = prompt("Insert number of players",);
    let winningAmount = prompt("Set the winning amount of points",);
    roundNum = 1;

    document.getElementsByTagName("main")[0].innerHTML = "<h2>Scores</h2><table id='scoreTable'><tr id='scoreTableHeader'><th>Round</th>";
    
    for ( i = 0; i < numberOfPlayers; i++ ) {
        players[i] = prompt("Insert Player " + (i+1) + " name");
        document.getElementById("scoreTableHeader").innerHTML += ("<th>" + players[i] + "</th>");
    }

    document.getElementsByTagName("main").innerHTML += "</tr></table>";
});


const round = document.querySelector(".round"); 

round.addEventListener("click", () => {
    document.getElementById("scoreTable").innerHTML += "<tr><td>" + roundNum + "</td>";

    for ( let playerNum = 0; playerNum < numberOfPlayers; playerNum++ ) {
        //player[i][roundNum] = prompt("insert Player " + (i+1) + "'s score",);
        
        // btn.addEventListener("click", () => {
        //     // players[i][round] = input.value;  
        //document.getElementById("scoreTable").innerHTML += "<td>" + playerNum + "</td>";
        // });   

    }
    document.getElementById("scoreTable").innerHTML += "</tr>";

    
    //document.getElementById("scoreTable").innerHTML = "<th>" + numberOfPlayers + "</th>";
    roundNum += 1;
});



