// import platform from '../img/platform.png';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
canvas.width =  1920  //visualViewport.width - 10
canvas.height = 1080  //visualViewport.height - 10

let canvasHeight = canvas.height
let canvasWidth = canvas.width
let windowInnerHeight = window.innerHeight  
let windowInnerWidth = window.innerWidth

// ---- window.onload fixed the rendering issues ----
window.onload = function () {
    // initial canvas dimensions options 1
    canvasHeight = canvas.height
    canvasWidth = canvas.width
    
    // initial canvas dimensions options 2
    windowInnerHeight = window.innerHeight  
    windowInnerWidth = window.innerWidth
    init();
  };
// - Trying to "RESIZE" Canvas live causes child elements size issues. Makes them not relative to canvas.
// canvas.width = windowInnerWidth //window.innerWidth    // canvas.width 1920
// canvas.height = windowInnerHeight //  aspectRatio  //window.innerHeight  // canvas.height 687

function tests() {
    console.log('CanvasHeight:', canvasHeight );
    console.log('windowInnerHeight:', windowInnerHeight);
    console.log('canvasWidth:', canvasWidth);
    console.log('windowInnerWidth:', windowInnerWidth);
}
tests();

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
let groundPosition = 125 //canvas.height - platformHeight
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
backgroundImage.src = './img/background.jpg'

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

const MCTC = new Image()   // spriteStandRight Image - Dimensions
MCTC.src = './img/MCTC LONG.png'


const CBRE = new Image()   // spriteStandRight Image - Dimensions
CBRE.src = './img/CBRE LONG.png'
// -------- IMAGE VARIABLES -------- //

// -------- GAMEPAD VARIABLES -------- //
let controllerIndex = null;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let bluePressed = false;
let yellowPressed = false;
let redPressed = false;
let greenPressed = false;

let connected = false
let animateLoop = false
// -------- GAMEPAD VARIABLES -------- //


// -------- ELEMENT VARIABLES --------
let player = new Player() //  calling the "Player" class
player.draw()
player.update()
let platformTwo = new PlatformTwo()// version 2 of platforms
let platformTwos
let platforms = []     // Array of Platforms
let hills = []  //new Hill({x: 20, y: 200, image: hillImage})];   // Array of Hills
let backgrounds = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let clouds = [] //new Cloud({x: 20, y: 50, image: cloudImage}), new Cloud({x: 600, y: 150, image: cloudImage}), new Cloud({x: 1000, y: 0, image: cloudImage})];  
let building1 = []
let building2 = []
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
// platformTwo = new PlatformTwo()
platformTwos = [platformTwo, platformTwo]
// const platform = new Platform() //  calling the "Platform" class 
// hills = [new Hill({x: 20, y: canvas.height - 592, image: hillImage})];   // Array of Hills
backgrounds = [new Background({x:0, y: canvas.height - backgroundImage.height, image: backgroundImage})] // Array of Backgrounds
platforms = [     // Array of Platforms. ------------- Platform Dimensions: 580 × 125 -------------
    new Platform({x: platformWidth * 7, y: canvas.height - (tallPlatform.height + 75), image: tallPlatform}), // Platform 4, Winning Podium

    new Platform({x: 0, y: canvas.height - platformHeight, image: platformImage}), // Ground 1
    new Platform({x: platformWidth, y: canvas.height - groundPosition, image: platformImage}), // Ground 2
    new Platform({x: (platformWidth * 2), y: canvas.height - groundPosition, image: platformImage}), // Ground 3
    new Platform({x: (platformWidth* 3) + 100, y: canvas.height - groundPosition, image: platformImage}), // Ground 4
    new Platform({x: (platformWidth * 4) + 99, y: canvas.height - groundPosition, image: platformImage}), // Ground 5
    new Platform({x: platformWidth* 6, y: canvas.height - 300, image: platformImage}), // Platform 3
];

