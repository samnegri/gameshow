(function ($) {
	var AnimatedObject = function () {
		var animatedObject = {
			spriteImg: image,
            spriteX: 0,
            spriteY: 67,
            spriteWidth: 45,
            spriteHeight:67,
            x: 100,
            y: 100,
            width: 45,
            height: 67,
            frameNumber: 0,
            numberOfFrames:5,
            

			draw: function (ctx) {
				ctx.drawImage(image, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
			},
            
            changeFrame: function() {
                this.frameNumber++;
                this.spriteX = this.spriteWidth * (this.frameNumber % this.numberOfFrames);
            },
            
            changeAnimation: function(index) {
                this.spriteY = index * this.spriteHeight;
            }
		}
		return animatedObject;
	};
	this.AnimatedObject = AnimatedObject;
}).apply(this, [$]);