const fetch = require('node-fetch'); 

let apiKey = 'c6ef5b34eee2a7c819059dcfb6a2abf8edaecbdc930bd06eccebf1877da6c8fd';

class CryptoPriceAPI{
  constructor() {
    this.cryptoAsset = null;
    this.queryString = null; 
  }

  getPrice(randomCryptoAsset) {

    this.cryptoAsset = randomCryptoAsset; 
    
    this.queryString = 'https://min-api.cryptocompare.com/data/price?fsym='+ this.cryptoAsset +'&tsyms=USD&api_key='+ apiKey

    let result = fetch(this.queryString)
      .then(res => res.json()
      .then(data => {

        let stringData = JSON.stringify(data.USD)
        
        return stringData; 
      })); 
     
    return result; 
  }
  
}


module.exports = CryptoPriceAPI;