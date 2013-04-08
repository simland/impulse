/**
 * @author Richard Benson
 * -Require jQuery
 * -Require underscore
 */

function raceTrack (type){
	
}


function raceCar(x,y,vX, vY, frame, tires, engine, facing){
	this.x = x || 5;
	this.y = y || 5;
	this.vX = vX || 1;
	this.vY = vY || 0;
	this.frame = frame || 5;
	this.tires = tires || 5;
	this.engine = engine || 5;
	this.facing = facing || 0; //0,90,180,270
	this.updateFacing = function(override){
		if (override) {
			this.facing = override;
		} else {
			if (Math.abs(vX) > Math.abs(vY)){
				if (vX > 0) {
					this.facing = 0;
				} else {
					this.facing = 180;
				};
			} else {
				if (vY > 0) {
					this.facing = 90;
				} else {
					this.facing = 270;
				};
			};
		};
	};
	this.extra = {};
	this.update = function(delta){
		delta = delta || 1;
		this.x += this.vX;
		this.y += this.vY;
	};
	this.render = function(ctx){
		ctx.fillStyle="#77AA77";
		ctx.fillRect(x-5,y-5,x+5,y+5)
	};
}

raceCar.prototype = {
	accelerate : function(force){
		switch (this.facing)
		{
			case 0:
				this.vX += force;
				break;
			case 90:
				this.vY += force;
				break;
			case 180:
				this.vX -= force;
				break;
			case 270:
				this.vY -= force;
				break;
		};
		return true;
	},
	brake : function(force){
		switch (this.facing)
		{
			case 0:
				this.vX -= force;
				break;
			case 90:
				this.vY -= force;
				break;
			case 180:
				this.vX += force;
				break;
			case 270:
				this.vY += force;
				break;
		};
		return true;
	},
	turnRight : function(force){
		switch (this.facing)
		{
			case 0:
				this.vY += force;
				break;
			case 90:
				this.vX -= force;
				break;
			case 180:
				this.vY -= force;
				break;
			case 270:
				this.vX += force;
				break;
		};
		return true;
	},
	turnLeft : function(force){
		switch (this.facing)
		{
			case 0:
				this.vY -= force;
				break;
			case 90:
				this.vX += force;
				break;
			case 180:
				this.vY += force;
				break;
			case 270:
				this.vX -= force;
				break;
		};
		return true;
	}
}
