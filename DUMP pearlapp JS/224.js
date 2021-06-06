require('./154');

var module6 = require('./6'),
  module7 = require('./7'),
  module18 = require('./18'),
  o = (function () {
    function o(t) {
      var s = t.onMoreTasks;
      module7(this, o);
      this._onMoreTasks = s;
      this._queueStack = [
        {
          tasks: [],
          popable: false,
        },
      ];
    }

    module8(o, [
      {
        key: 'enqueue',
        value: function (t) {
          this._getCurrentQueue().push(t);
        },
      },
      {
        key: 'enqueueTasks',
        value: function (t) {
          var u = this;
          t.forEach(function (t) {
            return u.enqueue(t);
          });
        },
      },
      {
        key: 'cancelTasks',
        value: function (u) {
          this._queueStack = this._queueStack
            .map(function (s) {
              return module6({}, s, {
                tasks: s.tasks.filter(function (t) {
                  return -1 === u.indexOf(t);
                }),
              });
            })
            .filter(function (t, u) {
              return t.tasks.length > 0 || 0 === u;
            });
        },
      },
      {
        key: 'hasTasksToProcess',
        value: function () {
          return this._getCurrentQueue().length > 0;
        },
      },
      {
        key: 'processNext',
        value: function () {
          var t = this._getCurrentQueue();

          if (t.length) {
            var u = t.shift();

            try {
              if (u.gen) this._genPromise(u);
              else if (u.run) u.run();
              else {
                module18('function' == typeof u, 'Expected Function, SimpleTask, or PromiseTask, but got:\n' + JSON.stringify(u, null, 2));
                u();
              }
            } catch (t) {
              throw ((t.message = 'TaskQueue: Error with task ' + (u.name || '') + ': ' + t.message), t);
            }
          }
        },
      },
      {
        key: '_getCurrentQueue',
        value: function () {
          var t = this._queueStack.length - 1,
            u = this._queueStack[t];

          if (u.popable && 0 === u.tasks.length && this._queueStack.length > 1) {
            this._queueStack.pop();

            return this._getCurrentQueue();
          } else return u.tasks;
        },
      },
      {
        key: '_genPromise',
        value: function (t) {
          var u = this;

          this._queueStack.push({
            tasks: [],
            popable: false,
          });

          var s = this._queueStack.length - 1;
          t.gen()
            .then(function () {
              u._queueStack[s].popable = true;
              if (u.hasTasksToProcess()) u._onMoreTasks();
            })
            .catch(function (u) {
              throw ((u.message = 'TaskQueue: Error resolving Promise in task ' + t.name + ': ' + u.message), u);
            })
            .done();
        },
      },
    ]);
    return o;
  })();

class o {
  constructor(t) {
    var s = t.onMoreTasks;
    module7(this, o);
    this._onMoreTasks = s;
    this._queueStack = [
      {
        tasks: [],
        popable: false,
      },
    ];
  }

  enqueue(t) {
    this._getCurrentQueue().push(t);
  }

  enqueueTasks(t) {
    var u = this;
    t.forEach(function (t) {
      return u.enqueue(t);
    });
  }

  cancelTasks(u) {
    this._queueStack = this._queueStack
      .map(function (s) {
        return module6({}, s, {
          tasks: s.tasks.filter(function (t) {
            return -1 === u.indexOf(t);
          }),
        });
      })
      .filter(function (t, u) {
        return t.tasks.length > 0 || 0 === u;
      });
  }

  hasTasksToProcess() {
    return this._getCurrentQueue().length > 0;
  }

  processNext() {
    var t = this._getCurrentQueue();

    if (t.length) {
      var u = t.shift();

      try {
        if (u.gen) this._genPromise(u);
        else if (u.run) u.run();
        else {
          module18('function' == typeof u, 'Expected Function, SimpleTask, or PromiseTask, but got:\n' + JSON.stringify(u, null, 2));
          u();
        }
      } catch (t) {
        throw ((t.message = 'TaskQueue: Error with task ' + (u.name || '') + ': ' + t.message), t);
      }
    }
  }

  _getCurrentQueue() {
    var t = this._queueStack.length - 1,
      u = this._queueStack[t];

    if (u.popable && 0 === u.tasks.length && this._queueStack.length > 1) {
      this._queueStack.pop();

      return this._getCurrentQueue();
    } else return u.tasks;
  }

  _genPromise(t) {
    var u = this;

    this._queueStack.push({
      tasks: [],
      popable: false,
    });

    var s = this._queueStack.length - 1;
    t.gen()
      .then(function () {
        u._queueStack[s].popable = true;
        if (u.hasTasksToProcess()) u._onMoreTasks();
      })
      .catch(function (u) {
        throw ((u.message = 'TaskQueue: Error resolving Promise in task ' + t.name + ': ' + u.message), u);
      })
      .done();
  }
}

module.exports = o;
