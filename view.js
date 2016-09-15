var GAME = GAME || {};

GAME.view = (function($) {
  var _holes;
  var _shown;
  var _hidden;
  var _showToggle = false;
  var _timeout;

  var init = function() {
    _alternateShow();
  };

  var _alternateShow = function() {
    _showToggle = !_showToggle;
    var randomNum = Math.floor(Math.random() * 500) + 200;
    if (_showToggle) {
      _timeout = setTimeout(_moleHidden,randomNum);
    } else {
      _timeout = setTimeout(_moleAppears,randomNum*2);
    }
    _render();
  };

  var _moleAppears = function() {
    _alternateShow();
    $('div.mole').on('click', _clickHandler);
  };

  var _moleHidden = function() {
    GAME.whack.changeMole();
    _alternateShow();
  };

  var _clickHandler = function(ev) {
    clearTimeout(_timeout);
    GAME.whack.changeMole();
    GAME.whack.incrementScore();
    _render();
    _alternateShow();
  };

// show(queue) --> alter(queue)
// --> show fires --> alter fires -->
// hide(queue) --> clicks (showToggle is false)(clear timeout, showToggle)

  var _render = function() {
    $container = $('div.container');
    $container.empty();
    for (var i = 0; i < 8; i++) {
      $divHole = $("<div class='hole'></div>");
      if (i === GAME.whack.getMole() && _showToggle) {
        $divHole.append("<div class='mole'></div>");
      }
      $container.append($divHole);
    }
    $container.append(['<div class=\'score\'>','score: ',GAME.whack.getScore(),'</div>'].join(''));
  };

  return {
    init: init
  };
})($);
