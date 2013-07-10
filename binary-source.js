var bops = require('bops');

module.exports = binarySource;

function binarySource(buffer, chunkSize) {

  var start = 0, length = buffer.length;

  return {
    read: binaryRead,
    abort: binaryAbort
  };

  function binaryRead(callback) {
    if (start >= length) return callback();
    var end = Math.min(length, start + chunkSize);
    var chunk = bops.subarray(buffer, start, end);
    start = end;
    callback(null, chunk);
  }

  function binaryAbort(callback) {
    start = length;
    callback();
  }

}