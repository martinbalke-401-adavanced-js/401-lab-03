'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefined, new Buffer('File Contents'));
  }
};

exports.writeFile = (file, cb) => {
  if (file.match(/thing/i)) {
    cb('File save was not successful');
  } else {
    cb(undefined, 'File save successful');
  }
};
