var GAME = GAME || {};

GAME.whack = (function(view) {
  var _holes, _molePos;

  var init = function() {
    _holes = Array.new(8);
    _molePos = 0;
    view.init(_moleAppears);
  };

  var _moleAppears = function() {
    //something with mole
  };


  return {
    init: init,
  };

})(GAME.view);