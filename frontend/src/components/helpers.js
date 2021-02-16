function getQueryString(url, params) {
  return url + params.map((key) => key[0] + '=' + key[1]).join('&');
}

function getParams(state) {
    return Object.entries(state).filter((param) => Boolean(param[1]) !== false);
}

export { getQueryString, getParams };
