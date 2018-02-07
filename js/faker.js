var faker = require('faker/locale/en'); //choosing locale 



function pBats(){                                               //Batsman object
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();                      //returns country
    this.type = "Batsman"
    this.mPlayed =faker.random.number(200);                     // returns random number b/w 0 and 200
    this.price = faker.commerce.price(100000,50000000,0,"₹");   // return random price b/w the range with "₹" preffix
    var bats = function(){
        return "I bat";
    }
}

function pAll(){//All-rounder object 
    this.name = faker.name.findName(0);
    this.nation = faker.address.country(); 
    this.type = "All-Rounder"
    this.mPlayed =faker.random.number(200)
    this.price = faker.commerce.price(100000,50000000,0,"₹");
    var all = function(){
        return "I bat and bowl";
    }
}


function pBowls(){//Bowler object
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();
    this.type = "Bowler"
    this.mPlayed =faker.random.number(10,200)
    this.price = faker.commerce.price(100000,50000000,0,"₹");
    var bowls = function(){
        return "I bowl";
    }
}


function pKeeps(){// Keeper object
    this.name = faker.name.findName(0);
    this.nation = faker.address.country();
    this.type = "Keeper"
    this.mPlayed =faker.random.number(10,200)
    this.price = faker.commerce.price(100000,50000000,0,"₹ ");
    var keeps = function(){
        return "I keep";
    }
}


var player1 = new pKeeps();
var player2 = new pBats();
console.log(player1);

var pData = JSON.stringify(player1);
JSON.stringify(player2);
console.log(typeof pData);

