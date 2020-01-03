# The Mining Game
A simple node mining game that uses hashes and cryptocurrency prices to determine the rate of mining and how many miners a user gets.

###### Game Mechanics: 
1. User is asked a yes/no question about the price of a random cryptocurrency
2. User predicts whether the price will increase or decrease
3. If the user predicts correctly, the program will mine fictious coins for the user; however if the user predicts incorrectly, no coins will be mined. 

###### Game's Goal: 
  The goal of the game is to mine more coins than other user. 

## Motivation 
This project was inspired by blockchain technology and the need to understand the technology on a more fundamental level. The Mining Game hopes to provide an entertaining game that helps users solidify their understanding while having some fun. 

## Features 

**Cryptocurreny Prices:** The game utilizes CryptoCompare's API to get cryptoprices and asks the user to predict whether the price will increase or decrease via a prompt. 

**Mining Coins:** The game allows the user to mine fictious coins by solving a cryptographic puzzle. Although there is not an official blockchain associated with this mining, the most basic mechanism of how miners solve these mathematical puzzles in order to mine new cryptocurrency is illustrated with this feature. 

## Notes 
Development is still in progress. Updates to the Readme file will be released piece meal. 

## How to Run

In the app folder, run the following script. 

```
node index.js 

```
