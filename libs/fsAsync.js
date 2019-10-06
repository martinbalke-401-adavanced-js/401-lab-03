const fs = require('fs');
const path = require('path');
const faker = require('faker');
const util = require('util');
const helpers = require('./helpers');

const fileName = process.argv.slice(2)[0];
const filePath = path.join(__dirname, '../data/', fileName);



const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);


async function readAndChange() {
  let data = await read(filePath);
  data = JSON.parse(data);
  let dataToCompare = JSON.stringify(data);
  data.firstName = faker.name.firstName();
  data = JSON.stringify(data);
  await write(filePath, data);
  data = await read(filePath);
  data = helpers.stringify(data);
  helpers.verifyDataChange(dataToCompare, data);
}
readAndChange();

module.exports = exports = {};
