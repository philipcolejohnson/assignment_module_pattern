var GAME = GAME || {};

GAME.whack = (function(view) {
  var _holes, _mole;
  var _score = 0;

  var init = function() {
    _holes = new Array(8);

    _mole = new Mole();
    view.init();
  };

  var Mole = function() {
    this.molePos = Math.floor(Math.random()*9)
  };

  var getMole = function () {
    return _mole;
  };

  var changeMole = function () {
    _mole = new Mole();
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
