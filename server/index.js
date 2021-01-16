const express = require('express');
const { get } = require('./database/controllers/properties.js');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/properties', get);





app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
