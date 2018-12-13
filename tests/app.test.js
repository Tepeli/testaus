const Promise = require('bluebird');
const request = require('supertest');
const localmongoose = require('mongoose');

localmongoose.Promise = Promise;
const app = require('../app');
const Post = require('../models/post.js');

describe('Test Mongoose database connection', () => {
  test('Test connection', (done) => {
    localmongoose.connect('mongodb://mongo:27017').then(() => {
      expect(localmongoose.connection.readyState).toBe(1);
    });
    localmongoose.disconnect();
    done(); // eslint-disable-line no-undef
  });
});

describe('Test GET all posts', () => {
  test('Test if socket is open and routers work', (done) => {
    request(app).get('/posts').set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      // Assert other desired stuff
      done();
    });
  });
  // An exercise to the reader: How to validate the JSON structure?
  // See https://www.npmjs.com/package/supertest and promises
});
