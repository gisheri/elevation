const {
  filterCampus,
  filterDemographic,
  filterGroupType,
  filterMeetingDate,
  filterZipCode,
} = require('../src/routes/helpers');
const { assert, expect } = require('chai');
const { groups } = require('./testdata');

context('Given the query params are valid', () => {
  context('If given a campus in the query params', () => {
    it('returns all groups matching query string', () => {
      const result = filterCampus(groups, 'asheville');
      expect(result[0]).to.eql(groups[0]);
    });
  });
  context('If given a demographic in the query params', () => {
    it('returns all groups matching query string', () => {
      const result = filterDemographic(groups, 'men');
      expect(result[0]).to.eql(groups[0]);
    });
  });
  context('If given a group_type in the query params', () => {
    it('returns all groups matching query string', () => {
      const result = filterGroupType(groups, 'marriage');
      expect(result[0]).to.eql(groups[0]);
    });
  });
  context('If given a meeting_date in the query params', () => {
    it('returns all groups matching query string', () => {
      const result = filterMeetingDate(groups, '2020-11-02T19:16:57.985Z');
      expect(result).to.have.length(2);
    });
  });
  context('If given a zip_code in the query params', () => {
    it('returns all groups matching query string', () => {
      const result = filterZipCode(groups, 28105);
      expect(result).to.have.length(2);
    });
  });
});
