var calcModule = (function() {
  var memo;

  var getMemo = function () {
      return memo;
  };

  var _taunt = "You couldn't do that yourself, I'll bet!";

  var _showTaunt = function () {
    var shouldTaunt = Math.floor(Math.random() * 2);
    if (shouldTaunt) {
      console.log(_taunt);
    }
  };

  var add = function(x, y) {
    memo = x + y;
    _showTaunt();
    return(memo);
  };

  return {
    add: add,
    getMemo: getMemo
  };


})();


console.log(calcModule.add(1,2));
console.log(calcModule.getMemo());
memo = calcModule.getMemo();
memo++;
// getMemo() only returns a copy. State is encapsulated.
console.log(calcModule.getMemo());
