module.exports = arraySource;

function arraySource(array) {

  return {
    read: arrayRead,
    abort: arrayAbort
  };

  function arrayRead(callback) {
    callback(array.shift());
  }

  function arrayAbort(callback) {
    array.length = 0;
    callback();
  }

}