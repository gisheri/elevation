function getQueryString(url, params) {
  return (
    url +
    params
      .map((key) => {
        return key[0] + '=' + key[1].replace('_', '%20');
      })
      .join('&')
  );
}

function getParams(state) {
  return Object.entries(state).filter((param) => !!param[1]);
}

export { getQueryString, getParams };
