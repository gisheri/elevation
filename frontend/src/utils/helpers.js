import moment from 'moment';

function getTime(date) {
  let seconds = Date.parse(date);
  let day = moment(seconds).format('dddd');
  let time = moment(seconds).format('LT');
  return { day, time };
}

function getQueryString(url, params) {
  console.log(
    url +
      params
        .map((key) => {
          const thing1 = key[0];
          const thing2 = key[1].replace('_', '%20');
          return thing1 + '=' + thing2;
        })
        .join('&')
  );
  return (
    url +
    params
      .map((key) => {
        const thing1 = key[0];
        const thing2 = key[1].replace('_', '%20');
        return thing1 + '=' + thing2;
      })
      .join('&')
  );
}

function getParams(state) {
  return Object.entries(state).filter((param) => !!param[1]);
}

function generateGradient() {
  var hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
  ];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round(Math.random() * 360);

  var gradient =
    'linear-gradient(' + angle + 'deg, ' + newColor1 + ', ' + newColor2 + ')';

  return gradient;
}

function smartDate(option) {
  if (Boolean(Date.parse(option))) {
    return `${getTime(option).day}s at ${getTime(option).time}`;
  } else return option;
}

export { getQueryString, getParams, generateGradient, getTime, smartDate };
