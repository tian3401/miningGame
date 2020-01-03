const Miner = require("./miner")
const inquirer = require('inquirer');
const listOfCrypto = ["BTC", "XRP", "LTC", "ETH"]; 
const PriceChecker = require("./api")

let cryptoCurrency = cryptoSelector(listOfCrypto);
let miner = new Miner(); 
let api = new PriceChecker();

//Utility Functions: Still need to modularize these functions to clean up the code
function cryptoSelector(list) {

  let randomInt = Math.floor(Math.random()*list.length),
  selectedCrypto = list[randomInt];

  console.log(`Random Crypto Asset for today is ${selectedCrypto}!`)

  return selectedCrypto;
}

function questionGenerator(selectedCrypto) {

  let currentDate = new Date().getTime(),
  timeLag = 1000*60*60*24,
  futureDateInMilliseconds = currentDate + timeLag,
  futureDate = new Date(futureDateInMilliseconds),
  question = {
    type: 'list',
    name: 'prediction',
    message: `Will ${selectedCrypto} increase or decrease by ${futureDate}?`,
    choices: ["increase", "decrease"],
    filter: function(val) {
      return val;
    }
  }

  return question; 

}

async function compareCrypto(response) {
  
  console.log("Please wait while we calculate the prices....")

  const cryptoPrice = await api.getPrice(cryptoCurrency);
  
  //This delay is arbritrary for now. Will need to update. 
  let delayCounter = 1000000;

  for(let count = 0; count < delayCounter; count++) {
    console.log("calculating in progress....")
  }

  const cryptoPriceCheck = await api.getPrice(cryptoCurrency);

  //Once both crypto price and it's check complete, we can compare the values
  switch(response.prediction) {
    case "increase":
      if(cryptoPriceCheck > cryptoPrice) {
        console.log('Is ',cryptoPrice, '>',cryptoPriceCheck, ':', cryptoPrice <= cryptoPriceCheck)
        console.log("You predicted correctly! You get to mine.")
        miner.startMining();
      }
      else {
        console.log("You're prediction is wrong.")
        console.log('Because, '+ cryptoPrice + '<=' + cryptoPriceCheck)
      }
      break; 
    case "decrease":
      if(cryptoPriceCheck < cryptoPrice) {
        console.log('Is ',cryptoPrice, '<',cryptoPriceCheck, ':', cryptoPrice <= cryptoPriceCheck)
        console.log("You predicted correctly! You get to mine.")
        miner.startMining();
      }
      else {
        console.log("You're prediction is wrong.")
        console.log('Because, ' + cryptoPrice + '>=' + cryptoPriceCheck)
      }
  }
    

}

//Inquirer only runs once before exiting node app. 
//Will update to give user the option to play more than once. 
inquirer
  .prompt(questionGenerator(cryptoCurrency))
  .then(response => {

    console.log("processing your response...")

    compareCrypto(response);
  
  })









