const { response } = require('express');
const express = require('express');
const quotesRouter = express.Router();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');




// get all quotes
quotesRouter.get('/',(req, res, next) => {
    res.send(quotes)
    
})

quotesRouter.get('/random',(req, res, next) => {
    const randQ = getRandomElement(quotes);
    if (randQ) {
        res.send(randQ);
    } else {
        res.status(404).send();
    }
})

module.exports = quotesRouter;