// import platform from '../img/platform.png';
const modalMobile = document.getElementById('modalMobile');
const arrowRight = document.getElementById('arrowsRight');
const arrowLeft = document.getElementById('arrowsLeft');
const arrowUp = document.getElementById('arrowsUp');
const buttonA = document.getElementById('video-game-buttonA');
const buttonX = document.getElementById('video-game-buttonX');

let mobileModal = false


function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches){
        console.log('Portrait orientation');
    } else if (window.matchMedia("(orientation: landscape)").matches){
        console.log("landscape orientation");
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);

 // -------------------- modalmobileON --------------------
function mobileModalOn(){
    mobileModal = true
    modalMobile.style.display = 'flex'
}
  // ---- modalMobile OFF ----
function mobileModalOff(){
    mobileModal = false
    modalMobile.style.display = 'none'
}
// ------ CHECK IF USING MOBILE ------
function isMobileDevice() {
    // Check if the user agent contains keywords indicative of mobile devices
    // console.log(navigator.userAgent);
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }


  if (isMobileDevice()) {
    console.log("User is using a mobile device");
    mobileModal = true
    // mobileModalOn()
    // window.alert("This app works best on a computer browser.")
} else {
      mobileModal = false
    //   mobileModalOn()
    //   mobileModalOff()
    console.log("User is using a computer browser");
  }


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const loaderDiv = document.getElementById("loader")


const buttonHelp = document.getElementById('btnHelp');
const closeButtonMobile = document.getElementById('btnCloseMobile');
const modalHelp = document.getElementById('modalHelp');
const closeButtonHelp = document.getElementById('btnCloseHelp');
const modalHGA = document.getElementById('modalHGA')
const modalPrime = document.getElementById('modalPrime')
const modalCBRE = document.getElementById('modalCBRE')
const modalCoyote = document.getElementById('modalCoyote')
const modalMCTC = document.getElementById('modalMCTC')

// const modalTextElement = document.getElementById('modalText'); // Was used with one modal that text changed dynamically

const closeButton = document.getElementById('btnClose');
const closeButtonHGA = document.getElementById('btnCloseHGA');
const closeButtonPrime = document.getElementById('btnClosePrime');
const closeButtonCBRE = document.getElementById('btnCloseCBRE');
const closeButtonCoyote = document.getElementById('btnCloseCoyote');
const closeButtonMCTC = document.getElementById('btnCloseMCTC');


// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
canvas.width =  1920  //visualViewport.width - 10
canvas.height = 1080  //visualViewport.height - 10

let canvasHeight = canvas.height
let canvasWidth = canvas.width
let windowInnerHeight = window.innerHeight  
let windowInnerWidth = window.innerWidth

// document.onreadystatechange = function() {
//     console.log('document.onreadystatechange function');
//     if (document.readyState !== "complete"){
//         console.log('page load NOT Complete------'); 
//     } else {
//         console.log('page load complete!-----');
//         // onPageload()
//     }
// }

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOMContentLoaded');
    setTimeout( function () {
        console.log("Inside Timeout function.");
        document.getElementById("loader").style.display = "none";

        let loaderDisplay = window.getComputedStyle(loaderDiv)
        if(loaderDisplay.display === "none") {
            console.log('loader = HIDDEN');
            document.getElementById("content").style.display = "flex";
            
        } else {
            console.log('loader VISIBLE');
        }
        if(mobileModal) {
            mobileModalOn()
        } 
        // document.getElementById("content").style.display = "block";
        // document.getElementById("content").style.display = "flex";
    }, 1000 );
});

