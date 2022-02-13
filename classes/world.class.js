class World {

    character = new Character();

    level = level1;
    


canvas;  // * global angelegt da es nur in einer funktion ist
ctx;
keyboard;
camera_x = 0;
statusBar = new StatusBar();
throwableObjects = [];

constructor(canvas, keyboard){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas //canvas wird in die globale Variable hinzugefügt *this.canvas
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
}


setWorld() {
    this.character.world = this;
}

run() {
    setInterval(() => {
        this.checkCollisions();
        this.checkThrowObjects();
    }, 200);
}

checkThrowObjects() {
    if(this.keyboard.D) {
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
        this.throwableObjects.push(bottle);
    }
}

checkCollisions() {
    setInterval (() => {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {
                this.character.hit();
                console.log(this.character.energy);
                this.statusBar.setPercentage(this.character.energy); // enenegy Level deducted
            }
        });
    }, 200);
}






    draw() {

        this.ctx.clearRect(0, 0, this.canvas.with, this.canvas.height); 
        this.ctx.translate(this.camera_x, 0); //moving from camera, move 100px left draw the objects, pain
        
        
        
        //löschen vom canvis clear

       //* this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        
       /* this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height); 
        }); */

       /* this.enemies.forEach(enemie => {
            this.addToMap(enemie)
        }); */


      /*  this.clouds.forEach(cloud => {
        this.addToMap(cloud)
        });

        this.backgroundObjects.forEach(background => {
        this.addToMap(background)
        });
        */
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0); //back camera
        // Space for fixed obkects
        this.addToMap(this.statusBar);
       
        this.ctx.translate(this.camera_x, 0); //forwards camera
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        //move objects backS
    
        let self = this;  //muss gemacht werden damit die requestAF funktioniert
        requestAnimationFrame(function () {   // wird angezeigt wie oft die Grafikkarte zuläst, draw wird immer wieder aufgerufen
            self.draw();
        });
        this.ctx.translate(-this.camera_x, 0);

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {

        if(mo.otherDirection) { //if Object have other direction
       this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

    


        if (mo.otherDirection) { // if the kontekt changed turn back changes
            this.flipImageBack(mo);
        
        }
    }

    flipImage(mo) {
        this.ctx.save();  // save curent status
        this.ctx.translate(mo.width, 0); //how the pictures inserted
        this.ctx.scale(-1, 1); //turn around on the y axis(mirrored)
        mo.x = mo.x * -1;

    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

  

}