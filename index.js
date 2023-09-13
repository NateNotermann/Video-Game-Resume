console.log('Index.js');

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.5
const floor = 0 //50 // pixel from th bottom player stops at
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
             x: 0,
             y: 1 // positive values move down
        }

        this.width = 30
        this.height = 30
    }

    draw() { // draw a rectangle that matches the size and position of the Player Sprite
        c.fillStyle = 'red' 
        c.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y // add/increase velocity(aka gravity) 

        if (this.position.y + this.height + this.velocity.y <= canvas.height - floor)  // if the BOTTOM of our player + it's velocity is LESS than the BOTTOM of the canvas keep adding gravity. 
            this.velocity.y += gravity // velocity += gravity (0.5) repeat over and over.
            else this.velocity.y = 0 // else set velocity to 0. (If player position + player height is greater or equal to canvas height)
    } 

} // End of player Sprite


const player = new Player() //  calling the "Player" class


function animate() {
    requestAnimationFrame(animate)
    console.log('animate function');
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}
animate()

addEventListener('keydown', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    switch (keyCode) {
        case 65:        // 'A'
            console.log('left/A');
            break;
        case 68:        // D
            console.log('right/D');
            break
        case 87:        // W
            console.log('up/W');
            break
        case 32:        // Space
            console.log('Jump/Space');
            break
    }




})


function test() {
    console.log('canvas W: ' + canvas.width, 'canvas H: ' + canvas.height ); // check Canvas W & H
    console.log('Window W: ' + window.innerWidth, 'Window H: ' + window.innerHeight ); // check Window W & H

}
test()