// ---- window.onload fixed the rendering issues ----
window.onload = function () {
    console.log('window.onload function');
    
    canvasHeight = canvas.height
    canvasWidth = canvas.width
    if (document.readyState !== "complete"){
        console.log('page load NOT Complete'); 
    } else {
        console.log('page load complete!');
        // onPageload()
    }
    // initial canvas dimensions options 2
    // windowInnerHeight = window.innerHeight  
    // windowInnerWidth = window.innerWidth
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

const platformTwoWidth = 580
const platformTwoHeight = 125 //  

const playerSize = 2 // used when referencing height in player class
const buildingSize = 2
const buildingSize2 = 1.5
const backgroundWidth = 2560
const skyWidth = 2559

let currentNullPosition = 0 // Anchor Point for all moving platforms
let direction = 1; // 1 represents moving to the right, -1 represents moving to the left

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

// -- Building Modals --
let helpModal = true 
let HGAModal = false
let PrimeModal = false
let CBREModal = false
let CoyoteModal = false
let MCTCModal = false

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

// const tallPlatform = new Image()   
// tallPlatform.src = './img/platformSmallTall.png'

// -------- Background Images -------- //
const skyImage = new Image()   
skyImage.src = './img/Sky.jpg'

const backgroundImage = new Image()   
backgroundImage.src = './img/background.png'

const midgroundImage = new Image()   
midgroundImage.src = './img/midground.png'

const foregroundImage = new Image()   
foregroundImage.src = './img/foreground.png'

// const cloudImage = new Image()   // Cloud Image - Dimensions 10620 × 400
// cloudImage.src = './img/cloud.png'

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
let movingPlatform1 = []
let platformTwos = []
let platforms = []     // Array of Platforms
let platformNull = []     // Array of Platforms
let sky = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let backgrounds = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let midgrounds = []    
let foregrounds = []    
// let clouds = [] //new Cloud({x: 20, y: 50, image: cloudImage}), new Cloud({x: 600, y: 150, image: cloudImage}), new Cloud({x: 1000, y: 0, image: cloudImage})];  
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
    },
    x: {
        pressed: false
    },
    QuestionMark: {
        pressed: false
    }
}

