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
const platformWidth = 579 // actually 580 but leaves 1px gap if 580
const platformHeight = 125 // actually 580 but leaves 1px gap if 580
let lastKey
let playerWidth = 66
let playerHeight = 150
let groundPosition = canvas.height - platformHeight
let scrollOffset = 0
let scrollOffsetUp = 0
let time = 1
let animateRunning = false

// -------- IMAGE VARIABLES --------
const platformImage = new Image()   // image = platform image - Dimensions
platformImage.src = './img/platform.png'

const tallPlatform = new Image()   // image = platform image - Dimensions
tallPlatform.src = './img/platformSmallTall.png'

const hillImage = new Image()   // Hill Image - Dimensions
hillImage.src = './img/hills.png'

const backgroundImage = new Image()   // Hill Image - Dimensions
backgroundImage.src = './img/background.png'

const cloudImage = new Image()   // Cloud Image - Dimensions 10620 × 400
cloudImage.src = './img/cloud.png'

const spriteRunLeft = new Image()   // spriteRunLeft Image - Dimensions
spriteRunLeft.src = './img/spriteRunLeft.png'

const spriteRunRight = new Image()   // spriteRunRight Image - Dimensions
spriteRunRight.src = './img/spriteRunRight.png'

const spriteStandLeft = new Image()   // spriteStandLeft Image - Dimensions
spriteStandLeft.src = './img/spriteStandLeft.png'

const spriteStandRight = new Image()   // spriteStandRight Image - Dimensions
spriteStandRight.src = './img/spriteStandRight.png'

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
        this.width = 66 //default width
        this.height = 150 //default height

        this.image = spriteStandRight
        this.frames = 0
        this.sprites = {
            stand: {
                right: spriteStandRight,
                left: spriteStandLeft,
                cropWidth: 177,
                width: 66
            },
            run: {
                right: spriteRunRight,
                left: spriteRunLeft,
                cropWidth: 341,
                width: 127.875
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }
    draw() { 
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sprite
        // c.fillRect(this.position.x,  this.position.y, this.width, this.height)

        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            400,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height ) 
    }

    update() {
        this.frames++
        if (this.frames > 59 && 
            (this.currentSprite === this.sprites.stand.right 
            || this.currentSprite === this.sprites.stand.left)) { // loop every 28 frames. 
            this.frames = 0 
        } else if (this.frames > 29 && 
            (this.currentSprite === this.sprites.run.right 
            || this.currentSprite === this.sprites.run.left)) { // loop every 60 frames. 
            this.frames = 0 
        } 
        // else if (    this.frames > 59 && this.currentSprite === this.sprites.stand.left) {
        //     this.frames = 0 
        // } else if (this.frames > 29 && this.currentSprite === this.sprites.run.left) {
        //     this.frames = 0 
        // }
        this.draw()
        this.position.x += this.velocity.x // add/increase velocity (X axes o nly)(aka Movement) 
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
            this.position.y,
            this.width, 
            this.height ) 
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

// -------- ELEMENT VARIABLES --------
let player = new Player() //  calling the "Player" class
let platforms = []     // Array of Platforms
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
    },
    jump: {
        pressed: false
    }
}

