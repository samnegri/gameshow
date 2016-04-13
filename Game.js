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
				var timeWhenPressed;
				var alreadyShooted = false;

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
						if (!alreadyShooted) {
							if (!timeWhenPressed) {
								timeWhenPressed = new Date().getTime();
							}
							var spacePower = Math.pow((new Date().getTime() - timeWhenPressed) / 250, 3);
							if (spacePower > 120) {
								spacePower = 120;
								console.info(spacePower);
								player.shoot(spacePower);
								timeWhenPressed = undefined;
								alreadyShooted = true;
							}
						}
						break;
					}
					//	e.preventDefault(); // prevent the default action (scroll / move caret)
				});

				$(document).on('keyup', function (e) {
					switch (e.which) {
					case KEYS.SPACE:
						if (!alreadyShooted) {
							var spacePower = Math.pow((new Date().getTime() - timeWhenPressed) / 250, 3);
							console.info(spacePower);
							player.shoot(spacePower);
							timeWhenPressed = undefined;
						}
						alreadyShooted = false;
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