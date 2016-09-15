var interfaceModule = (function (dependency) {
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

})(calcModule);

console.log([interfaceModule.getMemo().toString()," from interfaceModule"].join(''));
interfaceModule.subtract(2,1);
console.log([interfaceModule.getMemo().toString()," from interfaceModule", " after subtracting"].join(''));
