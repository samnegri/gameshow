(function ($) {
	var AnimatedObject = function () {
		var animatedObject = {
			spriteImg: new Image(),
			spriteX: 0,
			spriteY: 67,
			spriteWidth: 45,
			spriteHeight: 67,
			x: 100,
			y: 100,
			width: 45,
			height: 67,
			frameNumber: 0,
			numberOfFrames: 5,
			angle: 0,

			initialize: function () {
				return this;
			},

			draw: function (ctx) {
				ctx.save();

				if (this.angle) {
					ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
					ctx.rotate(this.angle);
					ctx.drawImage(this.spriteImg, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2, -this.height / 2, this.width, this.height);
				} else {
					ctx.drawImage(this.spriteImg, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
				}

				ctx.restore();
			},

			changeFrame: function () {
				this.frameNumber++;
				this.spriteX = this.spriteWidth * (this.frameNumber % this.numberOfFrames);
			},

			changeAnimation: function (index) {
				this.spriteY = index * this.spriteHeight;
			}
		}
		return animatedObject;
	};
	this.AnimatedObject = AnimatedObject;
}).apply(this, [$]);