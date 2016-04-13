$('.launch').click(function () {
	var a = new Ball();
	a.angle = $('.angle').val();
	a.velocity = $('.velocity').val();
	console.info('angle: ', a.angle, '   velocity: ', a.velocity);
	a.launch();
});