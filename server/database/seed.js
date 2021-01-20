const { buildProperty, buildPhotoList } = require('./dataFaker.js');
const { db, initializeDB } = require('./index.js');
const { property, photo } = require('./models.js');

const generateData = () => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    let propertyEntry = buildProperty();
    propertyEntry.photos = buildPhotoList(propertyEntry.apartment, photos = 34);
    data.push(propertyEntry);
  }
  return data;
};

const seed = async () => {
  await initializeDB();
  let data = generateData();
  try {
    let records = await property.bulkCreate(data, {
      include: [{
        association: property.photo,
      }]
    })
    .then(res => {db.close();});
    console.log('Records created!');
  } catch (err) {
    console.log('Error creating records:', err);
  }
};

seed();

