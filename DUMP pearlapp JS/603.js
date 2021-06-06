exports.parseJson = function (n) {
  return new Promise(function (t, o) {
    n.json()
      .then(function (o) {
        n.data = o;
        t(n);
      })
      .catch(function (t) {
        n.data = t;
        o(n);
      });
  });
};

exports.get = function (n) {
  return fetch(n, {
    method: 'GET',
    credentials: 'include',
    mode: 'no-cors',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    },
  }).then(function (n) {
    if (200 === n.status) return n;
    throw n;
  });
};
