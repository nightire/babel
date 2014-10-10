var range = regeneratorRuntime.mark(function range(max, step) {
  var count, i;

  return regeneratorRuntime.wrap(function range$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
    case 0:
      count = 0;
      step = step || 1;

      i = 0;
    case 3:
      if (!(i < max)) {
        context$1$0.next = 10;
        break;
      }

      count++;
      context$1$0.next = 7;
      return i;
    case 7:
      i += step;
      context$1$0.next = 3;
      break;
    case 10:
      return context$1$0.abrupt("return", count);
    case 11:
    case "end":
      return context$1$0.stop();
    }
  }, range, this);
});

var gen = range(20, 3), info;

while (!(info = gen.next()).done) {
  console.log(info.value);
}

console.log("steps taken: " + info.value);
