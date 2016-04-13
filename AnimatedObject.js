(function ($) {
	var AnimatedObject = function () {
		var animatedObject = {
			spriteImg: image,
            spriteX: 0,
            spriteY: 67,
            spriteWidth: 53,
            spriteHeight:67,
            x: 100,
            y: 100,
            width: 53,
            height: 67,
            frameNumber: 0,
            numberOfFrames:5 ,
            

			draw: function (ctx) {
                var bla = this.spriteWidth * (this.frameNumber % this.numberOfFrames);
                console.info(bla);
				ctx.drawImage(image, bla, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
			},
            
            frameChange: function() {
                console.info(this.frameNumber);
                this.frameNumber++;
            }

		}
		return animatedObject;
	};
	this.AnimatedObject = AnimatedObject;
}).apply(this, [$]);