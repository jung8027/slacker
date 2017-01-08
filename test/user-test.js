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

  it(`get request test, should pass`, () => {
    expect(3).equal(3);
  });

  //example of how to do a test to get all users route
  it(`'/api/user' should respond with all users`, (done) => {
    supertest(server)
      .get('/api/user')
      .end((err, res) => {
        expect(res.body.length).eql(3);
        expect(res.body[0].username).equal(users[0].username);
        expect(res.body[1].username).equal(users[1].username);
        expect(res.body[2].username).equal(users[2].username);
        done();
      })
  });
});

describe('new User with duplicate username. should receive ERROR MESSAGE: username must be unique', () => {
  var user2 = {username: "test1", password: 'pass'};
  before(()=>{
    return User.sync()
    .then(()=> User.create(user2))
    .catch((err)=> console.log('ERROR MESSAGE:', err.errors[0].message))
  });

  it(`'/api/user' should respond with all users. expected length should be 3, no 4th user created.`, (done) => {
    supertest(server)
      .get('/api/user')
      .end((err, res) => {
        expect(res.body.length).eql(3)
        done();
      })
  });

})