building1 = [ new Building2(800, canvas.height - MCTC.height - platformHeight, 250, 422, MCTC)] // MCTC
building2 = [ new Building(2500, canvas.height - CBRE.height - platformHeight, 250, 422, CBRE)] // CBRE
// building3 = [ new Building(1200, canvas.height - COYOTE.height - platformHeight, 250, 422, COYOTE)] // COYOTE
// building4 = [ new Building(1200, canvas.height - HGA.height - platformHeight, 250, 422, HGA)] // HGA

new Platform({x: 300, y: 300, image: platformImage}), // Platform 1 (Floating)d
new Platform({x: 800, y: 200, image: platformImage}), // Platform 2 (Floating)

clouds = [new Cloud({x: 20, y: 50, image: cloudImage}), new Cloud({x: 600, y: 150, image: cloudImage}), new Cloud({x: 1000, y: 0, image: cloudImage})];  
}
// -------- ELEMENT VARIABLES -------- //


// ------ frame/refresh rate limiting code: variables: start ------ //
let fps = 60;
let now;
let then = Date.now();
let interval = 1000/fps;
let delta;
// ------ frame/refresh rate limiting code: variables: end ------ //

// ------ MAIN ANIMATION FUNCTION ------ //
function animate() { 
    // requestAnimationFrame(animate) 
    // window.requestAnimationFrame(animate)
        // ------ frame/refresh rate limiting code: start ------ //
        now = Date.now();
        delta = now - then;
        if (delta > interval) {   // ------------------ BRACKET START HERE --------------------------
            then = now - (delta % interval);
        // ------ frame/refresh rate limiting code: open bracket ------ //


    animateRunning = true // variable to check if animate function is running
    // requestAnimationFrame(animate)
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    // c.fillStyle = 'blue'
    // c.fillRect(0, 0, canvas.width, canvas.height)

    backgrounds.forEach(background => { // loop through array of Backgrounds
        background.draw() // ------ DRAW BACKGROUND
    })
    clouds.forEach(cloud => { // loop through array of clouds
        cloud.position.x += (0.2 * time)
        cloud.draw() // ------ DRAW CLOUDS
    })
    building1.forEach(building => { // loop through array of building1
        building.draw()     // ------ DRAW building1
        building.update()
    }) 
    building2.forEach(building => { // loop through array of building2
        building.draw()     // ------ DRAW building2
        building.update()
    }) 
    hills.forEach(hill => { // loop through array of Hills
        hill.draw()     // ------ DRAW HILL
    }) 
    platforms.forEach(platform => { // loop through array of Platforms
        platform.draw() // ------ DRAW PLATFORM
    })
    platformTwos.forEach(plate => {
        plate.draw()
    })

    player.update() // ------ PLAYER UPDATE. Call this last, to render in front
    // ------------ PLAYER MOVEMENT ------------
    // ------ LEFT & RIGHT ------
    if (keys.left.pressed == true && keys.right.pressed == true ) { // if BOTH Left & Right pressed
        player.velocity.x = 0       
        console.log('both L/R Pressed')
        // If BOTH L&R pressed, don't move, but do pick a L/R standing sprite
        if (lastKey === 'right') {
            player.currentSprite = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
        } else if (lastKey === 'left') {
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
        }
    // ------ RIGHT ------
    } else if ((keys.right.pressed && player.position.x < 400) || (rightPressed && player.position.x < 400)) {  // allow player to move right unless at 400px
        player.velocity.x = playerMovement
        console.log('right');
        // player.frames = 1 // restart any animation back to frame 1.
        player.currentSprite = player.sprites.run.right // set it to run right
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    // ------ LEFT ------
    } else if (((keys.left.pressed && player.position.x > 100) // if left pressed, and player.X > 100, 
        || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) // if left pressed, AND ScrollOffset is at 0, BUT player not at left wall yet
        || ((leftPressed && player.position.x > 100) // if CONTROLLER left pressed, and not touching left wall
        || (leftPressed && scrollOffset === 0 && player.position.x > 0) )) {  // if CONTROLLER left pressed, AND ScrollOffset is at 0, BUT player not at left wall yet
        player.velocity.x = -playerMovement 
        console.log('left');
            // player.frames = 1 // restart any animation back to frame 1.
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width

    // ------------ IF VELOCITY IS 0, then.. ------------
    } else { // If player is NOT moving left/right then..
        player.velocity.x = 0
        // console.log('velocity = O');
            // player.frames = 1 // restart any animation back to frame 1.
            // if (!keys.right.pressed) {
            //     player.currentSprite = player.sprites.stand.right
            //     player.currentCropWidth = player.sprites.stand.cropWidth
            //     player.width = player.sprites.stand.width
            // }
            // if (lastKey === 'right' && !keys.right.pressed || lastKey === 'right' && !keys.left.pressed ) { // if last pressed = right AND  R/L are NOT pressed then..
            //     player.currentSprite = player.sprites.stand.right
            //     player.currentCropWidth = player.sprites.stand.cropWidth
            //     player.width = player.sprites.stand.width
            // } else if (lastKey === 'left' && (!keys.right.pressed && !keys.left.pressed)) { // if last pressed = left AND  R/L are NOT pressed then..
            //     player.currentSprite = player.sprites.stand.left
            //     player.currentCropWidth = player.sprites.stand.cropWidth
            //     player.width = player.sprites.stand.width
            // }
    // ------ PLAYER MOVEMENT END ------

    // ------ IF VELOCITY IS STILL 0, AND  L/R PRESSED ------ 
        // ------------ PLATFORM SCROLL LEFT/RIGHT ------------
        if (keys.right.pressed || rightPressed) { // if right key is pressed, move platform to the left by playMovement
            scrollOffset +=playerMovement // record how much platforms are offsetting
            platformTwo.position.x -= playerMovement
            platforms.forEach(platform => { // loop through array of platforms
                // platform.draw() // ------ PLATFORM INITIAL DRAW 
                platform.position.x -= playerMovement
            });
            building1.forEach(building => { // ---- HILL SCROLL ----
                building.position.x -= (playerMovement)
            });
            building2.forEach(building => { // ---- HILL SCROLL ----
                building.position.x -= (playerMovement)
            });
            hills.forEach(hill => { // ---- HILL SCROLL ----
                hill.position.x -= (playerMovement/3)
            });
            backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
                background.position.x -= (playerMovement/8)
            });
            console.log('move = 0, but SCROLLING----R----');
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
        } else if((keys.left.pressed && player.position.x > 0) || ( leftPressed && player.position.x > 0)) {  // if left key pressed & player.X GREATER than 0, move platform to the right by playMovement
            scrollOffset -=playerMovement // record how much platforms are offsetting
            platformTwo.position.x += playerMovement
            platforms.forEach(platform => { // loop through array of platforms
                // platform.draw() // ------ PLATFORM INITIAL DRAW 
                platform.position.x += playerMovement
            });
            building1.forEach(building => { // ---- Building SCROLL ----
                building.position.x += (playerMovement)
            });
            building2.forEach(building => { // ---- Building SCROLL ----
                building.position.x += (playerMovement)
            });
            hills.forEach(hill => { // // ---- HILL SCROLL ----
                hill.position.x += (playerMovement/3)
            });
            backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
                background.position.x += (playerMovement/8)
            });
            console.log('move = 0, but SCROLLING----L----');
        } else {
                if (lastKey === 'right') { // if last pressed = right AND  R/L are NOT pressed then..
                player.currentSprite = player.sprites.stand.right
                player.currentCropWidth = player.sprites.stand.cropWidth
                player.width = player.sprites.stand.width
            } else {
                player.currentSprite = player.sprites.stand.left
                player.currentCropWidth = player.sprites.stand.cropWidth
                player.width = player.sprites.stand.width
            }
        }
        // console.log('scrollOffset:', scrollOffset); // -------- check how much scroll is currently offsetting
    }  // ------ frame/refresh rate limiting code: closing bracket ------ //
    }
    
    // ------ PLATFORM SCROLL UP/DOWN ------
    // if (keys.jump.pressed && player.position.y < 400) { // if JUMP key is pressed, move platforms to the Down by JUMP level
    //     scrollOffsetUp += jump // record how much platforms are offsetting UP
    //     platformTwo.position.y += jump
    //     platforms.forEach(platform => {
    //         platform.position.y += jump
    //     })
    //     console.log('scrollOffsetUp', scrollOffsetUp );
    // } else if (player.position.y > (canvas.height - 300) && scrollOffsetUp > 0 ) {
        
    //     scrollOffsetUp -= jump
    //     platformTwo.position.y -= jump
    //     platforms.forEach(platform => {
    //         platform.position.y -=jump
    //     })
    // }
    // console.log('scrollOffsetUp', scrollOffsetUp, 'player.y', player.position.y, );


    
    // ------ PLATFORM COLLISION DETECTION ------
    platforms.forEach(platform => { 
        if (//player bottom is LESS than platform top
            player.position.y + player.height <= platform.position.y
            // player bottom overlap with platform top side. (Player lands on platform)
            && player.position.y + player.height + player.velocity.y >= platform.position.y
            //  // players left side overlap with platform right side
            && player.position.x <= platform.position.x + platform.width 
            //  // players right side overlap with platform left side
            && player.position.x + player.width >= platform.position.x 
            ) 
            {player.velocity.y = 0 
        }
    })

    
        if (//player bottom is HIGHER than platform top
            player.position.y + player.height <= platformTwo.position.y
            // player bottom overlap with platform top side. (Player lands on platform)
            && player.position.y + player.height + player.velocity.y >= platformTwo.position.y
            //  // players left side overlap with platform right side
            && player.position.x <= platformTwo.position.x + platformTwo.width 
            //  // players right side overlap with platform left side
            && player.position.x + player.width >= platformTwo.position.x 
            ) 
            {player.velocity.y = 0 
        }

    // ------ SPRITE SWITCHING ------ Moved this to the player movement section
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
        init(); // Restarts Game
    }
    // if (player.position.y < 50 ){
    //     console.log('false start!!');
    //     init();
    // }
    controllerInput()
    checkButtonPressed()
    requestAnimationFrame(animate) 
}

