(function ($) {
	var Tank = function () {
		var Tank = {
			angle: 45,
			initialize: function () {
				return this;
			},
			toCannonUp: function () {
				this.angle++;
				console.info(this.angle);
			},
			toCannonDown: function () {
				this.angle--;
				console.info(this.angle);
			},
			shoot: function (velocity) {
				new Ball().launch(this.angle, velocity);
			}
		}
		return Tank.initialize();
	};
	this.Tank = Tank;
}).apply(this, [$]);