exports._TESTING_ONLY_normalize_keys = function () {
  n = 'id';
  t = 0;
};

exports.generateKey = function () {
  return ''.concat(n, '-').concat(t++);
};

var n = 'id-'.concat(Date.now()),
  t = 0;
