var faker = require('faker');

var buildProperty = () => {

  let neighborhoods = [
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
    'Presidio'
  ];

  let apartment = Boolean(Math.floor(Math.random() * 2));
  let property = {};
  property.new_construction = !Boolean(faker.random.number({min: 0, max: 8}));
  property.new = property.new_construction || !Boolean(faker.random.number({min: 0, max: 8}));
  property.furnished = !Boolean(faker.random.number({min: 0, max: 8}));
  property.petfriendly = !Boolean(faker.random.number({min: 0, max: 8}));
  property.address = faker.address.streetAddress(apartment);
  property.neighborhood = faker.helpers.randomize(neighborhoods);
  if (apartment) {
    property.beds = faker.random.number({min: 1, max: 6});
    property.sqft = faker.random.number({min: 500 * property.beds, max: 2500 * property.beds});
    property.rent = `${faker.commerce.price(6 * (property.sqft / 10) * Math.max((property.beds / 4), 2), 8 * (property.sqft / 10) * Math.max((property.beds / 4), 2), 0, '$')}/mo`;
  } else {
    property.beds = faker.random.number({min: 1, max: 8});
    property.sqft = faker.random.number({min: 450 * property.beds, max: 2500 * property.beds});
    property.price = faker.commerce.price(350 * property.sqft * property.beds, 1000 * property.sqft * property.beds, 0, '$');
  }
  property.favorite = !Boolean(faker.random.number({min: 0, max: 8}));
  property.baths = Math.max(faker.random.number({min: Math.max(property.beds - 3), max: property.beds + 2}), 1);
  return property;
};

var buildPhotoList = (apartment, photos = 1) => {
  let photoList = [];
  let type;
  apartment === true ? type = 'apartment' : type = 'house';
  for (let i = 1; i <= photos; i++) {
    let link = `https://abphotos.s3-us-west-2.amazonaws.com/AXlia/image${i}.jpg`;
    photoList.push(link);
  }
  return photoList;
};

module.exports.buildProperty = buildProperty;
module.exports.buildPhotoList = buildPhotoList;