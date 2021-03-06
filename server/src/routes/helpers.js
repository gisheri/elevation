function filterCampus(data, campus) {
  return data.filter(
    (group) => group.campus.toLowerCase() === campus.toLowerCase()
  );
}

function filterDemographic(data, demographic) {
  return (result = data.filter(
    (group) => group.demographic.toLowerCase() === demographic.toLowerCase()
  ));
}

function filterGroupType(data, type) {
  return data.filter(
    (group) => group.group_type.toLowerCase() === type.toLowerCase()
  );
}

function filterMeetingDate(data, date) {
  return data.filter(
    (group) => group.meeting_date.toLowerCase() === date.toLowerCase()
  );
}

function filterZipCode(data, zip) {
  return data.filter((group) => group.zip_code.toString().includes(zip));
}

function filterChildCare(data) {
  return data.filter((group) => group.additionalProp1[0].childcare === true);
}

module.exports = {
  filterCampus,
  filterDemographic,
  filterGroupType,
  filterMeetingDate,
  filterZipCode,
  filterChildCare,
};
