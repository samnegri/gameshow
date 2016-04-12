var Gunbound = {};

var	ball = $('.bolinha'),
	angle = 0;
	force = 0;

Gunbound.startBall = function() {
	Gunbound.ball.css('bottom','0px');
	Gunbound.ball.css('left','0px');
};

Gunbound.setAngle = function(angleP) {
	angle = angleP;
};

Gunbound.setForce = function(forceP) {
	force = forceP;
};

Gunbound.shoot = function() {
	var calcX = function() {
		
	};
	setInterval(function() {
		
	}, 16.6);
};