var GAME = GAME || {};

GAME.whack = (function(view) {
  var _holes, _molePos;

  var init = function() {
    _holes = new Array(8);
    _molePos = 0;
    view.init();
  };

  var getMole = function () {
    return _molePos;
  };

  var getHoles = function () {
    return _holes;
  };

  return {
    init: init,
    getMole: getMole,
    getHoles: getHoles
  };

})(GAME.view);
