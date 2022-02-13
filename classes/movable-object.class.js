class MovableObject extends drawableObject {
   
    
   
    speed = 0.15;
    otherDirection = false; 
    speedY = 0;
    acceleration = 2.5; //fall speed of Pepe
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if ( this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY; //fall down because - 
            this.speedY -= this.acceleration; // speed fall down
            }
        },1000 / 25)
    }

    isAboveGround() { //if Pepe on
        if(this instanceof ThrowableObject)  { //throwableOject should alwalys fall
            return true;
        }else{     
        return this.y < 150;
    }
    }
    isOnGround () {
        return this.y = 50;
    }





    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5;

        if(this.energy < 0){
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); //last Timepoint 
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {

        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 1;

    }


    /**
     * 
     * @param {Array} arr - ['img/image1.png..]
     */

  
    moveRight() {

        if (this.world.keyboard.RIGHT & this.x < this.world.level.level_end_x) {
            this.x += this.speed;
           this.otherDirection = false; //picture not mirrored
           this.walking_sound.play();
        }
    } 

    moveLeft() {

        this.x -= this.speed;
    }

    playAnimation(images) {
    // this.x += this.speed;
    let i = this.currentImage % images.length; //modulo = let i = 7 % 6; => 1, Rest 1
    //i = 0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0......
    let path = images[i]; //currentImage = erstes mal
    this.img = this.imageCache[path];   // 
    this.currentImage++;

}

  
}