const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../back/server');
const Team = require('../back/db/models').Team;

describe('Team tests', () => {
  
  var team = [
    {name: 'C4Q3.1'},
    {name: 'C4Q3.2'},
    {name: 'C4Q3.3'}
  ];

  it(`team test, should pass`, () => {
    expect(3).equal(3);
  });

  it(`'/api/team' should respond with all teams`, (done) => {
    supertest(server)
      .get('/api/team')
      .end((err, res) => {
        expect(res.body.length).eql(3);
        expect(res.body[0].name).equal(team[0].name);
        expect(res.body[1].name).equal(team[1].name);
        expect(res.body[2].name).equal(team[2].name);
        done(); 
      })
  });

  it(`'/api/team/C4Q3.1' should respond with one team`, (done) => {
    supertest(server)
      .get('/api/team/C4Q3.1')
      .end((err, res) => {
        
        expect(res.body.name).equal(team[0].name);
        done(); 
      })
  });
})


