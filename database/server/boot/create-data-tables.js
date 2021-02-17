const data = [
  {
    campus: 'Asheville',
    demographic: 'Men',
    group_type: 'Marriage',
    meeting_date: '2020-11-02T19:16:57.985Z',
    zip_code: 28105,
    additionalProp1: [{childcare: false}],
  },
  {
    campus: 'Ballantyne',
    demographic: 'Singles',
    group_type: 'Spiritual Growth',
    meeting_date: '2020-12-02T19:16:57.985Z',
    zip_code: 28277,
    additionalProp1: [{childcare: false}],
  },
  {
    campus: 'Blakeney',
    demographic: 'Women',
    group_type: 'Book Study',
    meeting_date: '2020-09-02T19:16:57.985Z',
    zip_code: 28276,
    additionalProp1: [{childcare: true}],
  },
  {
    campus: 'Columbia',
    demographic: 'Women',
    group_type: 'Book Study',
    meeting_date: '2020-09-02T19:16:57.985Z',
    zip_code: 28277,
    additionalProp1: [{childcare: true}],
  },
  {
    campus: 'Concord',
    demographic: 'Everyone Welcome',
    group_type: 'Parenting',
    meeting_date: '2020-11-02T19:16:57.985Z',
    zip_code: 28276,
    additionalProp1: [{childcare: true}],
  },
  {
    campus: 'Elevation Online',
    demographic: 'Everyone Welcome',
    group_type: 'Sermon Discussion',
    meeting_date: '2020-09-02T19:16:57.985Z',
    zip_code: 28105,
    additionalProp1: [{childcare: false}],
  },
  {
    campus: 'Gaston',
    demographic: 'Singles',
    group_type: 'Christian Basics',
    meeting_date: '2020-10-02T19:16:57.985Z',
    zip_code: 28275,
    additionalProp1: [{childcare: false}],
  },
];
module.exports = function(app) {
  app.dataSources.db.automigrate('Groups', function(err) {
    if (err) throw err;

    app.models.Groups.create(data, function(err, Groups) {
      if (err) throw err;

      console.log('Models created: \n', Groups);
    });
  });
};
