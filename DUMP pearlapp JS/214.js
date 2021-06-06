var module6 = require('./6'),
  module58 = require('./58'),
  module215 = require('./215'),
  module225 = require('./225'),
  c = module58.default.isTesting ? module215 : module225;

module.exports = module6.default(
  {
    get FlatList() {
      return require('./245');
    },

    get Image() {
      return require('./267');
    },

    get ScrollView() {
      return require('./272');
    },

    get SectionList() {
      return require('./273');
    },

    get Text() {
      return require('./276');
    },

    get View() {
      return require('./277');
    },
  },
  c
);
