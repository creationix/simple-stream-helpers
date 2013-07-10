var eachSlow = require('./each-slow.js');

module.exports = consumeSlow;

function consumeSlow(stream, ms) {
  return function (callback) {
    var items = [];
    eachSlow(stream, ms, function (item) {
      items.push(item);
    })(function (err) {
      callback(err, items);
    });
  };
}