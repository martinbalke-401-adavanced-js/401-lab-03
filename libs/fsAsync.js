'use strict';
module.exports = exports = {};

const fs = require('fs');
const faker = require('faker');
const util = require('util');
const helpers = require('./helpers');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);


/**
 * readAndWrite takes in a filepath and uses promisified versions of fs.writeFile and fs.readFile
 * to read a files content, parse it, and overwrite some of its properties. This version of the function uses Async/Await
 * @param {string} filePath - the path to the file you would like to read and rewrite
 */
exports.readAndWrite = async function readAndWrite(filePath) {
  let data = await read(filePath);
  data = JSON.parse(data);
  let dataToCompare = JSON.stringify(data);
  data.firstName = faker.name.firstName();
  data = JSON.stringify(data);
  await write(filePath, data);
  data = await read(filePath);
  data = helpers.stringify(data);
  helpers.verifyDataChange(dataToCompare, data);
};

