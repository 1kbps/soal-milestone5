var pBatbowlsBidValues = function () {
    var pBatbowlsBidValuesInit = Array.from({length: 180}, () => Math.floor(Math.random() * (200 - 20) + 20)); 

    return pBatbowlsBidValuesInit;
}
// pBatbowlsBidValues () whose value is a random number between 20 and 200 to be called 60 times

var pAllsBidValues = function () {
    var pAllsBidValuesInit = Array.from({length: 108}, () => Math.floor(Math.random() * (200 - 50) + 50));
    return pAllsBidValuesInit;
}
// pAllsBidValues () whose value is a random number between 50 and 200 to be called 18 times

var pKeepsBidValues = function() {
    var pKeepsBidValuesInit = Array.from({length: 72}, () => Math.floor(Math.random() * (200 - 100) + 100));
    return pKeepsBidValuesInit;
}
// pKeepsBidValues () whose value is a random number between 100 and 200 to be called 12 times

var sCoachesBidValues = function () {
    var sCoachesBidValuesInit =  Array.from({length: 36}, () => Math.floor(Math.random() * (50 - 20) + 20)); // to be called 6 times
    return sCoachesBidValuesInit;
}
// sCoachesBidValues () whose value is a random number between 20 and 50 to be called 6 times

var sMedicsBidValues = function () {
    var sMedicsBidValuesInit =  Array.from({length: 36}, () => Math.floor(Math.random() * (10 - 5) + 5)); // to be called 6 times
    return sMedicsBidValuesInit;
}
// sMedicsBidValues () whose value is a random number between 5 and 10 to be called 6 times

var sTrainsBidValues = function () {
    var sTrainsBidValuesInit =  Array.from({length: 72}, () => Math.floor(Math.random() * (5 - 1) + 1)); // to be called 12 times
    return sTrainsBidValuesInit;
}
// sTrainsBidValues () whose value is a random number between 1 and 5 to be called 12 times

/*
pBatbowlsBidValues();
pAllsBidValues();
pKeepsBidValues();
sCoachesBidValues();
sMedicsBidValues();
sTrainsBidValues();
*/