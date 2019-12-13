const crypto = require("crypto-js");
const cryptoRandomString = require("crypto-random-string");

class Miner {
  constructor(creator) {
    this.creator = creator;
    this.coin = 0; 
  }
  checkTime() {
    let date = new Date; 
    return date.getTime(); 
  }

  startMining(){
    let nonce = 0, 
    random = cryptoRandomString({length:10}),
    trigger = false,
    date = new Date(),
    delay = 1000*60,
    deadline = date.setTime(date.getTime() + delay), 
    currentTime,
    start = new Date(),
    end;  

    while(!trigger) {
      let secret = random + nonce,
      hash = crypto.SHA256(secret).toString(crypto.enc.Hex);
      nonce += 1;
      console.log(`${hash}`)
      if(hash.substr(0,5) === "00000") {
        console.log(`hash ran ${nonce} times`)
        this.coin +=1; 
      }

      currentTime = this.checkTime();

      if(currentTime > deadline) {
        end = new Date()
        console.log((end - start)/60000 + " minutes");
        trigger = true; 
      }
    }
  }
}

module.exports = Miner;