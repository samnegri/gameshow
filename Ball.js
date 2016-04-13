(function ($) {

	var deltaT = 16.6;
	var gravity = 10;
	var Ball = function () {
		var ball = {
			spriteImg: function () {
				var image = new Image();
				image.src = 'images/sprites/bomb.png';
				return image;
			}(),
			spriteX: 0,
			spriteY: 0,
			spriteWidth: 30,
			spriteHeight: 79,
			x: 1,
			y: 0,
			width: 30,
			height: 79,
			numberOfFrames: 1,
			initialize: function () {
				return $.extend(new AnimatedObject(), this);
			},
			launch: function (angle, velocity) {
				var velocityX = velocity * cos(angle);
				var velocityY = velocity * sin(angle);
				var initialX = this.x;
				var initialY = this.y;
				var timepast = 0;
				var shouldGoUp = true;
				var maxY = (velocityY * velocityY) / (2 * gravity);
				var initialAngle = angle + 90;
				var maxDifference = (initialAngle - 90) * 2;

				var flyingTime = Math.sqrt(maxY * 2 / gravity) * 2;
				var totalX = flyingTime * velocityX;
				var calcX = function () {
					return initialX + velocityX * timepast;
				};
				var calcY = function () {
					return initialY + velocityY * timepast - gravity * timepast * timepast / 2;
				};
				var calcAngle = function () {
					console.info((this.x * maxDifference / totalX));
					return 270 - (((this.x * maxDifference / totalX) + initialAngle));
				};

				var ball = this;
				var launchInterval = setInterval(function () {
					ball.x = calcX();
					ball.y = calcY();
					timepast += deltaT / 100;
					if (ball.y < 0) {
						clearInterval(launchInterval);
					}
					console.info(calcAngle.apply(ball));
					ball.angle = toRadians(calcAngle.apply(ball));
				}, deltaT);
			}
		};
		return ball.initialize();
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