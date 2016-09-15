var GAME = GAME || {};

GAME.whack = (function(view) {
  var _holes, _molePos;
  var _score = 0;

  var init = function() {
    _holes = new Array(8);

    _molePos = 0;
    view.init();
  };

  var getMole = function () {
    return _molePos;
  };

  var changeMole = function () {
    _molePos = Math.floor(Math.random()*9);
  };

  var getHoles = function () {
    return _holes;
  };

  var incrementScore = function () {
    _score++;
  };

  var getScore = function () {
    return _score;
  };

  return {
    init: init,
    getMole: getMole,
    getHoles: getHoles,
    changeMole: changeMole,
    incrementScore: incrementScore,
    getScore: getScore
  };

})(GAME.view);
