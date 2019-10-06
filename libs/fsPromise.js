const fs = require('fs');
const path = require('path');
const faker = require('faker');
const util = require('util');
const helpers = require('./helpers');

const fileName = process.argv.slice(2)[0];
const filePath = path.join(__dirname, '../data/', fileName);



const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

let dataToCompare;

read(filePath)
  .then( (data) => {
    data = JSON.parse(data);
    dataToCompare = JSON.stringify(data);
    data.firstName = faker.name.firstName();
    data = JSON.stringify(data);
    return write(filePath, data);
  })
  .then(() => {
    return read(filePath);
  })
  .then( (data) => {
    helpers.stringify(data);
    console.log(helpers.verifyDataChange(data, dataToCompare));
  })
  .catch( (error) => {
    console.error(error);
  });


module.exports = exports = {};
