const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 9000;

let db;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '..', 'build')));
console.log('test')
MongoClient.connect('mongodb://admin:p455W0rD1@ds127190.mlab.com:27190/southern-natural-sales', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
