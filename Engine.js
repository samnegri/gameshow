(function ($) {
	var Engine = function (canvas) {
        var canvas = canvas;
        var ctx = canvas.getContext("2d");
        var animatedObjects = [];
        
        var changeFrame = function() {
            for(var i = 0; i < animatedObjects.length; i++) {
                animatedObjects[i].changeFrame();
            }
        };
        
        var draw = function() {
            for(var i = 0; i < animatedObjects.length; i++) {
                animatedObjects[i].draw(ctx);
            }
        };
        
        var clear = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
        
        var updateState = function() {
            console.info('update');
            changeFrame();
            clear();
            draw();
        };
        
		var Engine = {

			initialize: function () {
                return this;
			},
            
            addAnimatedObject : function(animatedObject) {
                animatedObjects.push(animatedObject);
            },
            
            removeAnimatedObject : function(animatedObject) {
                var index = animatedObjects.indexOf(animatedObject);
                animatedObjects.splice(index,1);
            },
            
            start : function(interval) {
              setInterval(updateState,interval);
            },
            
            list: function() {
                return animatedObjects;
            }
            
		}
		return Engine.initialize();
	};
	this.Engine = Engine;
}).apply(this, [$]);