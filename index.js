'use strict';

const path = require('path');



const fileName = process.argv.slice(2)[0];
const filePath = path.join(__dirname, '/data/', fileName);


//Running the program: Please uncomment a pair below to test each modules functionality. Run npm start
//If my program is functioning correctly you will see a console.log "The data has been successfully changed"
//You can verify this by looking at person.json and the first name property

const promise = require('./libs/fsPromise');
console.log(promise.readAndWrite(filePath));



// const async = require('./libs/fsAsync');
// console.log(async.readAndWrite(filePath));


// const callback = require('./libs/fsCallback');
// console.log(callback.readAndWrite(filePath));
