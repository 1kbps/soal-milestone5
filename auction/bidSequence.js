
// Durstenfeld Shuffle algorithm for random shuffles of an array
//retrieved from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

var teamNumbers = [1,2,3,4,5,6];
console.log (teamNumbers);
function shuffleOrder(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleOrder (teamNumbers);

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

var pBatbowlsBidSequence = function () {
    var pBatbowlsBidSequenceInit = Array.from({length: 6}, () => Math.floor(Math.random() * (200 - 20) + 20)); 
    return pBatbowlsBidSequenceInit;
}
// pBatbowlsBidSequence () whose value is a random number between 20 and 200 to be called 60 times

var pAllsBidSequence = function () {
    var pAllsBidSequenceInit = Array.from({length: 6}, () => Math.floor(Math.random() * (200 - 50) + 50));
    return pAllsBidSequenceInit;
}
// pAllsBidSequence () whose value is a random number between 50 and 200 to be called 18 times

var pKeepsBidSequence = function() {
    var pKeepsBidSequenceInit = Array.from({length: 6}, () => Math.floor(Math.random() * (200 - 100) + 100));
    return pKeepsBidSequenceInit;
}
// pKeepsBidSequence () whose value is a random number between 100 and 200 to be called 12 times

var sCoachesBidSequence = function () {
    var sCoachesBidSequenceInit =  Array.from({length: 6}, () => Math.floor(Math.random() * (50 - 20) + 20)); // to be called 6 times
    return sCoachesBidSequenceInit;
}
// sCoachesBidSequence () whose value is a random number between 20 and 50 to be called 6 times

var sMedicsBidSequence = function () {
    var sMedicsBidSequenceInit =  Array.from({length: 6}, () => Math.floor(Math.random() * (10 - 5) + 5)); // to be called 6 times
    return sMedicsBidSequenceInit;
}
// sMedicsBidSequence () whose value is a random number between 5 and 10 to be called 6 times

var sTrainsBidSequence = function () {
    var sTrainsBidSequenceInit =  Array.from({length: 6}, () => Math.floor(Math.random() * (5 - 1) + 1)); // to be called 12 times
    return sTrainsBidSequenceInit;
}
// sTrainsBidSequence () whose value is a random number between 1 and 5 to be called 12 times

/*
pBatbowlsBidSequence();
pAllsBidSequence();
pKeepsBidSequence();
sCoachesBidSequence();
sMedicsBidSequence();
sTrainsBidSequence();
*/