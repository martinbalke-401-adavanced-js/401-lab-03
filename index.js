'use strict';

const path = require('path');


const promise = require('./libs/fsPromise');
const async = require('./libs/fsAsync');
const callback = require('./libs/fsCallback');

const fileName = process.argv.slice(2)[0];
const filePath = path.join(__dirname, '/data/', fileName);


console.log(promise.readAndWrite(filePath));
console.log(async.readAndWrite(filePath));
console.log(callback.readAndWrite(filePath));
