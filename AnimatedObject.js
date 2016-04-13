(function ($) {
	var AnimatedObject = function () {
		var animatedObject = {
			spriteImg: image,
            spriteX: 0,
            spriteY: 0,
            spriteWidth: 53,
            spriteHeight:67,
            x: 100,
            y: 100,
            width: 53,
            height: 67,
            

			draw: function (ctx) {
				ctx.drawImage(image, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
			},
            
            frameChange: function() {
            }

		}
		return animatedObject;
	};
	this.AnimatedObject = AnimatedObject;
}).apply(this, [$]);