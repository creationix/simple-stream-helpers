module.exports = eachSlow;

function eachSlow(stream, onItem, ms) {
  var callback;

  return function (cb) {
    callback = cb;
    setTimeout(start, ms);
  };
  
  function start() {
    stream.read(onRead);
  }
  
  function onRead(err, item) {
    if (item === undefined) return callback(err);
    onItem(item);
    setTimeout(start, ms);
  }
}
