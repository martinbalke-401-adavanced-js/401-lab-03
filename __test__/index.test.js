'use strict';





jest.mock('fs');

const async = require('../libs/fsAsync');
const promise = require('../libs/fsPromise');
const callback = require('../libs/fsCallback');

describe('Mock fs bad file tests', () => {


  test('Async write and read fail when callback is given bad param', async () => {
    let data = await async.readAndWrite('bad.json');
    expect(data).toBe('Invalid File');
    data = await async.readAndWrite('thing.json');
    expect(data).toBe('File save was not successful');
  });


  test('Promise read fails when callback is given bad param', () => {
    return promise.readAndWrite('bad.json').then(data => {
      expect(data).toBe('Invalid File');
    });
  });
  test('Promise write fails when callback is given bad param', () => {
    return promise.readAndWrite('thing.json').then(data => {
      expect(data).toBe('File save was not successful');
    });
  });
  

  test('Callback write and read fail when callback is given bad param', (done) => {
    let cb1 = (data) => {
      expect(data).toBe('Invalid File');
      done();
    };
    
    cb1(callback.readAndWrite('bad.json'));
    let cb2 = (data) => {
      expect(data).toBe('File save was not successful');
      done();
    };
    cb2(callback.readAndWrite('bad.json'));
  });
});

describe('Mock fs good file tests', () => {
  test('Async write and read succeed when callback is given good param', async () => {
    let data = await async.readAndWrite('good.json');
    expect(data).toBe('File save successful');
  });

  test('Promise read succeeds when callback is given good param', () => {
    return promise.readAndWrite('good.json').then(data => {
      expect(data).toBe('File save successful');
    });
  });

  test('Callback write and read fail when callback is given good param', (done) => {
    let cb = (data) => {
      expect(data).toBe('File save successful');
      done();
    };
    cb(callback.readAndWrite('good.json'));
  });
});