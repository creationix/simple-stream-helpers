module.exports = slow;

function slow(stream, ms) {

  if (ms === undefined) ms = 1;

  return { read: read, abort: stream.abort };

  function read(callback) {
    setTimeout(function () {
      stream.read(callback);
    }, ms);
  }

}