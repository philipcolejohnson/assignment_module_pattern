var PRACTICE = PRACTICE || {};

PRACTICE.interfaceModule = (function (dependency) {
  var stub = {};

  var _memo;

  var _storeInterfaceMemo = function (val) {
    _memo = val;
  };

  stub.subtract = function (x, y) {
    _storeInterfaceMemo(x - y);
    dependency.setMemo(_memo);
    return _memo;
  };

  stub.getMemo = function () {
    return dependency.getMemo();
  };

  return stub;

})(PRACTICE.calcModule);

PRACTICE.calcModule.setMemo(5);
console.log([PRACTICE.interfaceModule.getMemo().toString()," from interfaceModule"].join(''));
PRACTICE.interfaceModule.subtract(2,1);
console.log([PRACTICE.interfaceModule.getMemo().toString()," from interfaceModule", " after subtracting"].join(''));
