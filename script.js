var calcModule = (function() {
  var _taunt = "You couldn't do that yourself, I'll bet!";

  var _getTaunt = function () {
    var shouldTaunt = Math.floor(Math.random() * 2);

    return !!shouldTaunt;
  };

  var add = function(x, y) {
    return(x + y);
  };

  return {
    add: add
  };
  

})();