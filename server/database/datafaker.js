const faker = require('faker');

const buildProperty = () => {
  const neighborhoods = [
    'North Beach',
    'Chinatown',
    'SOMA',
    'Union Square',
    'Central Market',
    'Castro',
    'Noe Valley',
    'Mission',
    'Lower Haight',
    'Hayes Valley',
    'Upper Haight',
    'Cole Valley',
    'Outer Sunset',
    'Outer Richmond',
    'Inner Sunset',
    'Inner Richmond',
    'Bayview',
    'Filmore',
    'Japantown',
    'Nob Hill',
    'Marina',
    'Pacific Heights',
    'Laurel Heights',
    'Presidio',
  ];

  const apartment = Boolean(Math.floor(Math.random() * 2));
  const property = {};
  property.new_construction = !faker.random.number({ min: 0, max: 8 });
  property.new = property.new_construction || !faker.random.number({ min: 0, max: 8 });
  property.furnished = !faker.random.number({ min: 0, max: 8 });
  property.petfriendly = !faker.random.number({ min: 0, max: 8 });
  property.address = faker.address.streetAddress(apartment);
  property.address2 = `San Francisco, CA 94${faker.address.zipCode('###')}`;
  property.neighborhood = faker.helpers.randomize(neighborhoods);
  if (apartment) {
    property.beds = faker.random.number({ min: 1, max: 6 });
    property.sqft = faker.random.number({ min: 500 * property.beds, max: 2500 * property.beds });
    property.cost = `$${Math.floor((6 * (property.sqft / 10) * Math.max((property.beds / 4), 2), 8 * (property.sqft / 10) * Math.max((property.beds / 4), 2))).toLocaleString()}/mo`;
  } else {
    property.beds = faker.random.number({ min: 1, max: 8 });
    property.sqft = faker.random.number({ min: 450 * property.beds, max: 2500 * property.beds });
    property.cost = `$${Math.floor(faker.commerce.price(350 * property.sqft * property.beds, 1000 * property.sqft * property.beds)).toLocaleString()}`;
  }
  property.favorite = !faker.random.number({ min: 0, max: 8 });
  property.baths = Math.max(faker.random.number({ min: Math.max(property.beds - 3), max: property.beds + 2 }), 1);
  property.sqft = property.sqft.toLocaleString();
  return property;
};

const buildPhotoList = (index, photos = 1) => {
  const photoList = [];
  for (let i = 1; i <= photos; i++) {
    const link = `https://abphotos.s3-us-west-2.amazonaws.com/AXlia/image${index}_${i < 10 ? `0${i}` : i}.jpg`;
    const format = link.substring(link.lastIndexOf('.') + 1, link.length);
    const floorplan = ((index === 2 && i === 14) || (index === 3 && i === 37)) ? true : null;
    photoList.push({ link, format, floorplan });
  }
  return photoList;
};

module.exports.buildProperty = buildProperty;
module.exports.buildPhotoList = buildPhotoList;
