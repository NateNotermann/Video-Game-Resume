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

// global variables. 
const gravity = 2
const floor = 125 // or platformImage.height. pixel from the bottom player stops at
const jump = 35 // amount player should jump
const playerMovement = 20 //  amount player moves left and right
const platformWidth = 2500 //579 // actually 580 but leaves 1px gap if 580
const platformHeight = 125 // actually 580 but leaves 1px gap if 5 80
const playerSize = 2 // used when referencing height in player class
const buildingSize = 2
const buildingSize2 = 1.5
const backgroundWidth = 2560
const skyWidth = 2559
let playerWidth = 66
let playerHeight = 150
let groundPosition = 125 //canvas.height - platformHeight
let scrollOffset = 0
let scrollOffsetUp = 0
let time = 1
let animateRunning = false

// -- Building Glow --
let glowMCTC = false
let glowCOYOTE = false
let glowCBRE = false
let glowPRIME = false
let glowHGA = false

// -------- GAMEPAD VARIABLES -------- //
let lastKey
let controllerIndex = null;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let greenPressed0 = false;
let redPressed1 = false;
let bluePressed2 = false;
let yellowPressed3 = false;

let connected = false
let animateLoop = false
// -------- GAMEPAD VARIABLES -------- //


// -------- IMAGE VARIABLES --------
const platformImage = new Image()   
platformImage.src = './img/platform.jpg'

const platformTwoImage = new Image()   
platformTwoImage.src = './img/platformTwo.jpg'

const tallPlatform = new Image()   
tallPlatform.src = './img/platformSmallTall.png'

// -------- Background Images -------- //
const skyImage = new Image()   
skyImage.src = './img/Sky.jpg'

const backgroundImage = new Image()   
backgroundImage.src = './img/background.png'

const midgroundImage = new Image()   
midgroundImage.src = './img/midground.png'

const foregroundImage = new Image()   
foregroundImage.src = './img/foreground.png'

const cloudImage = new Image()   // Cloud Image - Dimensions 10620 × 400
cloudImage.src = './img/cloud.png'

// -------- Player Images -------- //
const spriteRunLeft = new Image()   // spriteRunLeft Image - Dimensions
spriteRunLeft.src = './img/spriteRunLeft.png'

const spriteRunRight = new Image()   // spriteRunRight Image - Dimensions
spriteRunRight.src = './img/spriteRunRight.png'

const spriteStandLeft = new Image()   // spriteStandLeft Image - Dimensions
spriteStandLeft.src = './img/spriteStandLeft.png'

const spriteStandRight = new Image()   // spriteStandRight Image - Dimensions
spriteStandRight.src = './img/spriteStandRight.png'

// -------- Building Images -------- //
const MCTC = new Image()   
MCTC.src = './img/MCTC LONG.png'

const COYOTE  = new Image()   
COYOTE .src = './img/COYOTE.png'

const CBRE = new Image()   
CBRE.src = './img/CBRE LONG.png'

const HGA = new Image()   
HGA.src = './img/HGA Long.png'

const PRIME = new Image()   
PRIME.src = './img/Prime.png'

const PrimeElements = new Image()   
PrimeElements.src = './img/PrimeFlag2.png'

const ArrowPic = new Image()   
ArrowPic.src = './img/arrow3.png'


// -------- ELEMENT VARIABLES --------
let player = new Player() //  calling the "Player" class
player.draw()
player.update()
let platformTwos = []
let platforms = []     // Array of Platforms
let sky = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let backgrounds = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let midgrounds = []    
let foregrounds = []    
let clouds = [] //new Cloud({x: 20, y: 50, image: cloudImage}), new Cloud({x: 600, y: 150, image: cloudImage}), new Cloud({x: 1000, y: 0, image: cloudImage})];  
let buildingMCTC = []
let buildingCOYOTE  = []
let buildingCBRE = []
let buildingPRIME = []
let elementsPRIME = []
let buildingHGA = []
let arrowArray = []
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

sky = [
    new Sky({x:-skyWidth, y: 0, image: skyImage}),
    new Sky({x:0, y: 0, image: skyImage}),
    new Sky({x:skyWidth, y: 0, image: skyImage}),
    new Sky({x:skyWidth*2, y: 0, image: skyImage}),
]

