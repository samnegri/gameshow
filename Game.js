(function ($) {
	var KEYS = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		SPACE: 32
	};
	var Game = function () {
		var Game = {
			player: new Tank(),
			initialize: function () {
				this.listemKeys();
			},
			listemKeys: function () {
				$(document).on('keydown', function (e) {
					switch (e.which) {
					case KEYS.LEFT:
						break;

					case KEYS.RIGHT:
						break;

					case KEYS.UP:
						break;

					case KEYS.DOWN:
						break;

					case KEYS.SPACE:
						break;
					}
					e.preventDefault(); // prevent the default action (scroll / move caret)
				});
			}
		}
		return Game.initialize();
	};
	this.Game = Game;
}).apply(this, [$]);