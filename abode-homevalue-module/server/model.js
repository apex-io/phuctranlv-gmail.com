const { db } = require('./db');

const model = {};

model.getExampleAddressesData = (query, callback) => {
  let queryString;
  let addressToSearch;
  if (query.address === 'initial query') {
    queryString = 'SELECT * FROM addresses WHERE id = ?';
    addressToSearch = 1;
  } else {
    queryString = 'SELECT * FROM addresses WHERE address = ?';
    addressToSearch = [query.address];
  }
  const randomizeZipcode = Math.random() * 100000; // do this so the result is more spread out rather then clustered in one area
  const zipCodeToSearch = [randomizeZipcode, randomizeZipcode];
  db.query(queryString, addressToSearch, (errorFromAddressesQuery, address) => {
    if (errorFromAddressesQuery) {
      console.log('There has been an error querying the database. The error is:', errorFromAddressesQuery);
      callback(errorFromAddressesQuery, null);
    } else {
      console.log('The result from address query is:', address);
      if (query.address === 'initial query') {
        addressToSearch = JSON.parse(JSON.stringify(address))[0].address;
      }
      const queryString = 'SELECT * FROM estimated_value_history WHERE address = ?';
      db.query(queryString, addressToSearch, (errorFromHomeValueQuery, homeValue) => {
        if (errorFromHomeValueQuery) {
          console.log('There has been an error querying the addresses from the database. The error is:', errorFromHomeValueQuery);
          callback(errorFromHomeValueQuery, null);
        } else {
          const queryString = 'SELECT * FROM addresses WHERE zipcode < (? + 500) && zipcode > (? - 500)';
          db.query(queryString, zipCodeToSearch, (errorFromZipCodeQuery, addresses) => {
            const returnData = {
              addressSummary: address[0],
              addressValues: homeValue,
              similarAddresses: addresses,
            };
            callback(null, returnData);
          });
        }
      });
    }
  });
};

module.exports = {
  model,
};
