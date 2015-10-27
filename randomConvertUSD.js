var randomNumber = require('./findRandomNumber');
var convertUSD = require('./convertUSD');

var converted = randomConvert();

function randomConvert(){
    var number = parseInt(randomNumber(100, 1000000));
    var converted = convertUSD(number);
    console.log(converted);
    return converted;
}

function accountBalance(){
    var balance = "Account balance:\n" + converted;
    return balance;
}
module.exports = accountBalance;