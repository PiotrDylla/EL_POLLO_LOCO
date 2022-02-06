let canvas;
let world;
let keyboard = new Keyboard();



function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, keyboard);

 //objekt auf canves zu malen


//ctx.drawImage(character, 20, 20, 50, 70); //charakter malen 1,2- koordinaten, 2,3-brete hohe
console.log(world.character);
}

window.addEventListener("keydown", (e) => {
    console.log(e);
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38) {
        keyboard.UP = true;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if(e.keyCode == 35) {
        keyboard.SPACE = true;
    }
});

window.addEventListener("keyup", (e) => {
    console.log(e);
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38) {
        keyboard.UP = false;
    }

    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if(e.keyCode == 35) {
        keyboard.SPACE = false;
    }
});