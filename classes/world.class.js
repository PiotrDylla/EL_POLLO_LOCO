class World {

    character = new Character();

    level = level1;
    


canvas;  // * global angelegt da es nur in einer funktion ist
ctx;
keyboard;
camera_x = 0;

constructor(canvas, keyboard){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas //canvas wird in die globale Variable hinzugefügt *this.canvas
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
}


setWorld() {
    this.character.world = this;
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
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

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
            this.ctx.save();  // save curent status
            this.ctx.translate(mo.width, 0); //how the pictures inserted
            this.ctx.scale(-1, 1); //turn around on the y axis(mirrored)
            mo.x = mo.x * -1;
        }
       this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); //insered mirrored

        if (mo.otherDirection) { // if the kontekt changed turn back changes
       
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

}