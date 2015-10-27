var numeral = require('numeral');

function convertUSD(x) {
    var dollar = numeral(x).format('$0,0.00');
    console.log("This is dolloar: ", dollar);
    return dollar;
}


module.exports = convertUSD;

//var n = 6000
//console.log( n.toLocaleString('USD', {
//    style: 'currency',
//    currency: "USD",
//    minimumFractionDigits : 2,
//    maximumFractionDigits : 2
//}) );