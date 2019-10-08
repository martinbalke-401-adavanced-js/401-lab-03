'use strict';
module.exports = exports = {};

const fs = require('fs');

const faker = require('faker');
const util = require('util');
const helpers = require('./helpers');




const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

let dataToCompare;

/**
 * readAndWrite takes in a filepath and uses promisified versions of fs.writeFile and fs.readFile
 * to read a files content, parse it, and overwrite some of its properties. This version of the function uses promises
 * @param {string} filePath - the path to the file you would like to read and rewrite
 */
exports.readAndWrite = (filePath) => {
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
};



