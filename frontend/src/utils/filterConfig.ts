export type FilterKey =
  | 'campus'
  | 'demographic'
  | 'group_type'
  | 'meeting_date'
  | 'zip_code'
  | 'child_care';

type BaseFilter = {
  title: string;
  value: FilterKey; // change this to 'key'
};

type FilterConfiguration = BaseFilter & {
  type: 'select';
  options: ReadonlyArray<{ name: string; value: string }>;
  // | {
  //     type: 'boolean';
  //   }
  // | {
  //     type: 'text';
  //   }
};

const filters: FilterConfiguration[] = [
  {
    type: 'select',
    title: 'Campus',
    value: 'campus',
    // supportsViewAll: true,
    options: [
      { name: 'Asheville', value: 'asheville' },
      { name: 'Ballantyne', value: 'ballantyne' },
      { name: 'Blakeney', value: 'blakeney' },
      { name: 'Columbia', value: 'columbia' },
      { name: 'Concord', value: 'concord' },
      { name: 'Elevation Online', value: 'elevation_online' },
      { name: 'Gaston', value: 'gaston' },
    ],
  },
  {
    type: 'select',
    title: 'Demographic',
    value: 'demographic',
    options: [
      { name: 'Men', value: 'men' },
      { name: 'Singles', value: 'singles' },
      { name: 'Women', value: 'women' },
      { name: 'Everyone Welcome', value: 'everyone_welcome' },
    ],
  },
  {
    type: 'select',
    title: 'Group Type',
    value: 'group_type',
    options: [
      { name: 'Marriage', value: 'marriage' },
      { name: 'Spiritual Growth', value: 'spiritual_growth' },
      { name: 'Book Study', value: 'book_study' },
      { name: 'Parenting', value: 'parenting' },
      { name: 'Sermon Discussion', value: 'sermon_discussion' },
      { name: 'Christian Basics', value: 'christian_basics' },
    ],
  },
  {
    type: 'select',
    title: 'Meeting Date',
    value: 'meeting_date',
    options: [
      { name: '2020-11-02T19:16:57.985Z', value: '2020-11-02T19:16:57.985Z' },
      { name: '2020-09-02T19:16:57.985Z', value: '2020-09-02T19:16:57.985Z' },
      { name: '2020-12-02T19:16:57.985Z', value: '2020-12-02T19:16:57.985Z' },
      { name: '2020-10-02T19:16:57.985Z', value: '2020-10-02T19:16:57.985Z' },
    ],
  },
];

const logo =
  'https://837856.smushcdn.com/1910478/app/uploads/2019/11/Elevation-Logo.png?lossy=0&strip=1&webp=1';

export { filters, logo };
