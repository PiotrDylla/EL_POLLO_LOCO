class MovableObject {
    x = 120;
    y = 280;
    img;
    imageCache = {};
    height = 150;
    width = 100;
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5; //fall speed of Pepe

    applyGravity() {
        setInterval(() => {
            if ( this.isAboveGround()) {
            this.y -= this.speedY; //fall down because - 
            this.speedY -= this.acceleration; // speed fall down
            }
        },1000 / 25)
    }

    isAboveGround() { //if Pepe on
        return this.y < 150;
    }

//loadImage('img/test.png)
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementByid('image') <img id="image" src>
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png..]
     */

    loadImages(arr) {
        arr.forEach((path) => {

        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;        //JSON 
        });
    }

    moveRight() {
        setInterval(() => {  //setInteval setzt intevalle 0.15 px werden abgezogen auf 60 fps
            this.x += 0.15;
        }, 60);
    
    } 

    moveLeft() {
        setInterval(() => {  //setInteval setzt intevalle 0.15 px werden abgezogen auf 60 fps
            this.x -= 0.15;
        }, 60);
    
    
    }


    playAnimation(images) {
    // this.x += this.speed;
    let i = this.currentImage % this.IMAGES_WALKING.length; //modulo = let i = 7 % 6; => 1, Rest 1
    //i = 0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0......
    let path = images[i]; //currentImage = erstes mal
    this.img = this.imageCache[path];   // 
    this.currentImage++;

}
}