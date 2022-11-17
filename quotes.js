const express = require('express');
const quotesRouter = express.Router();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');




quotesRouter.get('/',(req, res, next) => {
    res.send(quotes)
    
})

module.exports = quotesRouter;