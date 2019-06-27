const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const db = require('./database/schema.js');
const port = 3002;

app.use(express.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));

app.post('/api', (req, res) => {
  db.create(req.body)
    .then( () => {console.log('Added entry into database')})
    .catch( err => {console.error('Unable to add entry to database')});
  res.status(201).end();
});


app.listen(port, () => console.log(`Listening on port ${port}`));


