// import platform from '../img/platform.png';


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//responsive canvas based on window size
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// global variables. 
const gravity = 0.5
const floor = 0 //50 // pixel from the bottom player stops at
const jump = 15 // amount player should jump
const playerMovement = 10 //  amount player moves left and right
let scrollOffset = 0
let time = 1
let animateRunning = false
// -------- IMAGE VARIABLES --------
const platformImage = new Image()   // image = platform image
platformImage.src = './img/platform.png'

const tallPlatform = new Image()   // image = platform image
tallPlatform.src = './img/platformSmallTall.png'

const hillImage = new Image()   // Hill Image
hillImage.src = './img/hills.png'

const backgroundImage = new Image()   // Hill Image
backgroundImage.src = './img/background.png'

const cloudImage = new Image()   // Cloud Image
cloudImage.src = './img/cloud.png'
// -------- IMAGE VARIABLES --------

class Player {
    constructor() { //  passing in x & y positions
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

        if (this.position.y + this.height + this.velocity.y <= canvas.height + this.height) //Player can fall below bottom of screen. //- floor)  // if the BOTTOM of our player + it's velocity is LESS than the BOTTOM of the canvas keep adding gravity. 
            this.velocity.y += gravity // velocity += gravity (0.5) repeat over and over.
            // PLAYER CAN NOW FALL FOREVER.. FOREVER.. FOREVER..
           // else this.velocity.y = 0 // else set velocity to 0. (If player position + player height is greater or equal to canvas height)
    } 
} // End of player Sprite

// classes are a blueprint for creating objects that share the same properties and methods.
class Platform {    // ------ Platform Class used for ground and all platforms. ------
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }
        this.image = image
        this.width = image.width  //200
        this.height = image.height //20
    }
    draw() {   
        // platform's rectangle
        // c.fillStyle = 'blue'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
            this.image,  
            this.position.x, 
            this.position.y ) 
    }
}
class Hill {    // ------ Hill Class used for Hills ------
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }
        this.image = image
        this.width = image.width  //200
        this.height = image.height //20
    }
    draw() {   
        c.drawImage(
            this.image,  
            this.position.x, 
            this.position.y ) 
    }
}
class Background {    // ---- Background Class used for Background Image ------
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }
        this.image = image
        this.width = image.width  //200
        this.height = image.height //20
    }
    draw() {   
        c.drawImage(this.image,  
            this.position.x, 
            this.position.y ) 
    }
}
class Cloud {    // ---- Background Class used for Cloud Image ------
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }
        this.image = image
        this.width = image.width  //200
        this.height = image.height //20
    }
    draw() {   
        c.drawImage(this.image,  
            this.position.x, 
            this.position.y ) 
    }
}
// function createImage(imageSrc) { // Send image filepath/source as argument. Ex: (./img/platform.png')
//     const image = new Image()   // image = platform image
//     image.src = imageSrc        // then set the new const image source to the argument passed. Ex: (./img/platform.png')
//     return image
// }; 
// const testBullshit = createImage(platformImage)
// -------- ELEMENT VARIABLES --------
let player = new Player() //  calling the "Player" class
// const platform = new Platform() //  calling the "Platform" class
let platforms = []     // Array of Platforms
    // new Platform({x: 0, y: canvas.height - 75, image: platformImage}), // Ground 1
    // new Platform({x: platformImage.width - 1, y: canvas.height - 75, image: platformImage}), // Ground 2
    // new Platform({x: (platformImage.width * 2) - 2, y: canvas.height - 75, image: platformImage}), // Ground 3
    // new Platform({x: (platformImage.width * 3) + 100, y: canvas.height - 75, image: platformImage}), // Ground 4
    // new Platform({x: (platformImage.width * 4) + 99, y: canvas.height - 75, image: platformImage}), // Ground 5
    // new Platform({x: 300, y: 300, image: platformImage}), // Platform 1
    // new Platform({x: 800, y: 200, image: platformImage})]; // Platform 2
let hills = []  //new Hill({x: 20, y: 200, image: hillImage})];   // Array of Hills
let backgrounds = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let clouds = [] //new Cloud({x: 20, y: 50, image: cloudImage}), new Cloud({x: 600, y: 150, image: cloudImage}), new Cloud({x: 1000, y: 0, image: cloudImage})];  
// -------- ELEMENT VARIABLES --------

