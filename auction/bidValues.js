var faker = require('faker/locale/en'); //choosing locale 
var fakerInd = require('faker/locale/en_IND');

function player(string){                                           //Batsman object
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();                      //returns country
    this.type = string;
    this.mPlayed =faker.random.number(200);                     // returns random number b/w 0 and 200
    this.price_inLakhs = faker.random.number({'min':20,'max':200});// returns random number in b/w the range
    var functionality = function (string){
        switch(string){
            case 'Batsman':return bats();
            case 'Bowler':return bowls();
            case 'Keeper':return keeps();
            case 'All-Rounder':return bats(),bowls();
        }
    }
    var bats = function(){return console.log("I bat");};
    var bowls = function(){return console.log("I bowl");};
    var keeps= function(){return console.log("I keep");};
    
}


function teamStaff(string1){
    
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();
    this.type = string1;
    var functionality = function (string){
        switch(string1){
            case 'Coach':return coaches();
            case 'Medico':return heals();
            case 'Trainer':return trains();
            
        }
    }
    var coaches = function(){return "i coach"};
    var trains = function(){return "i train"};
    var heals = function(){return "i heal"};
}


function team(num){
    this.number = num;
    this.name = fakerInd.address.state();
    this.mascot = faker.commerce.product();
    this.budget = faker.random.number({'min':2000,'max':5000});
    this.owner = faker.name.findName();
    var sendBid = function(){};
}


var bidPool = {};
bidPool[0] = new player("Batsman");

for (var i= 0; i <= 29; i++) {
    bidPool[i] = new player("Batsman");
}

for (var i= 30; i <= 59; i++) {
    bidPool[i] = new player("Bowler");
  }

  for (var i= 60; i <= 77; i++) {
    bidPool[i] = new player("Keeper");
  }  

  for (var i= 78; i <= 89; i++) {
    bidPool[i] = new player("All-Rounder");
  }


  for (var i= 90; i <= 95; i++) {
    bidPool[i] = new teamStaff("Coach");
  }

  for (var i= 96; i <= 101; i++) {
    bidPool[i] = new teamStaff("Medico");
  }

  for (var i= 102; i <= 113; i++) {
    bidPool[i] = new teamStaff("Trainer");
  }


var teamPool = {};

teamPool[0] = new team(1);
teamPool[1] = new team(2);
teamPool[2] = new team(3);
teamPool[3] = new team(4);
teamPool[4] = new team(5);
teamPool[5] = new team(6);




//console.log(teamPool[0]);





var pBatbowlsBidValuesInit = Array.from({length: 60}, () => Math.floor(Math.random() * (200 - 20) + 20));
var pAllsBidValuesInit = Array.from({length: 18}, () => Math.floor(Math.random() * (200 - 50) + 50));
var pKeepsBidValuesInit = Array.from({length: 12}, () => Math.floor(Math.random() * (200 - 100) + 100));
var sCoachesBidValuesInit =  Array.from({length: 6}, () => Math.floor(Math.random() * (50 - 20) + 20)); 
var sMedicsBidValuesInit =  Array.from({length: 6}, () => Math.floor(Math.random() * (10 - 5) + 5));
var sTrainsBidValuesInit =  Array.from({length: 12}, () => Math.floor(Math.random() * (5 - 1) + 1));




var concatBids = pKeepsBidValuesInit.concat(pBatbowlsBidValuesInit,pAllsBidValuesInit,sCoachesBidValuesInit,sMedicsBidValuesInit,sTrainsBidValuesInit);

//console.log(concatBids[0]);


for(i=0; i<concatBids.length; i++){
    bidPool[i].price_inLakhs = concatBids[i];
}


//console.log(bidPool[0].price_inLakhs);


function repeatArray(arr, count) {
    var b = new Array();
    for(i=0; i<count;i++) {
        b.push(arr[i%arr.length]);
    }
        return b;
}


//console.log(xArray)
var xArray = [1,2,3,4,5,6];
var newArray = repeatArray(xArray,114);
//console.log(newArray.length);


console.log(bidPool[0].name+" sold to "+teamPool[0].name+" for "+bidPool[0].price_inLakhs+" lakhs.");
