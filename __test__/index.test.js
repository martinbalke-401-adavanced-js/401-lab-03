'use strict';





jest.mock('fs');

const async = require('../libs/fsAsync');
const promise = require('../libs/fsPromise');
const callback = require('../libs/fsCallback');

describe('Mock fs bad file tests', () => {


  test('Async read fails when callback is given bad param', async () => {
    try {
      await async.readAndWrite('bad.json');
    } catch (error) {
      expect(error).toBe('Invalid File');
    }
  });

  test('Async write fails when callback is given bad param', async () => {
    try {
      await async.readAndWrite('write.json');
    } catch (error) {
      expect(error).toBe('File save was not successful');
    }
  });


  test('Promise read fails when callback is given bad param', async () => {
    try {
      await promise.readAndWrite('bad.json');
    } catch (error) {
      expect(error).toBe('Invalid File');
    }
    
  });


  test('Promise write fails when callback is given bad param', async () => {
    try {
      await promise.readAndWrite('write.json');
    } catch (error) {
      expect(error).toBe('File save was not successful');
    }
  });
  

  test('Callback write and read fail when callback is given bad param', async () => {
    try {
      await callback.readAndWrite('bad.json');
    } catch (error) {
      expect(error).toBe('Invalid File');
    } 
  });
 
  test('Callback write and read fail when callback is given bad param', async () => {
    try {
      await callback.readAndWrite('write.json');
    } catch (error) {
      expect(error).toBe('File save was not successful');
    } 
  });

  test('Async Read and write works', async () => {
    let data = await async.readAndWrite('person.json');
    expect(data).toBeUndefined();
  });
});

