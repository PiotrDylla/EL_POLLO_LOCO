class Chick extends MovableObject {

    height = 50;
    width = 35;
    y = 390;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    constructor() {
        super().loadImage( 'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        
        this.x = 200 + Math.random() * 500; //random Zahl zwischen 0 und 1 , Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.25; //alle Hühner laufen in unteschiedlichen Tempo
        this.animate();
    }

    animate() {
        this.moveLeft();
     

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING); 
    },200);
    }

}
//