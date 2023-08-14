let numberOfPlayers = prompt("Insert number of players",);
let players = [];
let winningAmount = prompt("Set the winning amount of points",);

for ( i = 0; i < numberOfPlayers; i++ ) {
    players[i] = prompt("Insert Player " + (i+1) + " name");
    document.getElementById("scoreTableHeader").innerHTML += ("<th>" + players[i] + "</th>");
}





