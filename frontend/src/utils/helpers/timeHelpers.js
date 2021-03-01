import moment from 'moment';

function getTime(date) {
  let seconds = Date.parse(date);
  let day = moment(seconds).format('dddd');
  let time = moment(seconds).format('LT');
  return { day, time };
}
function smartDate(option) {
  if (Boolean(Date.parse(option))) {
    return `${getTime(option).day}s at ${getTime(option).time}`;
  } else return option;
}

export { getTime, smartDate };
