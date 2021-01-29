const { buildProperty, buildPhotoList } = require('./dataFaker.js');
const { db, initializeDB } = require('./index.js');
const { property, photo } = require('./models.js');

const maxPhotos = {
  1: 65,
  2: 34,
  3: 70,
  4: 26,
};

const generateData = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    const propertyEntry = buildProperty();
    const index = (i % 4) + 1;
    propertyEntry.photos = buildPhotoList(index, maxPhotos[index]);
    data.push(propertyEntry);
  }
  return data;
};

const seed = async () => {
  await initializeDB();
  const data = generateData();
  try {
    const records = await property.bulkCreate(data, {
      include: [{
        association: property.photo,
      }],
    })
      .then((res) => { db.close(); });
    console.log('Records created!');
  } catch (err) {
    console.log('Error creating records:', err);
  }
};

seed();
