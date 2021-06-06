var A = function (A) {
    return '@@redux-saga/' + A;
  },
  C = A('CANCEL_PROMISE'),
  T = A('CHANNEL_END'),
  N = A('IO'),
  E = A('MATCH'),
  L = A('MULTICAST'),
  _ = A('SAGA_ACTION'),
  I = A('SELF_CANCELLATION'),
  O = A('TASK'),
  S = A('TASK_CANCEL'),
  M = A('TERMINATE'),
  t = A('LOCATION');

exports.CANCEL = C;
exports.CHANNEL_END_TYPE = T;
exports.IO = N;
exports.MATCH = E;
exports.MULTICAST = L;
exports.SAGA_ACTION = _;
exports.SAGA_LOCATION = t;
exports.SELF_CANCELLATION = I;
exports.TASK = O;
exports.TASK_CANCEL = S;
exports.TERMINATE = M;
