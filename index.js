const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//responsive canvas based on window size
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// global variables. 
const gravity = 0.5
const floor = 0 //50 // pixel from th bottom player stops at
const jump = 10 // amount player should jump
const playerMovement = 10 //  amount player moves left and right
let keyPressed = ''

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
             x: 0, // positive values move right, negative values more left.
             y: 1 // positive values move down, negative values move up
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
        this.position.x += this.velocity.x // add/increase velocity (X axes only)(aka Movement) 
        this.position.y += this.velocity.y // add/increase velocity (Y axes only)(aka Gravity) 

        if (this.position.y + this.height + this.velocity.y <= canvas.height - floor)  // if the BOTTOM of our player + it's velocity is LESS than the BOTTOM of the canvas keep adding gravity. 
            this.velocity.y += gravity // velocity += gravity (0.5) repeat over and over.
            else this.velocity.y = 0 // else set velocity to 0. (If player position + player height is greater or equal to canvas height)
    } 

} // End of player Sprite


const player = new Player() //  calling the "Player" class
const keys = {      // access using keys.left.pressed, or keys.right.pressed etc. Default = false.
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate)
    console.log('animate function');  
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    if (keys.left.pressed == true && keys.right.pressed == true ) {
        player.velocity.x = 0
        console.log('both')
    } else if (keys.right.pressed) {
        player.velocity.x = 5
        console.log('right');
    } else if (keys.left.pressed) {
        player.velocity.x = -5
        console.log('left');
    } else {
        player.velocity.x = 0
        console.log('none');
    }
    

}
animate()

//Listen for a Key Pressed
addEventListener('keydown', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    // console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    switch (keyCode) {
        case 68:        // D
            console.log('right/D');
            keys.right.pressed = true
            // player.velocity.x = playerMovement // Add playerMovement
            break
        case 65:        // 'A'
            console.log('left/A');
            keys.left.pressed = true
            // player.velocity.x = -playerMovement // Subtract playerMovement
            break
        case 87:        // W
            console.log('Jump/up/W');
            player.velocity.y += - jump // subtract jump level
            break
        case 32:        // Space
            console.log('Jump/up/Space');
            player.velocity.y += - jump // subtract jump level
            break
    }
    console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed);
})

//Listen for Key UnPressed
addEventListener('keyup', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    // console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    switch (keyCode) {
        case 68:        // D
            console.log('right/D');
            keys.right.pressed = false
            // player.velocity.x = 0 // set velocity to 0
            break
        case 65:        // 'A'
            console.log('left/A');
            keys.left.pressed = false
            // player.velocity.x = 0 // set velocity to 0
            break
        case 87:        // W
            console.log('Jump/up/W');
            player.velocity.y += - jump // subtract jump level
            break
        case 32:        // Space
            console.log('Jump/up/Space');
            player.velocity.y += - jump // subtract jump level
            break
    }
    console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed);
})

// function keysPressed() { // console log if key(s) are pressed
//     console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed);
//     console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
// }

function test() {
    console.log('Index.js is Connected');
    console.log('canvas W: ' + canvas.width, 'canvas H: ' + canvas.height ); // check Canvas W & H
    console.log('Window W: ' + window.innerWidth, 'Window H: ' + window.innerHeight ); // check Window W & H
}
test()

