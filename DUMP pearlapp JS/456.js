var o = ['tabBar'];

exports.default = function (n, c) {
  var f = Object.keys(n).find(function (n) {
    return o.includes(n);
  });
  if ('function' == typeof n.title)
    throw new Error(
      [
        '`title` cannot be defined as a function in navigation options for `'.concat(c.routeName, '` screen. \n'),
        'Try replacing the following:',
        '{',
        '    title: ({ state }) => state...',
        '}',
        '',
        'with:',
        '({ navigation }) => ({',
        '    title: navigation.state...',
        '})',
      ].join('\n')
    );
  if (f && 'function' == typeof n[f])
    throw new Error(
      [
        '`'.concat(f, '` cannot be defined as a function in navigation options for `').concat(c.routeName, '` screen. \n'),
        'Try replacing the following:',
        '{',
        '    '.concat(f, ': ({ state }) => ({'),
        '         key: state...',
        '    })',
        '}',
        '',
        'with:',
        '({ navigation }) => ({',
        '    '.concat(f, 'Key: navigation.state...'),
        '})',
      ].join('\n')
    );
  if (f && 'object' == typeof n[f])
    throw new Error(
      [
        'Invalid key `'.concat(f, '` defined in navigation options for `').concat(c.routeName, '` screen.'),
        '\n',
        'Try replacing the following navigation options:',
        '{',
        '    '.concat(f, ': {'),
      ]
        .concat(
          module34.default(
            Object.keys(n[f]).map(function (n) {
              return '        '.concat(n, ': ...,');
            })
          ),
          ['    },', '}', '\n', 'with:', '{'],
          module34.default(
            Object.keys(n[f]).map(function (n) {
              return '    '.concat(f + n[0].toUpperCase() + n.slice(1), ': ...,');
            })
          ),
          ['}']
        )
        .join('\n')
    );
};
