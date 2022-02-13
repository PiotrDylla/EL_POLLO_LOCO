class drawableObject {
    x = 120;
    y = 280;
    img;
    imageCache = {};
    currentImage = 0;
    height = 150;
    width = 100;


    //loadImage('img/test.png)
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementByid('image') <img id="image" src>
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); //insered mirrored
    }


    drawFrame(ctx) {
        // Green rectangle
        if (this instanceof Character || this instanceof Chick || this instanceof Chicken) {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "green";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
}

    loadImages(arr) {
        arr.forEach((path) => {

        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;        //JSON 
        });
    }



}