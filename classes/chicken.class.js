class Chicken extends MovableObject {
    
    height = 60;
    width = 70;
    y = 360; //chicker auf dem Boden Plaziern 

    IMAGES_WALKING = [
   
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'

    ];

 

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        //super nur fur metoden, Variable  zB x ohne Super

        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; //random Zahl zwischen 0 und 1 , Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.25; //alle Hühner laufen in unteschiedlichen Tempo
        
        
        if (this.x > 0) {
            this.animate();
            this.x += this.speed;
        }
        
        if (this.x < 0) {
            this.animate();
            this.x -= this.speed;
        }
     

    }

    animate() {
          setInterval(() => {  //setInteval setzt intevalle 0.15 px werden abgezogen auf 60 fps
            this.moveLeft();
        }, 60);
    

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING); 
    },200);
    }

    animateRight() {
        this.moveRight();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING); 
    },200);
    } 
    


}

