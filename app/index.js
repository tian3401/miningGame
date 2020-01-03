const Miner = require("./miner")
const inquirer = require('inquirer');
const listOfCrypto = ["BTC", "XRP", "LTC", "ETH"]; 
const PriceChecker = require("./api")
let cryptoCurrency = cryptoSelector(listOfCrypto);
console.log('cryptoCurrency: ', cryptoCurrency)
let miner = new Miner(); 
let api = new PriceChecker();

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

const cryptoPrice = api.getPrice(cryptoCurrency);

inquirer
  .prompt(questionGenerator(cryptoCurrency))
  .then(response => {

    const cryptoPriceCheck = api.getPrice(cryptoCurrency);
      
    setTimeout(() => {
      switch(response.prediction){
        case "increase": 
          if(cryptoPrice <= cryptoPriceCheck) {
            console.log('Is ',cryptoPrice, '<=',cryptoPriceCheck, ':', cryptoPrice <= cryptoPriceCheck)
            console.log("You predicted correctly! You get to mine.")
            miner.startMining();
          }
          else {
            console.log('Is ',cryptoPrice, '>',cryptoPriceCheck, ':', cryptoPrice > cryptoPriceCheck)
            console.log("You're prediction is wrong.")
          }
          break;

        case "decrease": 
          if(cryptoPrice >= cryptoPriceCheck) {
            console.log('Is ',cryptoPrice, '>=',cryptoPriceCheck, ':', cryptoPrice >= cryptoPriceCheck)
            console.log("You predicted correctly! You get to mine.")
            miner.startMining();
          }
          else {
            console.log('Is ',cryptoPrice, '<',cryptoPriceCheck, ':', cryptoPrice < cryptoPriceCheck)
            console.log("You're prediction is wrong.")
          }
          break;
      }
    }, 5000)
  })









