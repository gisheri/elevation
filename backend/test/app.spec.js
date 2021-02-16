const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 containing "Server is working"', () => {
    return supertest(app).get('/').expect(200, 'Server is working');
  });
});
