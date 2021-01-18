const { buildProperty, buildPhotoList } = require('./dataFaker.js');
const { db, initializeDB } = require('./index.js');
const { property, photo } = require('./models.js');

const generateData = () => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    let property = buildProperty();
    property.photos = buildPhotoList(property.apartment, photos = 40);
    console.log(property.photos[0]);
    data.push(property);
  }
  return data;
};

const seed = async () => {
  await initializeDB();
  let data = generateData();
  try {
    let records = await property.bulkCreate(data, {returning: true})
      .then(res => console.log(res));
    console.log('Records created!');
  } catch (err) {
    console.log('Error creating records:', err);
  }
};

seed();

// Generate data
// Save to json
// Create db if not exists
// Connect to db
// Load Models
// Sync db
// Create property table records for each property
  // Create photo table records for each photo
  // https://abphotos.s3-us-west-2.amazonaws.com/AXlia/image21.jpg
// Close connection
