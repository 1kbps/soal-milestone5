var faker = require('faker/locale/en');                             //choosing locale 
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
    var bats = function(){return "I bat"};
    var bowls = function(){return "I bowl"};
    var keeps= function(){return "I keep"};
    
}


function teamStaff(string1){
    
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();
    this.type = string1;
    this.price_inLakhs = faker.random.number({'min':20,'max':90});
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


function team(){
    
    this.name = fakerInd.address.state();
    this.mascot = faker.commerce.product();
    this.budget = faker.random.number({'min':2000,'max':5000});
    this.owner = faker.name.findName();
    var sendBid = function(){};
}


/*function pAlls(){//All-rounder object 
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();
    this.type = "All-rounder"   
    this.mPlayed =faker.random.number(200)          
    this.price_inLakhs = faker.random.number({'min':20,'max':200});
    var Alls = function(){
        return "I bat I bowl";
    }
}


function pBowls(){//Bowler object
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();
    this.type = "Bowler"
    this.mPlayed =faker.random.number(200)
    this.price_inLakhs = faker.random.number({'min':20,'max':200});
    var bowls = function(){
        return "I bowl";
    }
}


function pKeeps(){// Keeper object
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();
    this.type = "Keeper"
    this.mPlayed =faker.random.number(200)
    this.price_inLakhs = faker.random.number({'min':20,'max':200});
    var keeps = function(){
        return "I keep";
    }
}
*/


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
for(i=0; i < 6; i++){
    teamPool[i] = new team();
}

  
console.log(bidPool[0].price_inLakhs);
for(i=0; i<114; i++){
     console.log("Player up for auction : "+bidPool[i].name+"\nPrice(in lakhs): "+bidPool[i].price_inLakhs);
        for()
    }


   