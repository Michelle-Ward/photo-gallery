var faker = require('faker');

var neighborhoods = [
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

var buildProperty = () => {
  let apartment = Boolean(Math.floor(Math.random() * 2));
  let property = {};
  property.new_construction = Boolean(Math.floor(Math.random() * 2));
  property.new = property.new_construction || Boolean(Math.floor(Math.random() * 2));
  property.furnished = Boolean(Math.floor(Math.random() * 2));
  property.petfriendly = Boolean(Math.floor(Math.random() * 2));
  property.address = faker.address.streetAddress(apartment);
  property.neighborhood = faker.helpers.randomize(neighborhoods);
  if (apartment) {
    property.beds = faker.random.number({min: 1, max: 6});
    property.sqft = faker.random.number({min: 500 * property.beds, max: 2500 * property.beds});
    property.rent = `${faker.commerce.price(3 * (property.sqft / 20) * property.beds, 10 * (property.sqft / 20) * property.beds, 0, '$')}/mo`;
  } else {
    property.beds = faker.random.number({min: 1, max: 8});
    property.sqft = faker.random.number({min: 450 * property.beds, max: 2500 * property.beds});
    property.price = faker.commerce.price(360 * property.sqft * property.beds, 1200 * property.sqft * property.beds, 0, '$');
  }
  property.baths = Math.max(faker.random.number({min: Math.max(property.beds - 3), max: property.beds + 2}), 1);
  return property;
};

var test = buildProperty();
console.log(test);
