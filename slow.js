module.exports = slow;

function slow(stream, ms) {

  return { read: read, abort: stream.abort };

  function read(callback) {
    setTimeout(function () {
      stream.read(callback);
    }, ms);
  }

}