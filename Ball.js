(function ($) {

	var deltaT = 16.6;
	var gravity = 10;
	var Ball = function () {
		var ball = {
			container: $('.bolinha'),
			x: 0,
			y: 0,
			setPosition: function (x, y) {
				this.x = x;
				this.y = y;
				this.updatePosition();
			},
			updatePosition: function () {
				this.container.css('bottom', this.y + 'px');
				this.container.css('left', this.x + 'px');
			},
			clearBall: function () {
				this.container.remove();
			},
			launch: function (angle, velocity) {
				var velocityX = velocity * cos(angle);
				var velocityY = velocity * sin(angle);
				var initialX = this.x;
				var initialY = this.y;
				var timepast = 0;
				var shouldGoUp = true;
				var maxY = (velocityY * velocityY) / (2 * gravity);
				var calcX = function () {
					return initialX + velocityX * timepast;
				};
				var calcY = function () {
					return initialY + velocityY * timepast - gravity * timepast * timepast / 2;
				};

				var ball = this;
				var launchInterval = setInterval(function () {
					var newX = calcX.apply(ball),
						newY = calcY.apply(ball);
					ball.setPosition(newX, newY);
					timepast += deltaT / 100;

					if (ball.y < 0) {
						ball.clearBall();
						clearInterval(launchInterval);
					}
				}, deltaT);
			}
		};

		var id = Math.floor(Math.random() * 10000000);
		ball.container = $('<div class="bolinha" id="' + id + '"></div>');
		$('body').append(ball.container);
		ball.setPosition(0, 0);

		return ball;

	};

	function sin(angle) {
		return Math.sin(toRadians(angle));
	};

	function cos(angle) {
		return Math.cos(toRadians(angle));
	};

	function toRadians(angle) {
		return angle * (Math.PI / 180);
	};
	this.Ball = Ball;
}).apply(this, [$]);