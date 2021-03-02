function getQueryString(url, params) {
  let thing;
  return (
    url +
    params
      .map((key) => {
        if (key[1].toString().includes('_')) {
          thing = key[1].replace('_', '%20');
        } else thing = key[1];
        return key[0] + '=' + thing;
      })
      .join('&')
  );
}

function getParams(state) {
  return Object.entries(state).filter((param) => !!param[1]);
}

export { getQueryString, getParams };
