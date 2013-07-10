module.exports = eachSlow;

function eachSlow(stream, ms, onItem) {
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
    if (onItem) onItem(item);
    setTimeout(start, ms);
  }
}
