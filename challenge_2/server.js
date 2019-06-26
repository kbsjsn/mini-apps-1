//receive the submit data from the client (as JSON) and render it to csv
// render the data onto the html and also present blank form

const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const port = 3900;

app.use(express.static('client'));
app.use(parser.urlencoded({extended:false}));
// app.get('/', function(req, res) {
//   console.log('GET request successful');
//   res.sendFile(path.join(__dirname + '/client/index.html'));
//   res.status(200).end()
// })

app.post('/upload_json', (req, res) => {
  var jsonStr = req.body.jsonData;
  var removedRsJSON = jsonStr.split('\r').join('');
  var removedNsJSON = removedRsJSON.split('\n').map(str => str.trim()).join('');
  //got rid of ';' at the end of removedNsJSON
  var jsonObj = JSON.parse(removedNsJSON.substring(0, removedNsJSON.length - 1));
  console.log(jsonObj.children[0].children); //array inside 'Beth Jr'
  // var jsonObj = JSON.parse(jsonStr);
  console.log('POST request successful', jsonObj);
  res.sendFile(path.join(__dirname + '/client/index.html'));
  res.status(201).end();
});

// var jsonToCSV = function(jsonObj) {

// }

app.listen(port, () => console.log(`Listening to port ${port}`));

