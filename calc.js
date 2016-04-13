$('.launch').click(function () {
	var a = new Ball();
	a.angle = $('.angle').val();
	a.velocity = $('.velocity').val();
	console.info('angle: ', a.angle, '   velocity: ', a.velocity);
	a.launch();
});


setInterval(function () {
	var a = new Ball();
	a.angle = Math.floor(Math.random() * 90);
	a.velocity = Math.floor(Math.random() * 150);
	console.info('angle: ', a.angle, '   velocity: ', a.velocity);
	a.launch();
}, 0);