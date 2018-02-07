// one sequence to generate the bid order for each round of bidding
var tBidOrder = Array.from({length: 6}, () => Math.floor(Math.random() * (1000-1)+1));
tBidOrder.sort((a,b) => {return(a-b)}) ; //sort returns strings, compare function needed to sort by int
// console.log (tBidOrder);

// six sequences which produce the budget per the requisite player or staff slot. 
var pBatbowlsBidSequence = Array.from({length: 6}, () => Math.floor(Math.random() * (200-20)+20)); // to be run 60 times
var pAllsBidSequence = Array.from({length: 6}, () => Math.floor(Math.random() * (200-50)+50)); // to be run 18 times
var pKeepsBidSequence = Array.from({length: 6}, () => Math.floor(Math.random() * (200-100)+100)); // to be run 12 times
var sCoachesBidSequence = Array.from({length: 6}, () => Math.floor(Math.random() * (50-20)+20)); // to be run 6 times
var sMedicsBidSequence = Array.from({length: 6}, () => Math.floor(Math.random() * (50-20)+20)); // to be run 6 times
var sTrainsBidSequence = Array.from({length: 6}, () => Math.floor(Math.random() * (50-20)+20)); // to be run 12 times

/*
console.log (pBatbowlsBidSequence);
console.log (pAllsBidSequence);
console.log (pKeepsBidSequence);
console.log (sCoachesBidSequence);
console.log (sMedicsBidSequence);
console.log (sTrainsBidSequence);
*/