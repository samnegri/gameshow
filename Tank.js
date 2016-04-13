(function ($) {
	var Tank = function () {
		var Tank = {
			angle: 45,
			initialize: function () {
				return this;
			},
			shoot: function (velocity) {
				new Ball().launch(this.angle, velocity);
			}
		}
		return Tank.initialize();
	};
	this.Tank = Tank;
}).apply(this, [$]);