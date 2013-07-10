var each = require('./each.js');

module.exports = consume;

function consume(stream) {
  var items = [], callback;

  return function (cb) {
    callback = cb;
    each(stream, onItem)(onDone);
  };

  function onItem(item) {
    items.push(item);
  }

  function onDone(err) {
    callback(err, items);
  }

}