backgrounds = [
    new Background({x:0, y: 0, image: backgroundImage}),
    new Background({x:backgroundWidth, y: 0, image: backgroundImage}),
    new Background({x:backgroundWidth*2, y: 0, image: backgroundImage})
]

midgrounds = [ 
    new Midground({x:0 , y: 1080-650, image: midgroundImage}),
    new Midground({x:7500 , y: 1080-650, image: midgroundImage}),
    new Midground({x:7500*2 , y: 1080-650, image: midgroundImage})
]

foregrounds = [ 
    new Foreground({x:0 , y: 1080-525, image: foregroundImage}),
    new Foreground({x:4250 , y: 1080-525, image: foregroundImage}),
    new Foreground({x:4250*2 , y: 1080-525, image: foregroundImage}),
    new Foreground({x:4250*3 , y: 1080-525, image: foregroundImage}),
    new Foreground({x:4250*4 , y: 1080-525, image: foregroundImage})
]

platformTwos = [
    new PlatformTwo({x:1000 + (platformTwoImage.width), y: 1080-250, image: platformTwoImage }),
    new PlatformTwo({x:1000 + (platformTwoImage.width * 2) , y: 1080-375, image: platformTwoImage }),
    new PlatformTwo({x:1000 + (platformTwoImage.width * 3), y: 1080-500, image: platformTwoImage }),
    new PlatformTwo({x:1000 + (platformTwoImage.width * 4), y: 1080-375, image: platformTwoImage }),
    new PlatformTwo({x:1000 + (platformTwoImage.width * 5), y: 1080-250, image: platformTwoImage }),
] 

platforms = [     // Array of Platforms. ------------- Platform Dimensions: 580 × 125 -------------
    new Platform({x: -900, y: canvas.height - platformHeight, image: platformImage}), // Ground 1
    new Platform({x: platformWidth, y: canvas.height - groundPosition, image: platformImage}), // Ground 2
    new Platform({x: platformWidth * 2, y: canvas.height - groundPosition, image: platformImage}), // Ground 3
    new Platform({x: platformWidth* 3, y: canvas.height - groundPosition, image: platformImage}), // Ground 4
    new Platform({x: platformWidth * 4, y: canvas.height - groundPosition, image: platformImage}), // Ground 5
    new Platform({x: platformWidth * 5, y: canvas.height - groundPosition, image: platformImage}), // Ground 6
    new Platform({x: platformWidth* 6, y: canvas.height - 125, image: platformImage}), // Platform 7
    new Platform({x: platformWidth* 7, y: canvas.height - 125, image: platformImage}), // Platform 8
    new Platform({x: platformWidth* 8, y: canvas.height - 125, image: platformImage}), // Platform 9
    new Platform({x: platformWidth* 9, y: canvas.height - 125, image: platformImage}), // Platform 10
    new Platform({x: platformWidth* 10, y: canvas.height - 125, image: platformImage}), // Platform 11
    new Platform({x: platformWidth* 11, y: canvas.height - 125, image: platformImage}), // Platform 12
    new Platform({x: platformWidth* 12, y: canvas.height - 125, image: platformImage}), // Platform 13
    new Platform({x: platformWidth* 13, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 14, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 15, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 16, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 17, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 18, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 19, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 19.5, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 21, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 22, y: canvas.height - 125, image: platformImage}), // Platform 14
    new Platform({x: platformWidth* 23, y: canvas.height - 125, image: platformImage}), // Platform 14
];

buildingMCTC = [ new BuildingMCTC(2500, canvas.height - MCTC.height - platformHeight, 250, 422, MCTC)] // MCTC (x,y,(NOT USED --> w,h,image,))
buildingCOYOTE = [ new BuildingCOYOTE (5000, canvas.height - COYOTE.height - platformHeight, 250, 422, COYOTE)] // COYOTE
buildingCBRE = [ new BuildingCBRE(7500, canvas.height - CBRE.height - platformHeight, 250, 422, CBRE)] // CBRE (x,y,w,h,image,)
buildingPRIME = [ new BuildingPRIME(10000, canvas.height - PRIME.height - platformHeight, 500, 500, PRIME)] // HGA (x,y,w,h,image,)
elementsPRIME = [ new ElementsPRIME(10000, canvas.height - PrimeElements.height - platformHeight, 500, 500, PrimeElements)] // HGA (x,y,w,h,image,)
buildingHGA = [ new BuildingHGA(12500, canvas.height - HGA.height - platformHeight, 250, 422, HGA)] // PRIME (x,y,w,h,image,)

