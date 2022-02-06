class Character extends MovableObject {
    height = 300;
    width = 100;
    speed = 10;
    y = 50; //pepe aufdem boden Plazieren 
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'

    ];

    world;
    walking_sound = new Audio('audio/running.mp3');



    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
     
        this.loadImages(this.IMAGES_WALKING);
        this.applyGravity();

        this.animate();
    }

    animate() { //Right Left run

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT & this.x < this.world.level.level_end_x) {
                this.x += this.speed;
               this.otherDirection = false; //picture not mirrored
               this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0 ) { //Pepe have a blockade
                this.x -= this.speed;
             this.otherDirection = true; //picture mirrored
             this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100; // camera move with pepe
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING)
            }
        },50);
    }
}








