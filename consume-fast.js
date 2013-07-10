var eachFast = require('./each-fast.js');

module.exports = consumeFast;

function consumeFast(stream) {
  return function (callback) {
    var items = [];
    eachFast(stream, function (item) {
      items.push(item);
    })(function (err) {
      callback(err, items);
    });
  };
}