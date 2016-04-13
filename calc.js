$('.launch').click(function () {
	var a = new Ball();
	a.angle = $('.angle').val();
	a.velocity = $('.velocity').val();
	a.launch();
});