function init() {
// -------- ELEMENT VARIABLES --------
player = new Player() //  calling the "Player" class
// const platform = new Platform() //  calling the "Platform" class 
hills = [new Hill({x: 20, y: 200, image: hillImage})];   // Array of Hills
backgrounds = [new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
platforms = [     // Array of Platforms. ------------- Platform Dimensions: 580 × 125 -------------
new Platform({x: 0, y: canvas.height - 75, image: platformImage}), // Ground 1
new Platform({x: platformWidth, y: canvas.height - 75, image: platformImage}), // Ground 2
new Platform({x: (platformWidth * 2), y: canvas.height - 75, image: platformImage}), // Ground 3
new Platform({x: (platformWidth* 3) + 100, y: canvas.height - 75, image: platformImage}), // Ground 4
new Platform({x: (platformWidth * 4) + 99, y: canvas.height - 75, image: platformImage}), // Ground 5
new Platform({x: platformWidth* 6, y: canvas.height - 300, image: platformImage}), // Platform 3
new Platform({x: platformWidth * 4.5, y: canvas.height - (tallPlatform.height + 75), image: tallPlatform})]; // Platform 4, Winning Podium

new Platform({x: 300, y: 300, image: platformImage}), // Platform 1 (Floating)
new Platform({x: 800, y: 200, image: platformImage}), // Platform 2 (Floating)

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

    // ------ PLAYER MOVEMENT ------
    if (keys.left.pressed == true && keys.right.pressed == true ) {
        player.velocity.x = 0
        console.log('both')
        if (lastKey === 'right') {
            player.currentSprite = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
        } else if (lastKey === 'left') {
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
        }
    } else if (keys.right.pressed) {// && player.position.x < 400) {  // allow player to move right unless at 400px
        player.velocity.x = playerMovement
        console.log('right');
        // player.frames = 1 // restart any animation back to frame 1.
        player.currentSprite = player.sprites.run.right // set it to run right
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    } else if ((keys.left.pressed && player.position.x > 100) 
        || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {  // allow player to move left unless at 100px
        player.velocity.x = -playerMovement 
        console.log('left');
            // player.frames = 1 // restart any animation back to frame 1.
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
    } else { // If player is NOT moving left/right, use standing sprite, based on if left/right was pressed last.
        player.velocity.x = 0
        console.log('none');
            // player.frames = 1 // restart any animation back to frame 1.
            if (lastKey === 'right') {
                player.currentSprite = player.sprites.stand.right
                player.currentCropWidth = player.sprites.stand.cropWidth
                player.width = player.sprites.stand.width
            } else if (lastKey === 'left') {
                player.currentSprite = player.sprites.stand.left
                player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            }
    // ------ PLAYER MOVEMENT ------

        // ------ PLATFORM SCROLL LEFT/RIGHT ------
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
        } else if(keys.left.pressed && player.position.x > 0) {  // if left key is pressed, move platform to the right by playMovement
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
    
    // ------ PLATFORM SCROLL UP/DOWN ------
    if (keys.jump.pressed && player.position.y < 400 ) { // if JUMP key is pressed, move platforms to the Down by JUMP level
        scrollOffsetUp +=jump // record how much platforms are offsetting UP
        platforms.forEach(platform => {
            platform.position.y +=jump
        })
    } 
    // ------ PLATFORM COLLISION DETECTION ------
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
    // ------ SPRITE SWITCHING ------ 
    // if (
    //     keys.right.pressed &&
    //     lastKey === 'right' && 
    //     player.currentSprite !== player.sprites.run.right) { // if sprite is not run right, then 
    //         // player.frames = 1 // restart any animation back to frame 1.
    //         // player.currentSprite = player.sprites.run.right // set it to run right
    //         // player.currentCropWidth = player.sprites.run.cropWidth
    //         // player.width = player.sprites.run.width
    // } else if (
    //     keys.left.pressed &&
    //     lastKey === 'left' && 
    //     player.currentSprite != player.sprites.run.left) {
    //         player.frames = 1 // restart any animation back to frame 1.
    //         player.currentSprite = player.sprites.run.left
    //         player.currentCropWidth = player.sprites.run.cropWidth
    //         player.width = player.sprites.run.width
    // }  else if (
    //     !keys.left.pressed &&
    //     lastKey === 'left' && 
    //     player.currentSprite != player.sprites.stand.left) {
    //         player.frames = 1 // restart any animation back to frame 1.
    //         player.currentSprite = player.sprites.stand.left
    //         player.currentCropWidth = player.sprites.stand.cropWidth
    //         player.width = player.sprites.stand.width
    // }  else if (
    //     !keys.right.pressed &&
    //     lastKey === 'right' && 
    //     player.currentSprite != player.sprites.stand.right) {
    //         player.frames = 1 // restart any animation back to frame 1.
    //         player.currentSprite = player.sprites.stand.right
    //         player.currentCropWidth = player.sprites.stand.cropWidth
    //         player.width = player.sprites.stand.width
    // }  else if (
    //     !keys.right.pressed &&
    //     lastKey === 'right' && 
    //     player.currentSprite != player.sprites.stand.right) {
    //         player.frames = 1 // restart any animation back to frame 1.
    //         player.currentSprite = player.sprites.stand.right
    //         player.currentCropWidth = player.sprites.stand.cropWidth
    //         player.width = player.sprites.stand.width
    // }


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
            lastKey = 'right'
            // player.currentSprite = player.sprites.run.right
            // player.currentCropWidth= player.sprites.run.cropWidth
            // player.width = player.sprites.run.width
            break
            case 65:        // 'A'
            console.log('left/A');
            keys.left.pressed = true
            lastKey = 'left'
            // player.currentSprite = player.sprites.run.left
            // player.currentCropWidth= player.sprites.run.cropWidth
            // player.width = player.sprites.run.width
            break
        case 87:        // W
            console.log('Jump/W');
            player.velocity.y += - jump // subtract jump level
            keys.jump.pressed = true
            break
        case 32:        // Space
            console.log('Jump/Space');
            player.velocity.y += - jump // subtract jump level
            keys.jump.pressed = true
            break
    }
    console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed, 'jump pressed:', keys.jump.pressed);
})

// ---- LISTEN FOR A KEY UNPRESSED ---- 
addEventListener('keyup', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    // console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    switch (keyCode) {
        case 68:        // D
            console.log('right/D');
            keys.right.pressed = false
            lastKey = 'right'
            // player.currentSprite = player.sprites.stand.right
            // player.currentCropWidth = player.sprites.stand.cropWidth 
            // player.width = player.sprites.stand.width
            // player.velocity.x = 0 // set velocity to 0
            break
        case 65:        // 'A'
            console.log('left/A');
            keys.left.pressed = false
            lastKey = 'left'
            // player.currentSprite = player.sprites.stand.left
            // player.currentCropWidth = player.sprites.stand.cropWidth 
            // player.width = player.sprites.stand.width
            // player.velocity.x = 0 // set velocity to 0
            break
            // ---- KEYUP JUMP - Don't really need any key up stuff for jump.
        case 87:        // W
            console.log('KEYUP - Jump/up/W');
            keys.jump.pressed = false
            // player.velocity.y += - jump // subtract jump level
            break
        case 32:        // Space
            console.log('KEYUP - Jump/up/Space');
            keys.jump.pressed = false
            // player.velocity.y += - jump // subtract jump level
            break
    }
    console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed, 'jump pressed:', keys.jump.pressed);
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

