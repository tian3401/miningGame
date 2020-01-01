const Miner = require("./miner")
const inquirer = require('inquirer');

const listOfCrypto = ["BTC", "XRP", "LTC", "ETH"]; 

function cryptoSelector(list) {

  let randomInt = Math.floor(Math.random()*listOfCrypto.length),
  selectedCrypto = listOfCrypto[randomInt];

  console.log(`Random Crypto Asset for today is ${selectedCrypto}!`)

  return selectedCrypto;
}

function questionGenerator(selectedCrypto) {

  let currentDate = new Date().getTime(),
  oneDayLag = 1000*60*60*24,
  futureDateInMilliseconds = currentDate + oneDayLag,
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

let cryptoCurrency = cryptoSelector();
let miner = new Miner(); 

inquirer
  .prompt(questionGenerator(cryptoCurrency))
  .then(response => {

    console.log("the response: ",response)

    //Currently runs the miner as long as a response is given. 
    //Will need to update code to run if response is the correct response. 
    if(response) {
      miner.startMining();
    }
    
  })







