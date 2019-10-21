'use strict';

module.exports = exports = {};
let data = '{"firstName": "Francis"}';

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefined, new Buffer(data));
  }
};

exports.writeFile = (file, data ,cb) => {
  if (file.match(/write/i)) {
    cb('File save was not successful');
  } else {
    cb(undefined, 'File save successful');
  }
};