init() // Restarts Game
animate()

// ---- LISTEN FOR A KEY PRESSED ----
addEventListener('keydown', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    // console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    switch (keyCode) {
        case 68:        // D
            // console.log('right/D');
            keys.right.pressed = true
            lastKey = 'right'
            break
            case 65:        // 'A'
            // console.log('left/A');
            keys.left.pressed = true
            lastKey = 'left'
            break
        case 87:        // W
            // console.log('Jump/W');
            player.velocity.y += - jump // subtract jump level
            keys.jump.pressed = true
            break
        case 32:        // Space
            // console.log('Jump/Space');
            player.velocity.y += - jump // subtract jump level
            keys.jump.pressed = true
            break
    }
    // console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed, 'jump pressed:', keys.jump.pressed);
})

// ---- LISTEN FOR A KEY UNPRESSED ---- 
addEventListener('keyup', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    // console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    switch (keyCode) {
        case 68:        // D
            // console.log('right/D');
            keys.right.pressed = false
            // lastKey = 'right'
            break
        case 65:        // 'A'
            // console.log('left/A');
            keys.left.pressed = false
            // lastKey = 'left'
            break
            // ---- KEYUP JUMP - Don't really need any key up stuff for jump.
        case 87:        // W
            // console.log('KEYUP - Jump/up/W');
            keys.jump.pressed = false
            // player.velocity.y += - jump // subtract jump level
            break
        case 32:        // Space
            // console.log('KEYUP - Jump/up/Space');
            keys.jump.pressed = false
            // player.velocity.y += - jump // subtract jump leveld
            break
    }
    // console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed, 'jump pressed:', keys.jump.pressed);
})

