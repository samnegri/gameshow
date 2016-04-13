(function ($) {
	var Tank = function () {
		var Tank = {
			cannonAngle: 45,
			initialize: function () {
				return $.extend(new AnimatedObject(), this);
			},
			toCannonUp: function () {
				this.cannonAngle++;
			},
			toCannonDown: function () {
				this.cannonAngle--;
			},
			shoot: function (velocity) {
				new Ball().launch(this.cannonAngle, velocity);
			}
		}
		return Tank.initialize();
	};
	this.Tank = Tank;
}).apply(this, [$]);