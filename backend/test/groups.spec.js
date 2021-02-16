const app = require('../src/app');
const supertest = require('supertest');
const test = supertest(app);

context('Groups endpoint', () => {
  context('Given there are groups in the database', () => {
    it('GET responds with 200 and all the group objects', () => {
      return test.get('/groups').expect(200);
    });
  });
  context('Given valid query string parameters', () => {
    it('Responds with the correct groups', () => {
      const correctResult = [
        {
          id: 3,
          campus: 'Blakeney',
          demographic: 'Women',
          group_type: 'Book Study',
          meeting_date: '2020-09-02T19:16:57.985Z',
          zip_code: 28276,
          additionalProp1: [
            {
              childcare: true,
            },
          ],
        },
      ];
      return test
        .get('/groups/?demographic=women&campus=Blakeney')
        .expect(200, correctResult);
    });
  });
  context('Given the /:id param is valid', () => {
    it('GET responds with 200 and the correct group', () => {
      const correctGroup = {
        id: 1,
        campus: 'Asheville',
        demographic: 'Men',
        group_type: 'Marriage',
        meeting_date: '2020-11-02T19:16:57.985Z',
        zip_code: 28105,
        additionalProp1: [
          {
            childcare: false,
          },
        ],
      };
      return test.get('/groups/1').expect(200, correctGroup);
    });
  });
  context('Given the /:id param is invalid', () => {
    it('GET responds with 200 and the correct group', () => {
      return test.get('/groups/100').expect(404, {
        message: 'The id you requested is invalid',
      });
    });
  });
});