// function keysPressed() { // console log if key(s) are pressed
//     console.log('right/D pressed:', keys.right.pressed, 'left/A pressed:', keys.left.pressed);
//     console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
// }



window.addEventListener('gamepadconnected', (event) => {    // gamepad Connected event listener. Must press button first.
    connected = true
    controllerIndex = event.gamepad.index;
    checkPlayerAttributes();
})

window.addEventListener('gamepaddisconnected', (event) => {    // gamepad Disconnected event listener
    connected = false
    controllerIndex = event.gamepad.index;
})


const connectedControllers = [];

function checkPlayerAttributes (){
    console.log('gamepad Connected Status: ', connected);
    if (animateLoop) { console.log('animateLoop running');}
}

function updateConnectedControllers() {
    const gamepadsArray = navigator.getGamepads();
    // console.log('gamepadsArray', gamepadsArray);
    //clear array before updating
    connectedControllers.length = 0;

    for (let i = 0; i < gamepadsArray.length; i++) {
        const gamepad = gamepadsArray[i];
        if (gamepad !== null) {
            connectedControllers.push({
                index: gamepad.index, 
                id: gamepad.id
            });
            console.log('connectedControllers', connectedControllers);
        }
    }
}

updateConnectedControllers();


// -------- BASIC CONTROLLER LEFT/RIGHT INPUT TEMPLATE FUNCTION -------- NOT X/Y/B/A or Green/red/yellow/blue //
function controllerInput() {
    if(controllerIndex !== null) {
        const gamepad = navigator.getGamepads()[controllerIndex]
        const buttons = gamepad.buttons;
        upPressed = buttons[12].pressed;
        downPressed = buttons[13].pressed;
        leftPressed = buttons[14].pressed;
        rightPressed = buttons[15].pressed;

        const stickDeadZone = 0.4;              // change to 0.8 to only allow movement in one direction at a time.
        const leftRightValue = gamepad.axes[0];
        const upDownValue = gamepad.axes[1];

        if(leftRightValue >= stickDeadZone) {   // if gamepad left/right axes is >= than deadZone, move right
            rightPressed = true;
        } 
        else if (leftRightValue <= -stickDeadZone) {    // if gamepad left/right axes is <= than deadZone, move left
            leftPressed = true;
        }

        if(upDownValue >= stickDeadZone) { // if gamepad up/down axes is >= than deadZone, move up
            downPressed = true;
        } 
        else if (upDownValue <= -stickDeadZone) { // if gamepad up/down axes is <= than deadZone, move down
            upPressed = true;
        }
        greenPressed = buttons[0].pressed;
        redPressed = buttons[1].pressed;
        bluePressed = buttons[2].pressed;
        yellowPressed = buttons[3].pressed;

    }
};

function checkButtonPressed() {   // ---- DIFFERENT than Let & Right. BUTTONS Only --> green[0], red[1], blue[2], yellow[3]
    if (controllerIndex !== null ){

        const gamepad = navigator.getGamepads()[controllerIndex]
        const buttons = gamepad.buttons;

        if(buttons[0].pressed) {        // [0]
            player.velocity.y = -jump   // subtract jump level
            console.log('GREEN');
        } 
        if(buttons[1].pressed) {        // [1]
            console.log('RED');      
        } 
        if(buttons[2].pressed) {        // [2]
            // player1.attack()
            console.log('BLUE');      
        } 
        if(buttons[3].pressed) {        // [3]
            console.log('YELLOW');   
        }
    }
}


function test() {
    // if (animateRunning) { console.log('animate function running: ' + animateRunning);  }
    // console.log('Index.js is Connected');
    // console.log('canvas W: ' + canvas.width, 'canvas H: ' + canvas.height ); // check Canvas W & H
    // console.log('Window W: ' + window.innerWidth, 'Window H: ' + window.innerHeight ); // check Window W & H
    // console.log('gamepad Connected Status: ', connected);
    console.log('scrolloffset', scrollOffset);
}
test()