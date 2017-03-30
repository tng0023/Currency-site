var express = require('express');
var router = express.Router();

var exchangeRates = {'US': 1, 'EUR' : 0.94, 'JPY' : 112.86};

router.get('/', function(req, res){
  res.render('index');
});

router.get('/convert', function(req, res){
  var dollars = req.query.dollar_amount;
  var convertTo = req.query.to_currency;
  var convertFrom = req.query.from_currency;

  var rate = exchangeRates[convertTo];
  var rate2 = exchangeRates[convertFrom];
  result = dollars * rate;
  // result2 = dollars * rate2 * rate; --cannot figure out how to implement euro or yen calculation based on from currency
  result2 = dollars / rate2 * rate;

  res.render('Results', {dollars: dollars, result2 : result2, currency2: convertFrom, result : result, currency: convertTo});
});

// router.get('/convert', function(req, res){
//   var dollars = req.query.dollar_amount;
//   var convertFrom = req.query.from_currency;
//
//   var rate = exchangeRates[convertFrom];
//   result = dollars * rate;
//   res.render('Results', {currency: convertFrom, result : result, dollars : dollars});
// });

module.exports = router;
