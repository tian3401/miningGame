const Miner = require("./miner")

let miner = new Miner(); 

miner.startMining();

console.log(`Your miner just mined ${miner.coin} coins!`); 