(function($) {
    var AnimatedObject = function() {
        var animatedObject = {
            spriteImg : image,
            
            draw : function(ctx) {
                console.info(image);
                ctx.drawImage(image,0,0,53,67,0,0,53,67); 
            }
            
        }
        return animatedObject;
    };
    this.AnimatedObject = AnimatedObject;
}).apply(this,[$]);