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
				var player = this.player;
				var spacePower = 0;
				var velocity = 0;
				var aceleration = 0.1;

				$(document).on('keydown', function (e) {
					switch (e.which) {
					case KEYS.LEFT:
						player.toLeft();
						break;
					case KEYS.RIGHT:
						player.toRight();
						break;
					case KEYS.UP:
						player.toCannonUp();
						break;
					case KEYS.DOWN:
						player.toCannonDown();
						break;
					case KEYS.SPACE:
						spacePower += velocity;
						velocity += aceleration;
						console.info(spacePower);
						break;
					}
					//e.preventDefault(); // prevent the default action (scroll / move caret)
				});

				$(document).on('keyup', function (e) {
					switch (e.which) {
					case KEYS.SPACE:
						console.info(spacePower);
						player.shoot(spacePower);
						spacePower = 0;
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