const { buildProperty, buildPhotoList } = require('./datafaker.js');

const generateData = () => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    let property = buildProperty();
    property.photos = buildPhotoList(property.apartment, photos = 40);
    data = data.push(property);
  }
  return data;
};

// Generate data
// Save to json
// Create db if not exists
// Connect to db
// Load Models
// Sync db
// Create property table records for each property
  // Create photo table records for each photo
    // Upload associated photos to S3
// Close connection
