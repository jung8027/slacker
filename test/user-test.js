var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var User = require('../back/db/models').User;

describe('User tests', () => {
  //fake user data that we'll use for tests
  var users = [
    {username: 'test1', password: 'pass1'},
    {username: 'test2', password: 'pass2'},
    {username: 'test3', password: 'pass3'}
  ];
  //you can use 'before' to seed your database with data before your tests
  //you only need one 'before' statement
  //theres also a 'beforeEach' method if you want a function to run before each of your tests, individually
  before(() => {
    return User.sync({force: true})
    .then(() => User.bulkCreate(users))
    .catch((err) => console.log('DB Err!', err));
  });

  it(`demo test, should pass`, () => {
    expect(3).equal(3);
  });

  //example of how to do a test to get all users route
  it(`'/users' should respond with all users`, (done) => {
    supertest(server)
      .get('/users')
      .end((err, res) => {
        expect(res.body.length).equal(3);
        expect(res.body[0].username).equal(users[0].username);
        expect(res.body[1].username).equal(users[1].username);
        expect(res.body[2].username).equal(users[2].username);
        done();
      })
  });
});

describe('new User test', () => {
  var user = {username: test1, password: 'pass'};
  
})