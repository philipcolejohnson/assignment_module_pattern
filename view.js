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
    if (_showToggle) {
      _timeout = setTimeout(_moleHidden,200);
    } else {
      _timeout = setTimeout(_moleAppears,200);
    }
    _render();
  };

  var _moleAppears = function() {
    _render();
    $('div.mole').on('click', _clickHandler);
    _alternateShow();
  };

  var _moleHidden = function() {
    _alternateShow();
  };

  var _clickHandler = function(ev) {
    clearTimeout(_timeout);
    _alternateShow();
  };

// show(queue) --> alter(queue)
// --> show fires --> alter fires -->
// hide(queue) --> clicks (showToggle is false)(clear timeout, showToggle)

  var _render = function() {
    $container = $('div.container');
    $container.empty();
    GAME.whack.getHoles().forEach(function(hole) {
      $divHole = $("<div class='hole'></div>");
      if (hole === GAME.whack.getMole() && _showToggle) {
        $divHole.append("<div class='mole'></div>");
      }
      $container.append($divHole);
    });
  };

  return {
    init: init
  };
})($);
