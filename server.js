const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = require('./quotes.js');
app.use('/quotes', quotesRouter);

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})