// ---- Key pressed variables ----
let keys = {      // access using keys.left.pressed, or keys.right.pressed etc. Default = false.
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

function init() {
// -------- ELEMENT VARIABLES --------
    player = new Player() //  calling the "Player" class
    // const platform = new Platform() //  calling the "Platform" class 
    platforms = [     // Array of Platforms
        new Platform({x: 0, y: canvas.height - 75, image: platformImage}), // Ground 1
        new Platform({x: platformImage.width - 1, y: canvas.height - 75, image: platformImage}), // Ground 2
        new Platform({x: (platformImage.width * 2) - 2, y: canvas.height - 75, image: platformImage}), // Ground 3
        new Platform({x: (platformImage.width * 3) + 100, y: canvas.height - 75, image: platformImage}), // Ground 4
        new Platform({x: (platformImage.width * 4) + 99, y: canvas.height - 75, image: platformImage}), // Ground 5
        new Platform({x: 300, y: 300, image: platformImage}), // Platform 1
        new Platform({x: 800, y: 200, image: platformImage}), // Platform 2
        new Platform({x: platformImage.width * 6, y: canvas.height - 300, image: platformImage}), // Platform 3
        new Platform({x: platformImage.width * 4.5, y: canvas.height - (tallPlatform.height + 75), image: tallPlatform})]; // Platform 4, Winning Podium

    hills = [new Hill({x: 20, y: 200, image: hillImage})];   // Array of Hills
    backgrounds = [new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
    clouds = [new Cloud({x: 20, y: 50, image: cloudImage}), new Cloud({x: 600, y: 150, image: cloudImage}), new Cloud({x: 1000, y: 0, image: cloudImage})];  
    // -------- ELEMENT VARIABLES --------
}

function animate() { // ------ MAIN ANIMATION FUNCTION ------
    animateRunning = true // variable to check if animate function is running
    requestAnimationFrame(animate)
    
    // c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = 'grey'
    c.fillRect(0, 0, canvas.width, canvas.height)

    backgrounds.forEach(background => { // loop through array of Backgrounds
        background.draw() // ------ DRAW BACKGROUND
    })
    clouds.forEach(cloud => { // loop through array of clouds
        cloud.position.x += (0.2 * time)
        cloud.draw() // ------ DRAW CLOUDS
    })
    hills.forEach(hill => { // loop through array of Hills
        hill.draw()     // ------ DRAW HILL
    }) 
    platforms.forEach(platform => { // loop through array of Platforms
        platform.draw() // ------ DRAW PLATFORM
    })

    player.update() // ------ PLAYER UPDATE. Call this last, to render in front

    // ---- PLAYER MOVEMENT ----
    if (keys.left.pressed == true && keys.right.pressed == true ) {
        player.velocity.x = 0
        console.log('both')
    } else if (keys.right.pressed && player.position.x < 400) {  // allow player to move right unless at 400px
        player.velocity.x = playerMovement
        console.log('right');
    } else if (keys.left.pressed && player.position.x > 100) {  // allow player to move left unless at 100px
        player.velocity.x = -playerMovement 
        console.log('left');
    } else {
        player.velocity.x = 0
        console.log('none');

        // ---- PLATFORM SCROLL ----
        if (keys.right.pressed) { // if right key is pressed, move platform to the left by playMovement
            scrollOffset +=playerMovement // record how much platforms are offsetting
            platforms.forEach(platform => { // loop through array of platforms
                // platform.draw() // ------ PLATFORM INITIAL DRAW 
                platform.position.x -= playerMovement
            });
            hills.forEach(hill => { // ---- HILL SCROLL ----
                hill.position.x -= (playerMovement/3)
            });
            backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
                background.position.x -= (playerMovement/8)
            });
        } else if(keys.left.pressed) {  // if left key is pressed, move platform to the right by playMovement
            scrollOffset -=playerMovement // record how much platforms are offsetting
            platforms.forEach(platform => { // loop through array of platforms
                // platform.draw() // ------ PLATFORM INITIAL DRAW 
                platform.position.x += playerMovement
            });
            hills.forEach(hill => { // // ---- HILL SCROLL ----
                hill.position.x += (playerMovement/3)
            });
            backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
                background.position.x += (playerMovement/8)
            });
        }
        // console.log('scrollOffset:', scrollOffset); // -------- check how much scroll is currently offsetting

    }
    
    // ---- PLATFORM COLLISION DETECTION ----
    platforms.forEach(platform => { 
        if (//player bottom is HIGHER than platform top
            player.position.y + player.height <= platform.position.y  &&
            // player bottom overlap with platform top side. (Player lands on platform)
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            //  // players left side overlap with platform right side
            player.position.x <= platform.position.x + platform.width &&
            //  // players right side overlap with platform left side
            player.position.x + player.width >= platform.position.x 
            ) {player.velocity.y = 0 
        }
    })
    // ---- WIN SCROLL ----
    // if (scrollOffset > 1500) {
    if (scrollOffset > platformImage.width * 6) {
        console.log('You WIN!!!');
        // console.log('You WIN!!!', scrollOffset, '>', platformImage.width * 6); // Confirm winning area location it correct
    }
    // ---- LOOSE SCROLL ----
    if (player.position.y > (canvas.height) ){
        console.log('Player fell off. You LOOSE!!');
        init();
    }
}

init();
animate()

// ---- LISTEN FOR A KEY PRESSED ----
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

// ---- LISTEN FOR A KEY UNPRESSED ---- 
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
            // ---- KEYUP JUMP - Don't really need any key up stuff for jump.
        // case 87:        // W
        //     console.log('KEYUP - Jump/up/W');
        //     // player.velocity.y += - jump // subtract jump level
        //     break
        // case 32:        // Space
        //     console.log('KEYUP - Jump/up/Space');
        //     // player.velocity.y += - jump // subtract jump level
        //     break
    }
    console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed);
})

// function keysPressed() { // console log if key(s) are pressed
//     console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed);
//     console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
// }

function test() {
    if (animateRunning) { console.log('animate function running: ' + animateRunning);  }
    console.log('Index.js is Connected');
    console.log('canvas W: ' + canvas.width, 'canvas H: ' + canvas.height ); // check Canvas W & H
    console.log('Window W: ' + window.innerWidth, 'Window H: ' + window.innerHeight ); // check Window W & H
}
test()

