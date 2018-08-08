const BASE_URL = 'http://localhost:3100';

const buildHeaders = (token = false) => {
  const headers = new Headers();
  headers.append('Content-type', 'application/json');
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  return headers;
};

const paramsToString = params => {
  let paramString = '';
  if (params.constructor === Object && Object.keys(params).length) {
    const tmp = [];
    Object.keys(params).forEach(key => {
      let paramStr = params[key];
      if (paramStr !== '') {
        if (typeof params[key] === 'string') {
          paramStr = `"${paramStr}"`;
        }
        tmp.push(`${key}:${paramStr}`);
      }
    });
    if (tmp.length) {
      paramString = `(${tmp.join()})`;
    }
  }
  return paramString;
};

const getGraphQlData = (resourse, params, fields, token = false) => {
  const query = `{${resourse} ${paramsToString(params)} ${fields}}`;
  return fetch(BASE_URL, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({ query }),
  }).then(res => res.json());
};

export default getGraphQlData;
