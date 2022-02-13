class backgroundObject extends MovableObject {
   
   
    
    width = 720; //breite vom canvis
    height = 480;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height; //480 - 400
        this.x = x;

}
}