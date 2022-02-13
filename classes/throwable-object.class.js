class ThrowableObject extends MovableObject {
      

        IMAGES = [
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        ];
    
    constructor(x, y) {
       
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = 100;
        this.y = 100;
        this.height = 60;
        this.width = 40;
        this.throw();
    }
    
    
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        },25);


      /*  if(this.world.keyboard.D) {
            this.throw();
          
            } */

    }




}