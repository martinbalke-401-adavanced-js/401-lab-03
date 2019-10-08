'use strict';

const fs = require('fs');
const faker = require('faker');
const helpers = require('./helpers');

module.exports = exports = {};

let dataToCompare;

/**
 * read takes in a file and callback and uses that callback to preform fs.readFile asynchronously
 * @param {string} file - the file you would like to read
 * @param {function} callback
 */
const read = (file, callback) => {
  fs.readFile(file, (error, data) => {
    !error ? data = JSON.parse(data) : callback(error);
    dataToCompare = JSON.stringify(data);
    data.firstName = faker.name.firstName();
    callback(error, data);
  });
};
/**
 * write takes in a filepath , file, and callback and uses that callback to preform fs.writeFile asynchronously
 * @param {string} filepath - the path to the file you would like to write
 * @param {string} file - the file contents you would like to write on to the filepath
 * @param {function} callback
 */
const write = (filepath, file, callback) => {
  fs.writeFile(filepath, file, (error) => {
    !error ? callback(): callback(error);
  });
};

/**
 * readAndWrite takes in a filepath and uses callback versions of fs.writeFile and fs.readFile
 * to read a files content, parse it, and overwrite some of its properties. This version of the function uses Callbacks
 * @param {string} filePath - the path to the file you would like to read and rewrite
 */
exports.readAndWrite = (filePath) => {
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
};