function init() {
    // console.log('init function');
    // modalHGAOff()
    // helpModalOn()
// -------- ELEMENT VARIABLES --------
player = new Player() //  ---- NEED THIS. Resets the player. ----

// ---- RESET NULL --
currentNullPosition = 0 // Anchor Point for all moving platforms
direction = 1; // 1 represents moving to the right, -1 represents moving to the left

sky = [
    new Sky({x:-skyWidth, y: 0, image: skyImage}),
    new Sky({x:0, y: 0, image: skyImage}),
    new Sky({x:skyWidth, y: 0, image: skyImage}),
    // new Sky({x:skyWidth*2, y: 0, image: skyImage}),
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


platformNull = [
    new Platform({x: -platformTwoWidth*2, y: canvas.height/2, image: platformTwoImage}) // -- Hidden off screen.
];

movingPlatform1 = [
    new Platform({x: 1700, y: canvas.height - 125, image: platformTwoImage})
];

buildingHGA = [ new BuildingHGA(2500, canvas.height - HGA.height - platformHeight, 250, 422, HGA)] // PRIME (x,y,w,h,image,)
buildingPRIME = [ new BuildingPRIME(5000, canvas.height - PRIME.height - platformHeight, 500, 500, PRIME)] // HGA (x,y,w,h,image,)
elementsPRIME = [ new ElementsPRIME(5000, canvas.height - PrimeElements.height - platformHeight, 500, 500, PrimeElements)] // HGA (x,y,w,h,image,)
buildingCBRE = [ new BuildingCBRE(7500, canvas.height - CBRE.height - platformHeight, 250, 422, CBRE)] // CBRE (x,y,w,h,image,)
buildingCOYOTE = [ new BuildingCOYOTE (10000, canvas.height - COYOTE.height - platformHeight, 250, 422, COYOTE)] // COYOTE
buildingMCTC = [ new BuildingMCTC(12500, canvas.height - MCTC.height - platformHeight, 250, 422, MCTC)] // MCTC (x,y,(NOT USED --> w,h,image,))

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


// let number = 0
// function animateTitle() {
//     setTimeout( function () {
//         let strNumber = number.toString()
//         number++
//         document.title = 'test' + strNumber
//         animateTitle()

//     }, 500 );
    
// }

// animateTitle()

function animateTitle(array) {
    // let xIndex = array.indexOf('X');
    if(array.length > 0) {
        setTimeout( function () {
        let lastItem = array.pop();
        array.unshift(lastItem)
        // console.log(array.join(', '));
        document.title = 'VGR ' + array
        animateTitle(array);
        }, 250 );
    } else {
        console.log('array is empty');
    }

    // if (xIndex !==-1) {
    //     setTimeout( function () {
    //     array.splice(xIndex, 1)
    //     array.push('X')
    //     console.log(array.join(', '));
        
    //     array.pop();
    //     array.unshift('X');
    //     console.log(array.join(', '));
    //     moveX(myArray);
    //     }, 500 );
    // } else {
    //     console.log("'X' not found in array");
    // }
}
let array = ['🏃‍♂️', ' ', ' ', ' ', ' ', ' ',];

animateTitle(array);

// ------ MAIN ANIMATION FUNCTION ------ //
function animate() { 
    // console.log(mobileModal); // constantly checks if mobileModal is T/F
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
        sky.position.x += (0.3 * time)
        if (sky.position.x > canvas.width) {
            sky.position.x = -skyWidth;
          }
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
    arrowArray.forEach(arrowArray1 => { // loop arrow sign frames
        arrowArray1.draw() 
        arrowArray1.update()
    })
    platforms.forEach(platform => { // loop through array of Platforms
        platform.draw() // ------ DRAW PLATFORM
    })
    
    platformNull.forEach(platform => { // loop through array of Platforms
        platform.draw() // ------ DRAW PLATFORM
    })

    movingPlatform1.forEach(movingPlatform => { // loop through array of Platforms
        // if (movingPlatform.position.x + movingPlatform.width > 0 && movingPlatform.position.x < canvas.width ) { // if on screen logic
        // }
            movingPlatform.position.x += 2 * direction; // ------ Platform Move Loop -------         
            if (movingPlatform.position.x <= currentNullPosition+1700 || movingPlatform.position.x >= currentNullPosition+2280 ){
                direction *= -1; // ---- reverse platform move direction
            }
        // console.log('currentNullPosition', currentNullPosition, 'movingPlatform.position.x', movingPlatform.position.x);
        movingPlatform.draw() // ------ DRAW PLATFORMd
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
            platformNull.forEach(platform => { // loop through array of platforms
                // platform.draw() // ------ PLATFORM INITIAL DRAW 
                platform.position.x -= playerMovement
                currentNullPosition -= playerMovement
            });
            movingPlatform1.forEach(platform => { // loop through array of platforms
                // console.log('platformNull', platformNull.position.x);
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
            platformNull.forEach(platform => { // loop through array of platforms
                platform.position.x += playerMovement
                currentNullPosition += playerMovement
            });
            movingPlatform1.forEach(platform => { // loop through array of platforms
     
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
        }
    })

    // ------ PLATFORM TWO COLLISION DETECTION ------
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
    })

    // ------ MOVING PLATFORM COLLISION DETECTION ------ // 
    movingPlatform1.forEach(platform => { 
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
        }
    })



    let newMCTC = 'MCTC Text'
    let TextCOYOTE = 'coyote Text'
    let TextCBRE = 'CBRE text'
    let TextPRIME = 'Prime text'
    let TextHGA = '● Developed user-friendly full-stack web applications using ASP.NET and Visual Basic, leveraging the .NET framework, resulting in a 20% increase in overall application performance. '

    // function mainModalText() { // -- change modalHGA text dynamically
    //     if (HGAModal){ // if modalHGA on. Check which building is glowing
    //         if (glowMCTC) {
    //             modalTextElement.textContent = newMCTC;
    //         } else if(glowCOYOTE) {
    //             modalTextElement.textContent = TextCOYOTE;
    //         } else if(glowCBRE) {
    //             modalTextElement.textContent = TextCBRE;
    //         } else if(glowPRIME) {
    //             modalTextElement.textContent = TextPRIME;
    //         } else if(glowHGA) {
    //             modalTextElement.textContent = TextHGA;
    //         }
    //     }
    // }

    // ---- Check if x is pressed ----
    function xPressed(){ // check if x is pressed
        if (keys.x.pressed){
            if (glowMCTC) {
                MCTCModal = true
                modalMCTCOn()
                // console.log('MCTC Modal On');
            } else if (glowCOYOTE) {
                CoyoteModal = true
                modalCoyoteOn()
                // console.log('Coyote Modal On');
            } else if (glowCBRE) {
                CBREModal = true
                modalCBREOn()
                // console.log('CBRE Modal On');
            } else if (glowPRIME) {
                PrimeModal = true
                modalPrimeOn()
                // console.log('Prime Modal On');
            } else if (glowHGA) {
                HGAModal = true
                modalHGAOn()
                // console.log('HGA Modal On');
            }


          
        }
    }
    

    // building MCTC
    buildingMCTC.forEach(buildingMCTC => {
        if (
            player.position.x < buildingMCTC.position.x + buildingMCTC.width // player left plat right
            && player.position.x + player.width > buildingMCTC.position.x   // player right plat left 
            && player.position.y < buildingMCTC.position.y + buildingMCTC.height // player top UNDER plat bottom
            && player.position.y + player.height > buildingMCTC.position.y  // player bottom ABOVE plat top 
        ) {
            glowMCTC = true
            xPressed()
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
            xPressed()
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
            xPressed()
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
            xPressed()
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
            xPressed()
        } else {
            glowHGA= false
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
        init(); // Restarts Game
    }
    // if (player.position.y < 50 ){
    //     console.log('false start!!');
    //     init();
    // }
    ifNoGlow()
    // mainModalText()
    controllerInput()
    checkButtonPressed()
    requestAnimationFrame(animate) 
}

init() // Restarts Game
animate()

// ---- LISTEN FOR A KEY PRESSED ----
addEventListener('keydown', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    // console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    if(!helpModal && !MCTCModal && !CoyoteModal && !CBREModal && !PrimeModal && !HGAModal){
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
        case 38:        // Space
            // console.log('Jump/Space');
            if (player.velocity.y == 0 ){
                player.velocity.y += - jump // subtract jump level
                keys.jump.pressed = true
            } 
            break

        case 88:        // X
            // console.log('X');
                keys.x.pressed = true   
            break
        case 191:        // X
            // console.log('QuestionMark');
            if(!MCTCModal && !CoyoteModal && !CBREModal && !PrimeModal && !HGAModal && !mobileModal){          
                    // console.log('No building modals are open');
                    keys.QuestionMark.pressed = true   
                    helpModalOn()
                }
            break
    }
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
        case 38:        // Space
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
        case 88:        // X
            // console.log('X');
                keys.x.pressed = false   
            break
        case 191:        // X
            // console.log('QuestionMark');
                keys.QuestionMark.pressed = false   
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
    if (animateLoop) { 
        console.log('animateLoop running');
    }
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
            keys.x.pressed = true
            // player1.attack()
            // console.log('BLUE');      
        } 
        if(buttons[3].pressed) {        // [3]
            // console.log('YELLOW');   
        }
    }
}

function ifNoGlow(){
    if( !glowMCTC && !glowCOYOTE && !glowCBRE && !glowPRIME && !glowHGA){
        modalHGAOff()
        modalPrimeOff()
        modalCBREOff()
        modalCoyoteOff()
        modalMCTCOff()
    } 
}

 // -------------------- modalHGA ON --------------------
 function modalHGAOn(){
    HGAModal = true
    modalHGA.style.display = 'block'
}
  // ---- modalHGA OFF ----
function modalHGAOff(){
    HGAModal = false
    modalHGA.style.display = 'none'
}


 // -------------------- modalPrime ON --------------------
 function modalPrimeOn(){
    PrimeModal = true
    modalPrime.style.display = 'block'
}
  // ---- modalHGA OFF ----
function modalPrimeOff(){
    PrimeModal = false
    modalPrime.style.display = 'none'
}


// -------------------- modalCBRE ON --------------------
 function modalCBREOn(){
    CBREModal = true
    modalCBRE.style.display = 'block'
}
  // ---- modalHGA OFF ----
function modalCBREOff(){
    CBREModal = false
    modalCBRE.style.display = 'none'
}


// -------------------- modalCoyote ON --------------------
 function modalCoyoteOn(){
    CoyoteModal = true
    modalCoyote.style.display = 'block'
}
  // ---- modalHGA OFF ----
function modalCoyoteOff(){
    CoyoteModal = false
    modalCoyote.style.display = 'none'
}


// -------------------- modalMCTC ON --------------------
 function modalMCTCOn(){
    MCTCModal = true
    modalMCTC.style.display = 'block'
}
  // ---- modalHGA OFF ----
function modalMCTCOff(){
    MCTCModal = false
    modalMCTC.style.display = 'none'
}


 // -------------------- modalHelp ON --------------------
 function helpModalOn(){
    helpModal = true
    modalHelp.style.display = 'block'
}
  // ---- modalHelp OFF ----
function helpModalOff(){
    helpModal = false
    modalHelp.style.display = 'none'
}



// ---- Click listener for HGA Close button -- 
closeButtonHGA.addEventListener('click', function() {
    setTimeout(modalHGAOff, 100); 
    // console.log('btncloseHGA clicked');
})

// ---- Click listener for Prime Close button -- 
closeButtonPrime.addEventListener('click', function() {
    setTimeout(modalPrimeOff, 100); 
    // console.log('btnclosePrime clicked');
})


// ---- Click listener for CBRE Close button -- 
closeButtonCBRE.addEventListener('click', function() {
    setTimeout(modalCBREOff, 100); 
    // console.log('btncloseCBRE clicked');
})


// ---- Click listener for Coyote Close button -- 
closeButtonCoyote.addEventListener('click', function() {
    setTimeout(modalCoyoteOff, 100); 
    // console.log('btncloseCoyote clicked');
})


// ---- Click listener for MCTC Close button -- 
closeButtonMCTC.addEventListener('click', function() {
    setTimeout(modalMCTCOff, 100); 
    // console.log('btncloseMCTC clicked');
})


// ---- Click listener for Help Close button -- closed CBREModal
closeButtonHelp.addEventListener('click', function() {
    setTimeout(helpModalOff, 100); 
    // console.log('btncloseHelp clicked');
})

// ---- Click listener for Mobile Close button -- closed CBREModal
closeButtonMobile.addEventListener('click', function() {
    setTimeout(mobileModalOff, 100); 
    // console.log('btncloseMobile clicked');
})

buttonHelp.addEventListener('click', function() {
    helpModal = !helpModal
    if(helpModal) {
        setTimeout(helpModalOn, 100); 
        // console.log('help model opening');
    } else {
        setTimeout(helpModalOff, 100); 
        // console.log('help model closing');
    }
})

 // Get the touch area element
//  var arrowRight = document.getElementById('touchArea');

 // Add touchstart event listener
 arrowRight.addEventListener('touchstart', handleTouchStart, false);
 arrowLeft.addEventListener('touchstart', handleTouchStart, false);
 arrowUp.addEventListener('touchstart', handleTouchStart, false);
 buttonA.addEventListener('touchstart', handleTouchStart, false);
 buttonX.addEventListener('touchstart', handleTouchStart, false);

 // Add touchend event listener
 arrowRight.addEventListener('touchend', handleTouchEnd, false);
 arrowLeft.addEventListener('touchend', handleTouchEnd, false);
 arrowUp.addEventListener('touchend', handleTouchEnd, false);
 buttonA.addEventListener('touchend', handleTouchEnd, false);
 buttonX.addEventListener('touchend', handleTouchEnd, false);

 // Add click event listener
//  arrowRight.addEventListener('click', handleClick, false);

 // Variables to store touch start coordinates
 var startX, startY;

 function handleTouchStart(event) {
    if (event.target.id != null || event.target.id != undefined ){
        let id = event.target.id
        switch (id) {
            case 'arrowsRight':
                rightPressed = true
            break

            case 'arrowsLeft':
                leftPressed = true
            break
            case 'video-game-buttonX':
                keys.x.pressed = true   
            break
            case 'video-game-buttonA':
                keys.jump.pressed = true 
                if ( player.velocity.y == 0 ) {
                    player.velocity.y += - jump // subtract jump level
                    keys.jump.pressed = true           
                }
            break
            case 'arrowsUp':
                keys.jump.pressed = true
                if ( player.velocity.y == 0 ) {
                    player.velocity.y += - jump // subtract jump level
                    keys.jump.pressed = true           
                }
            break
        }
        console.log(id);
}
   // Prevent default behavior
   event.preventDefault();

   // Get the touch coordinates
   startX = event.touches[0].clientX;
   startY = event.touches[0].clientY;
    
//    console.log('start touch');

   // Add visual feedback if needed
//    touchArea.style.backgroundColor = '#aaa';
 }

 function handleTouchEnd(event) {
    // if (event.target.id != null || event.target.id != undefined ){
    //     let id = event.target.id
    //     switch (id) {
    //         case 'arrowsRight':
    //             rightPressed = false
    //         break
    //         case 'arrowsLeft':
    //             leftPressed = false
    //         break
    //         case 'video-game-buttonX':
    //             keys.x.pressed = false  
    //         break
    //         case 'video-game-buttonA':
    //             keys.jump.pressed = false 
    //         break
    //         case 'arrowsUp':
    //             keys.jump.pressed = false
    //         break
    //     }
    //     console.log(id, 'off');
    // }
   // Prevent default behavior
   event.preventDefault();

   // Get the touch coordinates
   var endX = event.changedTouches[0].clientX;
   var endY = event.changedTouches[0].clientY;

   // Check for a swipe or tap gesture based on start and end coordinates
   if (Math.abs(endX - startX) < 10 && Math.abs(endY - startY) < 10) {
     // It's a tap gesture
    //  alert('Tap!');
    // rightPressed = false
    if (event.target.id != null || event.target.id != undefined ){
        let id = event.target.id
        switch (id) {
            case 'arrowsRight':
                rightPressed = false
            break
            case 'arrowsLeft':
                leftPressed = false
            break
            case 'video-game-buttonX':
                keys.x.pressed = false  
            break
            case 'video-game-buttonA':
                keys.jump.pressed = false 
            break
            case 'arrowsUp':
                keys.jump.pressed = false
            break
        }
        console.log(id, 'off');
    }
    console.log('end touch');
   } else {
     // It's a swipe gesture
    //  alert('Swipe!');
   }

   // Reset visual feedback if needed
//    touchArea.style.backgroundColor = '#ccc';
 }

// function handleClick() {
//    // Handle click event for devices that don't support touch events
// //    alert('Click!');
// rightPressed = true
// console.log('right pressed true');

// setTimeout(function() {
//     rightPressed = false
//     console.log('right pressed false');
//   }, 100);
// }

//  arrowRight.addEventListener('click', function() {
//     rightPressed = true
//     console.log('arrowRight clicked');
// })

function test() {
    // if (animateRunning) { console.log('animate function running: ' + animateRunning);  }
    // console.log('Index.js is Connected');
    // console.log('canvas W: ' + canvas.width, 'canvas H: ' + canvas.height ); // check Canvas W & H
    // console.log('Window W: ' + window.innerWidth, 'Window H: ' + window.innerHeight ); // check Window W & H
    // console.log('gamepad Connected Status: ', connected);
    // console.log('scrolloffset', scrollOffset);
}
test()