arrowArray = [ new ARROW(800, canvas.height - ArrowPic.height - 50, 250, 422, ArrowPic)] 
// building4 = [ new Building(1200, canvas.height - HGA.height - platformHeight, 250, 422, HGA)] // HGA

clouds = [
    // new Cloud({x: 20, y: 50, image: cloudImage}), new Cloud({x: 600, y: 150, image: cloudImage}), new Cloud({x: 1000, y: 0, image: cloudImage})
];  
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

    sky.forEach(sky => { // loop through array of Backgrounds
        sky.position.x += (0.2 * time)
        sky.draw() // ------ DRAW BACKGROUND
    })
    backgrounds.forEach(background => { // loop through array of Backgrounds
        background.draw() // ------ DRAW BACKGROUND
    })
    midgrounds.forEach(midground => { // loop through array of midgrounds
        midground.draw() // ------ DRAW BACKGROUND
    })
    foregrounds.forEach(foreground => { // loop through array of midgrounds
        foreground.draw() // ------ DRAW BACKGROUND
    })
    clouds.forEach(cloud => { // loop through array of clouds
        cloud.position.x += (0.2 * time)
        cloud.draw() // ------ DRAW CLOUDS
    })
    buildingMCTC.forEach(building => { // loop through array of buildingMCTC
        building.draw()     // ------ DRAW buildingMCTC
        building.update()
    }) 
    buildingCOYOTE.forEach(building => { // loop through array of buildingCOYOTE
        building.draw()     // ------ DRAW buildingCOYOTE
        building.update()
    }) 
    buildingCBRE.forEach(building => { // loop through array of buildingCBRE
        building.draw()     // ------ DRAW buildingCBRE
        building.update()
    }) 
    elementsPRIME.forEach(element => { // loop through array of buildingCBRE
        element.draw()     // ------ DRAW buildingCBRE
        element.update()
    }) 
    buildingPRIME.forEach(building => { // loop through array of buildingCBRE
        building.draw()     // ------ DRAW buildingCBRE
        building.update()
    }) 
    buildingHGA.forEach(building => { // loop through array of buildingCBRE
        building.draw()     // ------ DRAW buildingHGA
        building.update()
    }) 
    arrowArray.forEach(arrowArray1 => { // loop through array of Platforms
        arrowArray1.draw() // ------ DRAW PLATFORM
        arrowArray1.update()
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
        // console.log('both L/R Pressed')
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
        // console.log('right');
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
        // console.log('left');
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

            platformTwos.forEach(platformTwo => { // loop through array of platforms
                platformTwo.position.x -= playerMovement
            });
            platforms.forEach(platform => { // loop through array of platforms
                // platform.draw() // ------ PLATFORM INITIAL DRAW 
                platform.position.x -= playerMovement
            });
            buildingMCTC.forEach(building => { // ---- building SCROLL ----
                building.position.x -= (playerMovement)
            });
            buildingCOYOTE.forEach(building => { // ---- building SCROLL ----
                building.position.x -= (playerMovement)
            });
            buildingCBRE.forEach(building => { // ---- building SCROLL ----
                building.position.x -= (playerMovement)
            });
            elementsPRIME.forEach(element => { // ---- building SCROLL ----
                element.position.x -= (playerMovement)
            });
            buildingPRIME.forEach(building => { // ---- building SCROLL ----
                building.position.x -= (playerMovement)
            });
            buildingHGA.forEach(building => { // ---- building SCROLL ----
                building.position.x -= (playerMovement)
            });
            arrowArray.forEach(arrowArray => { // ---- building SCROLL ----
                arrowArray.position.x -= (playerMovement)
            });
            sky.forEach(sky => { // ---- BACKGROUND SCROLL ----
                sky.position.x -= (playerMovement/30)
            });
            backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
                background.position.x -= (playerMovement/8)
            });
            midgrounds.forEach(midground => { // ---- BACKGROUND SCROLL ----
                midground.position.x -= (playerMovement/6)
            });
            foregrounds.forEach(foreground => { // ---- BACKGROUND SCROLL ----
                foreground.position.x -= (playerMovement/2)
            });
            // console.log('move = 0, but SCROLLING----R----');
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
        } else if((keys.left.pressed && player.position.x > 0) || ( leftPressed && player.position.x > 0)) {  // if left key pressed & player.X GREATER than 0, move platform to the right by playMovement
            scrollOffset -=playerMovement // record how much platforms are offsetting
            platformTwos.forEach(platformTwo => { // loop through array of platforms
                platformTwo.position.x += playerMovement
            });
            platforms.forEach(platform => { // loop through array of platforms
                // platform.draw() // ------ PLATFORM INITIAL DRAW 
                platform.position.x += playerMovement
            });
            buildingMCTC.forEach(building => { // ---- Building SCROLL ----
                building.position.x += (playerMovement)
            });
            buildingCOYOTE.forEach(building => { // ---- Building SCROLL ----
                building.position.x += (playerMovement)
            });
            buildingCBRE.forEach(building => { // ---- Building SCROLL ----
                building.position.x += (playerMovement)
            });
            elementsPRIME.forEach(element => { // ---- Building SCROLL ----
                element.position.x += (playerMovement)
            });
            buildingPRIME.forEach(building => { // ---- Building SCROLL ----
                building.position.x += (playerMovement)
            });
            buildingHGA.forEach(building => { // ---- Building SCROLL ----
                building.position.x += (playerMovement)
            });
            arrowArray.forEach(arrowArray => { // ---- Building SCROLL ----
                arrowArray.position.x += (playerMovement)
            });
            sky.forEach(sky => { // ---- BACKGROUND SCROLL ----
                sky.position.x += (playerMovement/30)
            });
            backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
                background.position.x += (playerMovement/8)
            });
            midgrounds.forEach(midground => { // ---- BACKGROUND SCROLL ----
                midground.position.x += (playerMovement/6)
            });
            foregrounds.forEach(foreground => { // ---- BACKGROUND SCROLL ----
                foreground.position.x += (playerMovement/2)
            });
            // console.log('move = 0, but SCROLLING----L----');
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
        if (//player bottom is <= than platform top
            player.position.y + player.height <= platform.position.y
            // player bottom + player Velocity >= with platform top side. (Player lands on platform)
            && player.position.y + player.height + player.velocity.y >= platform.position.y
            //  // players left side overlap with platform right side
            && player.position.x <= platform.position.x + platform.width 
            //  // players right side overlap with platform left side
            && player.position.x + player.width >= platform.position.x 
            // // players top overlap with platform bottom (Players head is under but still colliding with platform bottom)
            && player.position.y + player.velocity.y <= platform.position.y + platform.height
            ) 
            {   
                player.velocity.y = 0   // player does not fall
                // if (
                   
                //     player.position.y + player.height <= platform.position.y //player bottom is <= than platform top
                //     && keys.right.pressed
                //     //  // players left side overlap with platform right side
                //     && player.position.x <= platform.position.x + platform.width 
                //     //  // players right side overlap with platform left side
                //     && player.position.x + player.width >= platform.position.x 
                //     ) {
                //     player.velocity.x = 0 
                //     console.log("stop1");
                // } 
        }
    })
    let leftCollision = false
    let RightCollision = false
    // ------ PLATFORMTWO COLLISION DETECTION ------
    platformTwos.forEach(platformTwo => { 
        if (//player bottom is <= than platform top
            player.position.y + player.height <= platformTwo.position.y
            // player bottom + player Velocity >= with platform top side. (Player lands on platform)
            && player.position.y + player.height + player.velocity.y >= platformTwo.position.y
            //  // players left side overlap with platform right side
            && player.position.x <= platformTwo.position.x + platformTwo.width 
            //  // players right side overlap with platform left side
            && player.position.x + player.width >= platformTwo.position.x 
            // // players top overlap with platform bottom (Players head is under but still colliding with platform bottom)
            && player.position.y + player.velocity.y <= platformTwo.position.y + platformTwo.height
            ) 
            {   
                player.velocity.y = 0   // player does not fall
        }
        // ---- SIDE COLLISION ---- //
        // if (
        //     // player.position.x < platformTwo.position.x + platformTwo.width // player left plat right
        //     // player LEFT plat right 
        //     player.position.x + player.width > platformTwo.position.x   // player right plat left 
        //     && player.position.y < platformTwo.position.y + platformTwo.height // player top UNDER plat bottom
        //     && player.position.y + player.height > platformTwo.position.y  // player bottom ABOVE plat top 
        //     && player.currentSprite != player.sprites.stand.left
        //     && player.currentSprite != player.sprites.run.left
        //     // && keys.right.pressed
        // ) {
            
        //     // if (keys.right.pressed && keys.left.pressed ) {
        //     //     player.velocity.x = 0
        //     //     console.log( "test moving out of collision");
        //     // } else if (keys.right.pressed  
        //     //     && player.position.x + player.width > platformTwo.position.x // player right > plat left 
        //     //     ) { 
        //     //     player.velocity.x = -15
        //     //     // player.position.x = player.position.x -15
        //     //     console.log("Collide Right");
        //     // } else if (keys.left.pressed 
        //     //     && player.position.x < platformTwo.position.x + platformTwo.width // player left < plat right
        //     //     ) { 

        //     //         player.velocity.x = +15
        //         // player.position.x = player.position.x +15
        //         // player.position.x = player.position.x + 15
        //         player.velocity.x = 0
        //         console.log("collide left");
        //     // }  
                
        //     }
        //     else if (// player RIGHT - plat Left 
        //         player.position.x > platformTwo.position.x + platformTwo.width  // player left - plat right 
        //         && player.position.y < platformTwo.position.y + platformTwo.height // player top UNDER plat bottom
        //         && player.position.y + player.height > platformTwo.position.y  // player bottom ABOVE plat top 
        //         && player.currentSprite != player.sprites.stand.right
        //         && player.currentSprite != player.sprites.run.right
        //     ){
        //         // player.position.x = player.position.x -15
        //         player.velocity.x = 0
        //         console.log("collide right");
        //     }
        // ---- SIDE COLLISION ---- //
    }) // ------ PLATFORMTWO COLLISION DETECTION END ------ //


        

        // player overlaps left and right sides with the sides of a platform
        // if ( 
        //     // player RIGHT side overlap with platform LEFT side 
        //     player.position.x + playerWidth.width + player.velocity.x >= platform.position.x 
        //     // player LEFT side overlap with platform RIGHT side 
        //     && player.position.x + player.velocity.x <= platform.position.x + platform.width 
        // ) 

        // player RIGHT >= platform left  AND   player LEFT Less than platform left
        // if (player.position.x + player.width >= platform.position.x 
        //     // player LEFT < 
        //     // && player.position < platform.position.x
        //     // Right key is pressed
        //     && keys.right.pressed
        //     && player.velocity.y <= 0

        //     ) 
        //     {
        //     player.velocity.x = 0
        //     console.log("stop");
        // } 
        // // else if (player.position.x < platform.position.x + platform.width && player.position.x + player.width > platform.position.x + platform.width) {
        //     player.velocity.x = 0
        // }
        // {
        //     player.velocity.x = 0
        //     console.log('STOP!');
        // }
    

    
    // building MCTC
    buildingMCTC.forEach(buildingMCTC => {
        if (
            player.position.x < buildingMCTC.position.x + buildingMCTC.width // player left plat right
            && player.position.x + player.width > buildingMCTC.position.x   // player right plat left 
            && player.position.y < buildingMCTC.position.y + buildingMCTC.height // player top UNDER plat bottom
            && player.position.y + player.height > buildingMCTC.position.y  // player bottom ABOVE plat top 
        ) {
            glowMCTC = true
        } else {
            glowMCTC = false
        }
    })
    //building CBRE
    buildingCBRE.forEach(buildingCBRE => {
        if (
            player.position.x < buildingCBRE.position.x + buildingCBRE.width // player left plat right
            && player.position.x + player.width > buildingCBRE.position.x   // player right plat left 
            && player.position.y < buildingCBRE.position.y + buildingCBRE.height // player top UNDER plat bottom
            && player.position.y + player.height > buildingCBRE.position.y  // player bottom ABOVE plat top 
        ) {
            glowCBRE = true
        } else {
            glowCBRE = false
        }
    })
    //buildingCOYOTE
    buildingCOYOTE.forEach(buildingCOYOTE => {
        if (
            player.position.x < buildingCOYOTE.position.x + buildingCOYOTE.width // player left plat right
            && player.position.x + player.width > buildingCOYOTE.position.x   // player right plat left 
            && player.position.y < buildingCOYOTE.position.y + buildingCOYOTE.height // player top UNDER plat bottom
            && player.position.y + player.height > buildingCOYOTE.position.y  // player bottom ABOVE plat top 
        ) {
            glowCOYOTE = true
        } else {
            glowCOYOTE = false
        }
    })
    //buildingPRIME
    buildingPRIME.forEach(buildingPRIME => {
        if (
            player.position.x < buildingPRIME.position.x + buildingPRIME.width // player left plat right
            && player.position.x + player.width > buildingPRIME.position.x   // player right plat left 
            && player.position.y < buildingPRIME.position.y + buildingPRIME.height // player top UNDER plat bottom
            && player.position.y + player.height > buildingPRIME.position.y  // player bottom ABOVE plat top 
        ) {
            glowPRIME = true
        } else {
            glowPRIME= false
        }
    })
    //buildingHGA
    buildingHGA.forEach(buildingHGA => {
        if (
            player.position.x < buildingHGA.position.x + buildingHGA.width // player left plat right
            && player.position.x + player.width > buildingHGA.position.x   // player right plat left 
            && player.position.y < buildingHGA.position.y + buildingHGA.height // player top UNDER plat bottom
            && player.position.y + player.height > buildingHGA.position.y  // player bottom ABOVE plat top 
        ) {
            glowHGA = true
        } else {
            glowHGA = false
        }
    })
        // if (//player bottom is HIGHER than platform top
        //     player.position.y + player.height <= platformTwo.position.y
        //     // player bottom overlap with platform top side. (Player lands on platform)
        //     && player.position.y + player.height + player.velocity.y >= platformTwo.position.y
        //     //  // players left side overlap with platform right side
        //     && player.position.x <= platformTwo.position.x + platformTwo.width 
        //     //  // players right side overlap with platform left side
        //     && player.position.x + player.width >= platformTwo.position.x 
        //     ) 
        //     {player.velocity.y = 0 
        // }

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
         // -- Left and Right Keys --    
        case 39:        // D
            // console.log('right/D');
            keys.right.pressed = true
            lastKey = 'right'
            break
        case 37:        // 'A'
            // console.log('left/A');
            keys.left.pressed = true
            lastKey = 'left'
            break
        case 87:        // W
            // console.log('Jump/W');
            if ( player.velocity.y == 0 ) {
                player.velocity.y += - jump // subtract jump level
                keys.jump.pressed = true           
            }
            break 
        case 32:        // Space
            // console.log('Jump/Space');
            if (player.velocity.y == 0 ){
                player.velocity.y += - jump // subtract jump level
                keys.jump.pressed = true
            } 
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
        // -- Left and Right Keys --
        case 39:        // D
            // console.log('right/D');
            keys.right.pressed = false
            // lastKey = 'right'
            break
        case 37:        // 'A'
            // console.log('left/A');
            keys.left.pressed = false
            // lastKey = 'left'
            break
            // ---- KEYUP JUMP - Don't really need any key up stuff for jump.

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
        greenPressed0 = buttons[0].pressed;
        redPressed1 = buttons[1].pressed;
        bluePressed2 = buttons[2].pressed;
        yellowPressed3 = buttons[3].pressed;

    }
};

function checkButtonPressed() {   // ---- DIFFERENT than Let & Right. BUTTONS Only --> green[0], red[1], blue[2], yellow[3]
    if (controllerIndex !== null ){

        const gamepad = navigator.getGamepads()[controllerIndex]
        const buttons = gamepad.buttons;

        if(buttons[0].pressed) {        // [0]
            player.velocity.y = -jump   // subtract jump level
            // console.log('GREEN');
        } 
        if(buttons[1].pressed) {        // [1]
            // console.log('RED');      
        } 
        if(buttons[2].pressed) {        // [2]
            // player1.attack()
            // console.log('BLUE');      
        } 
        if(buttons[3].pressed) {        // [3]
            // console.log('YELLOW');   
        }
    }
}


function test() {
    // if (animateRunning) { console.log('animate function running: ' + animateRunning);  }
    // console.log('Index.js is Connected');
    // console.log('canvas W: ' + canvas.width, 'canvas H: ' + canvas.height ); // check Canvas W & H
    // console.log('Window W: ' + window.innerWidth, 'Window H: ' + window.innerHeight ); // check Window W & H
    // console.log('gamepad Connected Status: ', connected);
    // console.log('scrolloffset', scrollOffset);
}
test()