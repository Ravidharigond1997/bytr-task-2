const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(cors());

function calculateReturns(boughtAt, marketPrice, quantity) {
  let result = (marketPrice - boughtAt) * quantity;

  return result;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);

  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString());
});

function totalReturns(stock1, stock2, stock3, stock4) {
  let result = stock1 + stock2 + stock3 + stock4;
  return result;
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalReturns(stock1, stock2, stock3, stock4).toString());
});

function calculateReturnPercentage(boughtAt, returns) {
  let result = (returns / boughtAt) * 100;

  return result;
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  res.send(calculateReturnPercentage(boughtAt, returns).toString());
});

function totalReturnsPercentage(stock1, stock2, stock3, stock4) {
  let result = stock1 + stock2 + stock3 + stock4;
  return result;
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalReturnsPercentage(stock1, stock2, stock3, stock4).toString());
});

function returnPercentageStatus(returnPercentage) {
  let result;

  if (returnPercentage > 0) {
    result = 'Profit';
  } else {
    result = 'Lose';
  }
}
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  res.send(returnPercentageStatus(returnPercentage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
