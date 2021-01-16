const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/properties', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  get25((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});




app.listen(port, function() {
  console.log(`listening on port ${port}`);
});