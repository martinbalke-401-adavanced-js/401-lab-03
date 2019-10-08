'use strict';

module.exports = exports = {};

/**
 * stringify takes in JSON data parses it and returns it as a string
 * @param data - JSON data that you want to stringify 
 */
exports.stringify = (data) => {
  data = JSON.parse(data);
  return JSON.stringify(data);
};

/**
 * verifyDataChange takes in two sets of data and compares them 
 * @param {string} data 
 * @param {string} modifiedData 
 */

exports.verifyDataChange = (data, modifiedData) => {
  return data !== modifiedData ?
    console.log('The data has succesfully been changed')
    :console.log('The data is still the same');
};