var Test = function () {
  function Test() {
  }
  Object.defineProperties(Test.prototype, {
    test: {
      writeable: true,
      value: function () {
        return 5 + 5;
      }
    }
  });
  return Test;
}();
