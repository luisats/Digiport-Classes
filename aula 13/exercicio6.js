// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

let scores = {
    player1: 2,
    player2: 5,
    player3: 1,
};

let total = 0;

for (let player in scores) {
    total += scores[player];
}

console.log("Total score: " + total);


