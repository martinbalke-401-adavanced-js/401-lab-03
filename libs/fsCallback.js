const fs = require('fs');
const path = require('path');
const faker = require('faker');
const helpers = require('./helpers');

const fileName = process.argv.slice(2)[0];
const filePath = path.join(__dirname, '../data/', fileName);

let dataToCompare;

const read = (file, callback) => {
  fs.readFile(file, (error, data) => {
    !error ? data = JSON.parse(data) : callback(error);
    dataToCompare = JSON.stringify(data);
    data.firstName = faker.name.firstName();
    callback(error, data);
  });
};

const write = (filepath, file, callback) => {
  fs.writeFile(filepath, file, (error) => {
    !error ? callback(): callback(error);
  });
};

try {
  read(filePath, (error, data) => {
    data = JSON.stringify(data);
    write(filePath, data, () => {
      read(filePath, (error, data) => {
        data = JSON.stringify(data);
        helpers.verifyDataChange(dataToCompare, data);
      });
    });
  });
} catch (error) {
  console.error(error);
}



module.exports = exports = {};
