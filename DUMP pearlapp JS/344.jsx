var React = require('react'),
  module60 = require('./60'),
  module197 = require('./197'),
  module88 = require('./88');

var f = module60.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.25)',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 2,
  },
  text: {
    fontSize: 6,
    color: '#ffffff',
  },
});

module.exports = function () {
  return (
    <module88 style={f.container}>
      <module197 style={f.text}>FABRIC</module197>
    </module88>
  );
};
