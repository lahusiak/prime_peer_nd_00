var http = require('http');
//var numeral = require('numeral');
var randomNumber = require('./findRandomNumber');
var convertUSD = require('./convertUSD');
var randomConvert = require('./randomConvertUSD');
var accountBalance = require('./randomConvertUSD');

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write(convertUSD(1000000));
    //response.write(randomConvert());
    response.write(accountBalance());
    response.end();
}).listen(8000);

/*
 var express = require('express');
 var app = express();
 app.listen(8000);
 app.get("/", function(req, res, next){
 res.send("Hello Zeta");
 });
 */

module.exports = http;