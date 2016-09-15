var calcModule = (function() {
  var stub = {};

  var _memo;

  stub.getMemo = function () {
      return _memo;
  };

  stub.setMemo = function (newMemo) {
    _memo = newMemo;
    return _memo;
  };

  var _taunt = "You couldn't do that yourself, I'll bet!";

  var _showTaunt = function () {
    var shouldTaunt = Math.floor(Math.random() * 2);
    if (shouldTaunt) {
      console.log(_taunt);
    }
  };

  stub.add = function(x, y) {
    _memo = x + y;
    _showTaunt();
    return(_memo);
  };

  return stub;


})();


// Can't see private variables because they're not in the scope of the returned object.
console.log(calcModule);

console.log(calcModule.add(1,2));
console.log(calcModule.getMemo());
memo = calcModule.getMemo();
memo++;
// getMemo() only returns a copy. State is encapsulated.
console.log(calcModule.getMemo());
