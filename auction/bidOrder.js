
// Durstenfeld Shuffle algorithm for random shuffles of an array
//retrieved from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

var teamString = '1,2,3,4,5,6,'.repeat(4);
console.log(teamString);
var teamNumbers = teamString.split(',').map(Number);
console.log(teamNumbers);
function shuffleOrder(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleOrder (teamNumbers);
console.log (teamNumbers);

// one sequence to generate the bid order for each round of bidding

/* var tBidOrder = function() {
    var c = Array.from({ length: 6 }, function() {
      return Math.floor(999 * Math.random() + 1);
    });
    return (
      c.sort(function(d, e) {
        return d - e;
      }),
      c
    );
  },
*/

// six sequences which produce the budget per the requisite player or staff slot. 