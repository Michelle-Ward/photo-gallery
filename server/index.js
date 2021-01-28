const express = require('express');
const properties = require('./database/controllers/properties.js');
const photos = require('./database/controllers/photos.js');

const app = express();
const port = 3003;

app.use(express.static(`${__dirname}/../client/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/properties', properties.get);
app.get('/api/properties/:propertyId', properties.getOne);
app.patch('/api/properties/:propertyId', properties.patch);
app.get('/api/photos/:propertyId', photos.get);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
