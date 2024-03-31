const modalMobile = document.getElementById('modalMobile');
const arrowRight = document.getElementById('arrowsRight');
const arrowLeft = document.getElementById('arrowsLeft');
const arrowUp = document.getElementById('arrowsUp');
const buttonA = document.getElementById('video-game-buttonA');
const buttonX = document.getElementById('video-game-buttonX');
const buttonHelp2 = document.getElementById('buttonHelp');
const buttonsDiv = document.getElementById('buttonsDiv');
const PressXDiv = document.getElementById('pressX');
const modalLose = document.getElementById('modalLose');
const closeLose = document.getElementById('btnCloseLose');
const flexDiv = document.getElementById('flexDiv');

let mobileModal = false

function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches && mobileModal){
        // flexDiv.style.setProperty('flex-direction', 'column');
        // flexDiv.style.setProperty('align-items',  'center');
        // console.log('Portrait orientation');
    } else if (window.matchMedia("(orientation: landscape)").matches && mobileModal){
        // alert('Please make sure device is Vertical.')
        // console.log("landscape orientation");
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
    // console.log("User is using a mobile device");
    mobileModal = true
    // buttonsDiv.style.display = 'flex';
    // mobileModalOn()
    // window.alert("This app works best on a computer browser.")
} else {
      mobileModal = false
    //   buttonsDiv.style.display = 'none';
    //   mobileModalOn()
    //   mobileModalOff()
    // console.log("User is using a computer browser");
  }


function isMobileDevice() {
    // Check if the user agent contains keywords indicative of mobile devices
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  // Example usage
  if (isMobileDevice()) {
    console.log("User is using a mobile device");
  } else {
    console.log("User is using a computer browser");
  }


function isMobileDevice() {
    // Check if the user agent contains keywords indicative of mobile devices
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  // Example usage
  if (isMobileDevice()) {
    console.log("User is using a mobile device");
    // window.alert("This app works best on a computer browser.")
  } else {
    console.log("User is using a computer browser");
  }


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const loaderDiv = document.getElementById("loader")


// const buttonHelp = document.getElementById('btnHelp');
const closeButtonMobile = document.getElementById('btnCloseMobile');
const modalHelp = document.getElementById('modalHelp');
const closeButtonHelp = document.getElementById('btnCloseHelp');
const modalHGA = document.getElementById('modalHGA')
const modalPrime = document.getElementById('modalPrime')
const modalCBRE = document.getElementById('modalCBRE')
const modalCoyote = document.getElementById('modalCoyote')
const modalMCTC = document.getElementById('modalMCTC')
const modalRestaurant = document.getElementById('modalRestaurant')
const modalWin = document.getElementById('modalWin')

// const modalTextElement = document.getElementById('modalText'); // Was used with one modal that text changed dynamically

const closeButton = document.getElementById('btnClose');
const closeButtonHGA = document.getElementById('btnCloseHGA');
const closeButtonPrime = document.getElementById('btnClosePrime');
const closeButtonCBRE = document.getElementById('btnCloseCBRE');
const closeButtonFreelance = document.getElementById('btnCloseFreelance');
const closeButtonCoyote = document.getElementById('btnCloseCoyote');
const closeButtonMCTC = document.getElementById('btnCloseMCTC');
const closeButtonRestaurant= document.getElementById('btnCloseRestaurant');
const closeButtonWin = document.getElementById('btnCloseWin');


// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
canvas.width =  1920  //visualViewport.width - 10
canvas.height = 1080  //visualViewport.height - 10

// console.log('viewport');
// console.log(visualViewport.width);
// console.log(visualViewport.height);
// console.log('canvas');
// console.log(canvas.width);
// console.log(canvas.height);
// console.log('window');
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// let canvasHeight = canvas.height
// let canvasWidth = canvas.width
// let windowInnerHeight = window.innerHeight  
// let windowInnerWidth = window.innerWidth

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
    // console.log('DOMContentLoaded');
    setTimeout( function () {
        // console.log("Inside Timeout function.");
        document.getElementById("loader").style.display = "none";

        let loaderDisplay = window.getComputedStyle(loaderDiv)
        if(loaderDisplay.display === "none") {
            // console.log('loader = HIDDEN');
            document.getElementById("content").style.display = "flex";
            
        } else {
            // console.log('loader VISIBLE');
        }
        if(mobileModal) {
            mobileModalOn()
        } 
        // document.getElementById("content").style.display = "block";
        // document.getElementById("content").style.display = "flex";
    }, 2000 );
});

// ---- window.onload fixed the rendering issues ----
window.onload = function () {
    // console.log('window.onload function');
    
    canvasHeight = canvas.height
    canvasWidth = canvas.width
    if (document.readyState !== "complete"){
        console.log('page load NOT Complete'); 
    } else {
        // console.log('page load complete!');
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
let gravity = 1.5
const floor = 125 // or platformImage.height. pixel from the bottom player stops at
let jump = 40 // amount player should jump
let playerMovement = 20 // 20 //  amount player moves left and right
let health = 100
let canHurt = true
const platformWidth = 2500 //579 // actually 580 but leaves 1px gap if 580
const platformHeight = 125 // actually 580 but leaves 1px gap if 5 80

const platformTwoWidth = 580
const platformTwoHeight = 125 //  
const bugWidth = 150

let playerSize = 2 // used when referencing height in player class
const buildingSize = 2
const buildingSize2 = 1.5
const backgroundWidth = 2560
const skyWidth = 2559

let currentNullPosition = 0 // Anchor Point for all moving platforms
let direction = 1; // 1 represents moving to the right, -1 represents moving to the left
let direction2 = 1

let playerWidth = 66
let playerHeight = 150
let groundPosition = 125 //canvas.height - platformHeight
let scrollOffset = 0
let scrollOffsetUp = 0
let time = 1
let animateRunning = false

// -- Building Glow --
let glowRestaurant = false
let glowMCTC = false
let glowFreelance = false
let glowCOYOTE = false
let glowCBRE = false
let glowPRIME = false
let glowHGA = false
let glowPlayer = false
let color
let glowPowerUp1 = false
let glowPowerUp2 = false
let glowPowerUp3 = false

let powerUp1 = false
let powerUp2 = false
let powerUp3 = false
let PressX = false
let playerColor = ['red', 'orange', 'pink', 'yellow', 'green', 'purple', 'blue', 'white', 'black']
let number2 = 0
// -- Building Modals --
let helpModal = true 
let HGAModal = false
let PrimeModal = false
let CBREModal = false
let CoyoteModal = false
let MCTCModal = false
let RestaurantModal = false

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

let loseModal = false
let winModal = false
let loseReason = 'none'
let lose = false
let win = false
let winHandled = false
let blackStart = false
let whiteStart = false
let winBarStart = canvas.height - (platformHeight*3)
// -------- GAMEPAD VARIABLES -------- //


// -------- IMAGE VARIABLES --------
const platformImage = new Image()   
platformImage.src = './img/Platforms/platform.webp'

const platformTwoImage = new Image()   
platformTwoImage.src = './img/Platforms/platformTwo.webp'

// const tallPlatform = new Image()   
// tallPlatform.src = './img/platformSmallTall.webp'

// -------- Background Images -------- //
const skyImage = new Image()   
skyImage.src = './img/Backgrounds/Sky.webp'

const backgroundImage = new Image()   
backgroundImage.src = './img/Backgrounds/background.webp'

const midgroundImage = new Image()   
midgroundImage.src = './img/Backgrounds/midground.webp'

const foregroundImage = new Image()   
foregroundImage.src = './img/Backgrounds/foreground.webp'

// const cloudImage = new Image()   // Cloud Image - Dimensions 10620 × 400
// cloudImage.src = './img/cloud.webp'

// -------- Player Images -------- //
const spriteRunLeft = new Image()   // spriteRunLeft Image - Dimensions
spriteRunLeft.src = './img/Sprites/spriteRunLeft.webp'

const spriteRunRight = new Image()   // spriteRunRight Image - Dimensions
spriteRunRight.src = './img/Sprites/spriteRunRight.webp'

const spriteStandLeft = new Image()   // spriteStandLeft Image - Dimensions
spriteStandLeft.src = './img/Sprites/spriteStandLeft.webp'

const spriteStandRight = new Image()   // spriteStandRight Image - Dimensions
spriteStandRight.src = './img/Sprites/spriteStandRight.webp'

// -------- Building Images -------- //
const Restaurant = new Image()   
Restaurant.src = './img/Jobs/RestaurantSprite2.webp'

const MCTC = new Image()   
MCTC.src = './img/Jobs/MCTC LONG.png'

const Freelance  = new Image()   
Freelance .src = 'img/Jobs/FreelanceSprite3.webp'

const COYOTE  = new Image()   
COYOTE .src = './img/Jobs/COYOTE.webp'

const CBRE = new Image()   
CBRE.src = './img/Jobs/CBRE LONG.webp'

const HGA = new Image()   
HGA.src = './img/Jobs/HGA Long.png'

const PRIME = new Image()   
PRIME.src = './img/Jobs/Prime.webp'

const PrimeElements = new Image()   
PrimeElements.src = './img/Jobs/PrimeFlag2.png'

const ArrowPic = new Image()   
ArrowPic.src = './img/Sign/arrow3.png'

const BugPic = new Image()   
BugPic.src = './img/Bug/bug2.webp'

const BugTalkPic = new Image()   
BugTalkPic.src = './img/Bug/bugTalkSprite.webp'

const spacebarPic = new Image()   
spacebarPic.src = './img/Sign/spacebar.webp'

const signMCTCPic = new Image()   
signMCTCPic.src = './img/Sign/MCTC.webp'

const signRestaurantPic = new Image()   
signRestaurantPic.src = './img/Sign/restaurant.webp'

const signCoyotePic = new Image()   
signCoyotePic.src = './img/Sign/Coyote.webp'

const signVFXPic = new Image()   
signVFXPic.src = './img/Sign/VFX.webp'

const signCBREPic = new Image()   
signCBREPic.src = './img/Sign/CBRE.webp'

const signPrimePic = new Image()   
signPrimePic.src = './img/Sign/Prime.webp'

const SignHGAPic = new Image()   
SignHGAPic.src = './img/Sign/SignHGA.webp'

const PowerUp1 = new Image()   
PowerUp1.src = './img/Sign/powerUp1.webp'
const PowerUp2 = new Image()   
PowerUp2.src = './img/Sign/powerUp2.webp'
const PowerUp3 = new Image()   
PowerUp3.src = './img/Sign/powerUp3.webp'

const WinBar1 = new Image()   
WinBar1.src = './img/WinBars/winBar1.webp'
const WinBar2 = new Image()   
WinBar2.src = './img/WinBars/winBar2.webp'
const WinBar3 = new Image()   
WinBar3.src = './img/WinBars/winBar3.webp'

const titlePic = new Image()   
titlePic.src = './img/videogame-title.webp'

// -------- ELEMENT VARIABLES --------
let player = new Player() //  calling the "Player" class
player.draw()
player.update()
let movingPlatform1 = []
let movingPlatform2 = []
let platformTwos = []
let platforms = []     // Array of Platforms
let platformNull = []     // Array of Platforms
let sky = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let backgrounds = []    //new Background({x:0, y:0, image: backgroundImage})] // Array of Backgrounds
let midgrounds = []    
let foregrounds = []    
let buildingMCTC = []
let freelance = []
let buildingCOYOTE  = []
let buildingCBRE = []
let buildingPRIME = []
let elementsPRIME = []
let buildingHGA = []
let arrowArray = []
let powerUps1 = []
let powerUps2 = []
let powerUps3 = []
let bugs = []
let movePlate1 = 0
let moveBug1 = 0
let movingBugs = []
let WinBar2Item
let WinBar3Item
let blackItem 
let whiteItem
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
    scrollOffset = 0 //  clear scroll offset. Fixes winning bug.
    loseReason = 'none'
    powerUp1 = false
    powerUp2 = false
    powerUp3 = false
    glowPlayer = false
    jump = 35
    playerSize = 2
    playerMovement = 20
    health = 100
    gsap.to('#player1Health', {
        width: health + '%'
    })
    modalWin.style.display = 'none'
    if(win || lose){
        setTimeout(()=> {
            winHandled = false
            lose = false
            win = false
            // blackStart = false
            // whiteStart = false

        }, 2000)
    }
    blackStart = false
    winModal = false
// -------- ELEMENT VARIABLES --------
player = new Player() //  ---- NEED THIS. Resets the player. ----

// ---- RESET NULL --
currentNullPosition = 0 // Anchor Point for all moving platforms
direction = 1; // 1 represents moving to the right, -1 represents moving to the left
direction = 1

// -------------------------- ALL BACKGROUNDS --------------------------
sky = [
    new Sky({x:-skyWidth, y: 0, image: skyImage}),
    new Sky({x:0, y: 0, image: skyImage}),
    new Sky({x:skyWidth, y: 0, image: skyImage}),
    // new Sky({x:skyWidth*2, y: 0, image: skyImage}),
]
backgrounds = [
    new Background({x:0, y: 0, image: backgroundImage}),
    new Background({x:backgroundWidth, y: 0, image: backgroundImage}),
    new Background({x:backgroundWidth*2, y: 0, image: backgroundImage}),

    // ------ TITLE ------
    new Sign({x: 650, y:  110, image: titlePic})
    
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
    new Foreground({x:4250*4 , y: 1080-525, image: foregroundImage}),
    new Foreground({x:4250*5 , y: 1080-525, image: foregroundImage}),
    
]

// -------------------------- LARGE PLATFORMS --------------------------
let adjustPlat = 1000
platforms = [     // Array of Platforms. ------------- Platform Dimensions: 580 × 125 -------------
    new Platform({x: 0, y: canvas.height - platformHeight, image: platformImage}), // Ground 1
    new Platform({x: adjustPlat, y: canvas.height - 125, image: platformImage}), // Ground 2
    new Platform({x: 3550, y: canvas.height - 125, image: platformImage}), // Ground 3
    new Platform({x: (platformWidth * 2) + adjustPlat, y: canvas.height - 125, image: platformImage}), // Ground 4
    new Platform({x: (platformWidth * 3) + adjustPlat, y: canvas.height - 125, image: platformImage}), // Ground 5
    new Platform({x: platformWidth * 4, y: canvas.height - 125, image: platformImage}), // Ground 6
    new Platform({x: (platformWidth* 5) - 1000, y: canvas.height - 125, image: platformImage}), // Platform 7

    
    new Platform({x: (platformWidth* 6) - 1000, y: canvas.height - 125, image: platformImage}), // Platform 8
    new Platform({x: (platformWidth* 7) - 1000, y: canvas.height - 125, image: platformImage}), // Platform 8

    // -------- This is the new platform to cover the second ground hole -------- //
    new Platform({x: (platformWidth* 8) - 1000, y: canvas.height - 125, image: platformImage}), // Platform 8

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
    // new Platform({x: platformWidth* 19, y: canvas.height - 125, image: platformImage}), // Platform 14
    // new Platform({x: platformWidth* 19.5, y: canvas.height - 125, image: platformImage}), // Platform 14
    // new Platform({x: platformWidth* 21, y: canvas.height - 125, image: platformImage}), // Platform 14
    // new Platform({x: platformWidth* 22, y: canvas.height - 125, image: platformImage}), // Platform 14
    // new Platform({x: platformWidth* 23, y: canvas.height - 125, image: platformImage}), // Platform 14
];
// -------------------------- SMALL PLATFORMS --------------------------
platformTwos = [
    new PlatformTwo({x:8500, y: canvas.height - (platformHeight * 2), image: platformTwoImage }),
    new PlatformTwo({x:3003, y: canvas.height - platformHeight, image: platformTwoImage }),
    new PlatformTwo({x:8500+platformTwoWidth, y: canvas.height - (platformHeight * 2), image: platformTwoImage }),
    new PlatformTwo({x:8500+platformTwoWidth, y: canvas.height - (platformHeight * 3), image: platformTwoImage }),
    new PlatformTwo({x:8500+(platformTwoWidth*3), y: canvas.height - (platformHeight * 3), image: platformTwoImage }),
    new PlatformTwo({x:8500+(platformTwoWidth*3), y: canvas.height - (platformHeight * 2), image: platformTwoImage }),
    
    new PlatformTwo({x:16000, y: canvas.height - (platformHeight * 2), image: platformTwoImage }),
    new PlatformTwo({x:16000+platformTwoWidth, y: canvas.height - (platformHeight * 3), image: platformTwoImage }),
    new PlatformTwo({x:16000+(platformTwoWidth*2), y: canvas.height - (platformHeight * 4), image: platformTwoImage }),
    new PlatformTwo({x:16000+(platformTwoWidth*3), y: canvas.height - (platformHeight * 5), image: platformTwoImage }),

    new PlatformTwo({x:19350, y: canvas.height - (platformHeight * 5), image: platformTwoImage }),

    // new PlatformTwo({x:22400, y: canvas.height - (platformHeight * 2), image: platformTwoImage }),
    new PlatformTwo({x:22600 - platformTwoWidth, y: canvas.height - (platformHeight * 3), image: platformTwoImage }),
    new PlatformTwo({x:22200 , y: canvas.height - (platformHeight * 5), image: platformTwoImage }),
    // new PlatformTwo({x:1000 + (platformTwoImage.width * 3), y: 1080-500, image: platformTwoImage }),
    // new PlatformTwo({x:1000 + (platformTwoImage.width * 4), y: 1080-375, image: platformTwoImage }),
    // new PlatformTwo({x:1000 + (platformTwoImage.width * 5), y: 1080-250, image: platformTwoImage }),
] 

platformNull = [
    new Platform({x: -platformTwoWidth*2, y: canvas.height - (platformHeight * 5), image: platformTwoImage}) // -- Hidden off screen.
];

movePlate1 = 18280
movingPlatform1 = [
    new Platform({x: movePlate1, y: canvas.height - platformHeight*5, image: platformTwoImage})
];
movingPlatform2 = [
    // new Platform({x: 23000, y: canvas.height - platformHeight*5, image: platformTwoImage})
];

// -------------------------- BUILDINGS --------------------------
let buildingNull = 3500
buildingMCTC = [ new BuildingMCTC( buildingNull*2, canvas.height - MCTC.height - platformHeight, 250, 422, MCTC)] // MCTC (x,y,(NOT USED --> w,h,image,))
buildingRestaurant = [ new BuildingRestaurant(11500, canvas.height - Restaurant.height - 115, Restaurant)] 
buildingCOYOTE = [ new BuildingCOYOTE (14500, canvas.height - COYOTE.height - platformHeight, 250, 422, COYOTE)] // COYOTE
buildingFreelance = [ new BuildingFreelance(17800, canvas.height - Freelance.height - (platformHeight * 5)+10, Freelance)] // MCTC (x,y,(NOT USED --> w,h,image,))
buildingCBRE = [ new BuildingCBRE(21000 , canvas.height - CBRE.height - platformHeight, 250, 422, CBRE)] // CBRE (x,y,w,h,image,)
buildingPRIME = [ new BuildingPRIME(25000, canvas.height - PRIME.height - platformHeight, 500, 500, PRIME)] // HGA (x,y,w,h,image,)
elementsPRIME = [ new ElementsPRIME(25000, canvas.height - PrimeElements.height - platformHeight, 500, 500, PrimeElements)] // HGA (x,y,w,h,image,)
buildingHGA = [ new BuildingHGA(35000, canvas.height - HGA.height - (platformHeight -15), HGA)] // PRIME (x,y,w,h,image,)

// -------------------------- ARROWS & SIGNS --------------------------
arrowArray = [ new ARROW(800, canvas.height - ArrowPic.height - 50, 250, 422, ArrowPic),
            new Sign({x: 2850, y: canvas.height - spacebarPic.height - 125, image: spacebarPic}),
            new Sign({x: 4700, y: canvas.height - BugTalkPic.height - 200, image: BugTalkPic}),

            new Sign({x: 41000, y: canvas.height - WinBar1.height - 125, image: WinBar1}),

            new Sign({x: 6450, y: canvas.height - signMCTCPic.height - 125, image: signMCTCPic}),
            new Sign({x: 11100, y: canvas.height - signRestaurantPic.height - 125, image: signRestaurantPic}),
            new Sign({x: 13900, y: canvas.height - signCoyotePic.height - 125, image: signCoyotePic}),
            new Sign({x: 17200, y: canvas.height - (platformHeight * 4)- signVFXPic.height, image: signVFXPic}),
            new Sign({x: 20400, y: canvas.height - signCBREPic.height - 125, image: signCBREPic}),
            new Sign({x: 24500, y: canvas.height - signPrimePic.height - 125, image: signPrimePic}),
            new Sign({x: 34500, y: canvas.height - SignHGAPic.height - 100, image: SignHGAPic}),
] 
// -------------------------- WIN BARS--------------------------
WinBar2Item = [new Sign({x: 41100, y: canvas.height - WinBar2.height - 125, image: WinBar2})]
WinBar3Item = [new Sign({x: 41010, y: canvas.height - WinBar3.height - 325 , image: WinBar3})]

// -------------------------- POWER UPS --------------------------
powerUps1 = [
    new powerUp({x: 26200, y: canvas.height - PowerUp1.height - 125, image: PowerUp1}),
]
powerUps2 = [
    new powerUp({x: 30500, y: canvas.height - PowerUp2.height - 125, image: PowerUp2}),
]
powerUps3 = [
    new powerUp({x: 36250, y: canvas.height - PowerUp3.height - 125, image: PowerUp3}),
]
// 26500, 27000, 29500

// -------------------------- BLACK/WHITE RECTS --------------------------
blackItem = [new Black({x: -100, y: -100, image: WinBar3, opacity: 0 })]
whiteItem = [new White({x: -100, y: -100, image: WinBar3, opacity: 0 })]

// -------------------------- BUGS --------------------------
bugs = [ 
    new Bug({x: 5000, y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 8950, y: canvas.height - BugPic.height - 125, image: BugPic}),
    // new Bug({x: 9080+(bugWidth*2), y: canvas.height - BugPic.height - 250, image: BugPic}),
    new Bug({x: 18000, y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 18000, y: canvas.height - BugPic.height*2 - 125, image: BugPic}),
    
    new Bug({x: 9080+(bugWidth*4), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 9080+(bugWidth*5), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 9080+(bugWidth*6), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 9080+(bugWidth*7), y: canvas.height - BugPic.height - 125, image: BugPic}),

    new Bug({x: 23000, y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 23000, y: canvas.height - BugPic.height*2 - 125, image: BugPic}),
    new Bug({x: 23000, y: canvas.height - BugPic.height*3 - 125, image: BugPic}),
    new Bug({x: 23000, y: canvas.height - BugPic.height*4 - 125, image: BugPic}),
    
    new Bug({x: 27000, y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 27000, y: canvas.height - BugPic.height*2 - 125, image: BugPic}),
    new Bug({x: 27000, y: canvas.height - BugPic.height*3 - 125, image: BugPic}),
    // new Bug({x: 27000, y: canvas.height - BugPic.height*4 - 125, image: BugPic}),
    // new Bug({x: 27000, y: canvas.height - BugPic.height*5 - 125, image: BugPic}),
    
    new Bug({x: 31500, y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 31500+(bugWidth), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 31500+(bugWidth*2), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 31500+(bugWidth*3), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 31500+(bugWidth*4), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 31500+(bugWidth*5), y: canvas.height - BugPic.height - 125, image: BugPic}),
    new Bug({x: 31500+(bugWidth*6), y: canvas.height - BugPic.height - 125, image: BugPic}),
    // new Bug({x: 31500+(bugWidth*7), y: canvas.height - BugPic.height - 125, image: BugPic}),
]

moveBug1 = 13000
movingBugs = [ 
    new Bug({x: moveBug1, y: canvas.height - BugPic.height - 125, image: BugPic}),
    // new Bug({x: moveBug1+200, y: canvas.height - BugPic.height - 125, image: BugPic}),
]

} // ------------------------------ END OF INIT() ------------------------------ //



// ------ frame/refresh rate limiting code: variables: start ------ //
let fps = 60;
let now;
let then = Date.now();
let interval = 1000/fps;
let delta;
// ------ frame/refresh rate limiting code: variables: end ------ //

function animateTitle(array) {
    if (array.length > 0 ) {
        setTimeout( function () {       
            let firstCharacter = array.shift();
            array.push(firstCharacter);
            
            titleString = array.join(''); 
            document.title = titleString
            // console.log('titleString', titleString);

            array = titleString.split('');
            // console.log('joined version:', array.join(''));
            animateTitle(array);
        }, 250 );
    }
}
let originalString = 'Nate Notermanns Video Game Resume - '
let array = originalString.split('')
// let array = ['N', 'a', 't', 'e', ' ', 'N','o', 't', 'e','r','m','a','n','n','s',' ', 'V','i', 'd', 'e','o','-','g','a','m','e',' ','R','e','s','u','m','e',];

// ---- Animated favicon loop ---- //
const faviconImages = [
    "icoFrames/favicon export_00000.ico",
    "icoFrames/favicon export_00001.ico",
    "icoFrames/favicon export_00002.ico",
    "icoFrames/favicon export_00003.ico",
    "icoFrames/favicon export_00004.ico",
    "icoFrames/favicon export_00005.ico",
    "icoFrames/favicon export_00006.ico",
    "icoFrames/favicon export_00007.ico",
    "icoFrames/favicon export_00008.ico",
    "icoFrames/favicon export_00009.ico",
    "icoFrames/favicon export_00010.ico",
    "icoFrames/favicon export_00011.ico",
    "icoFrames/favicon export_00012.ico",
    "icoFrames/favicon export_00013.ico",
    "icoFrames/favicon export_00014.ico",
    "icoFrames/favicon export_00015.ico",
    "icoFrames/favicon export_00016.ico",
    "icoFrames/favicon export_00017.ico",
    "icoFrames/favicon export_00018.ico",
    "icoFrames/favicon export_00019.ico",
    "icoFrames/favicon export_00020.ico",
    "icoFrames/favicon export_00021.ico",
    "icoFrames/favicon export_00022.ico",
    "icoFrames/favicon export_00023.ico",
    "icoFrames/favicon export_00024.ico",
    "icoFrames/favicon export_00025.ico",
    "icoFrames/favicon export_00026.ico",
    "icoFrames/favicon export_00027.ico",
    "icoFrames/favicon export_00028.ico",
    "icoFrames/favicon export_00029.ico"
]

let faviconNumber = 0
function changeFavicon() {
    // console.log(faviconNumber);
    const faviconElement = document.getElementById('favicon');
    let newFaviconPath = faviconImages[faviconNumber];
    faviconElement.href = newFaviconPath
    if (faviconNumber > 28){
        faviconNumber = 0
    }else {
        faviconNumber ++
    }
}
setInterval(changeFavicon, 100);
// ---- Animated favicon loop ---- //

// let string = 'Nate Notermanns Video Game Resume '
animateTitle(array);


// ---------------- Player GLOW ---------------- //
// function changeColor(){
//     setInterval(()=>{
//         if(glowPlayer){
//             if(number2 > playerColor.length -1) {
//                 number2 = 0  
//             } else {
//                 number2 ++
//             }
//         }
//     },300)
// }
// changeColor();
// ---------------- Player GLOW ---------------- //




// ------ New Move Left function
function moveLeft(){
     
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
    movingPlatform2.forEach(platform => { // loop through array of platforms
        // console.log('platformNull', platformNull.position.x);
        platform.position.x -= playerMovement
    });
    buildingRestaurant.forEach(building => { // ---- building SCROLL ----
        building.position.x -= (playerMovement)
    });
    buildingMCTC.forEach(building => { // ---- building SCROLL ----
        building.position.x -= (playerMovement)
    });
    buildingFreelance.forEach(building => { // ---- building SCROLL ----
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
    powerUps1.forEach(building => { // ---- building SCROLL ----
        building.position.x -= (playerMovement)
    });
    powerUps2.forEach(building => { // ---- building SCROLL ----
        building.position.x -= (playerMovement)
    });
    powerUps3.forEach(building => { // ---- building SCROLL ----
        building.position.x -= (playerMovement)
    });
    arrowArray.forEach(arrowArray => { // ---- building SCROLL ----
        arrowArray.position.x -= (playerMovement)
    });
    WinBar2Item.forEach(WinBar2 => { // ---- building SCROLL ----
        WinBar2.position.x -= (playerMovement)
    });
    WinBar3Item.forEach(WinBar3 => { // ---- building SCROLL ----
        WinBar3.position.x -= (playerMovement)
    });
    bugs.forEach(bug => { // ---- building SCROLL ----
        bug.position.x -= (playerMovement)
    });
    movingBugs.forEach(bug => { // ---- building SCROLL ----
        bug.position.x -= (playerMovement)
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
}


// ------- New move right function ------- //
function moveRight(){
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
    movingPlatform2.forEach(platform => { // loop through array of platforms
        platform.position.x += playerMovement
    });
    buildingRestaurant.forEach(building => { // ---- Building SCROLL ----
        building.position.x += (playerMovement)
    });
    buildingMCTC.forEach(building => { // ---- Building SCROLL ----
        building.position.x += (playerMovement)
    });
    buildingFreelance.forEach(building => { // ---- Building SCROLL ----
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
    powerUps1.forEach(building => { // ---- Building SCROLL ----
        building.position.x += (playerMovement)
    });
    powerUps2.forEach(building => { // ---- Building SCROLL ----
        building.position.x += (playerMovement)
    });
    powerUps3.forEach(building => { // ---- Building SCROLL ----
        building.position.x += (playerMovement)
    });
    arrowArray.forEach(arrowArray => { // ---- Building SCROLL ----
        arrowArray.position.x += (playerMovement)
    });
    WinBar3Item.forEach(WinBar3 => { // ---- Building SCROLL ----
        WinBar3.position.x += (playerMovement)
    });
    WinBar2Item.forEach(WinBar2 => { // ---- Building SCROLL ----
        WinBar2.position.x += (playerMovement)
    });
    bugs.forEach(bug => { // ---- Building SCROLL ----
        bug.position.x += (playerMovement)
    });
    movingBugs.forEach(bug => { // ---- Building SCROLL ----
        bug.position.x += (playerMovement)
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
}



function drawStuff(){

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
    buildingRestaurant.forEach(building => { 
        building.draw()    
        building.update()
    }) 
    buildingMCTC.forEach(building => { // loop through array of buildingMCTC
        building.draw()     // ------ DRAW buildingMCTC
        building.update()
    }) 
    buildingFreelance.forEach(building => { // loop through array of buildingMCTC
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
    powerUps1.forEach(building => { // loop through array of buildingCBRE
        building.draw()     // ------ DRAW buildingHGA
        building.update()
    }) 
    powerUps2.forEach(building => { // loop through array of buildingCBRE
        building.draw()     // ------ DRAW buildingHGA
        building.update()
    }) 
    powerUps3.forEach(building => { // loop through array of buildingCBRE
        building.draw()     // ------ DRAW buildingHGA
        building.update()
    }) 
    arrowArray.forEach(arrowArray1 => { // loop arrow sign frames
        arrowArray1.draw() 
        arrowArray1.update()
    })
    
    WinBar3Item.forEach(WinBar3 => { // loop through array of Platforms
            WinBar3.position.y += 2 * direction2;
        if(WinBar3.position.y <= (canvas.height - WinBar3.height - 425) 
        || WinBar3.position.y >= (canvas.height - WinBar3.height - 125)){
            direction2 *= -1
        }
        WinBar3.draw() // ------ DRAW PLATFORMd
    })
    
    whiteItem.forEach(item => { // White rectangle 
        if (whiteStart ){
            item.opacity = 1
            win = false
            lose = false
            whiteStart = false
        } else if (item.opacity > 0.01){
            item.opacity -= 0.01
        } else {
            item.opacity = 0
        }
        // console.log(item.opacity);
        item.draw() 
    })

    blackItem.forEach(item => { // Black rectangle 
        if (blackStart){
            item.opacity += 0.01
            // console.log('black win');
            win = false
            lose = false
        } else {
            item.opacity = 0
        }
        item.draw() 
    })

    platformTwos.forEach(plate => {
        plate.draw()
    })
    platforms.forEach(platform => { // loop through array of Platforms
        platform.draw() // ------ DRAW PLATFORM
    })
    platformNull.forEach(platform => { // loop through array of Platforms
        platform.draw() // ------ DRAW PLATFORM
    })
    movingPlatform1.forEach(movingPlatform => { // loop through array of Platforms
            movingPlatform.position.x += 2 * direction; // ------ Platform Move Loop -------         
            if (movingPlatform.position.x <= currentNullPosition+movePlate1 || movingPlatform.position.x >= currentNullPosition+(movePlate1+500) ){
                direction *= -1; // ---- reverse platform move direction
            }
        movingPlatform.draw() // ------ DRAW PLATFORMd
    })
    movingPlatform2.forEach(movingPlatform => { // loop through array of Platforms
            movingPlatform.position.x += 2 * direction; // ------ Platform Move Loop -------         
            if (movingPlatform.position.x <= currentNullPosition+movePlate1 || movingPlatform.position.x >= currentNullPosition+(movePlate1+500) ){
                direction *= -1; // ---- reverse platform move direction
            }
        movingPlatform.draw() // ------ DRAW PLATFORMd
    })

    bugs.forEach(bug => { // loop through array of 
        bug.draw() // ------ DRAW 
    })
    movingBugs.forEach(bug => { // loop through array of 
        bug.position.x += 2 * direction; // ------ Platform Move Loop -------         
        if (bug.position.x <= currentNullPosition+moveBug1 || bug.position.x >= currentNullPosition+(moveBug1+500) ){
            direction *= -1; // ---- reverse platform move direction
        }
        // console.log('Null', currentNullPosition + moveBug1, 'bug', bug.position.x, 'moveBug1', moveBug1, 'currentNullPosition+(moveBug1+500)', currentNullPosition+(moveBug1+500));
        // console.log(bug.position.x);
        bug.draw() // ------ DRAW 
    })

       player.update() // ------ PLAYER UPDATE. Call this last, to render in front

    WinBar2Item.forEach(WinBar2 => { // loop through array of Platforms
        WinBar2.draw() // ------ DRAW PLATFORM
    })

}





//  comment ing to push





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
    // console.log('sco', scrollOffset);

    // ---------------- PLAYER SPEED & SIZE POWER UP ---------------- //
    // if(scrollOffset >= 25000){
    //     playerMovement = 40
    //         if (playerSize < 4){
    //             playerSize =  4
    //             player = new Player()
    //             console.log('bigger');
    //         }
    //     glowPlayer = true

    //     // if(number2 > playerColor.length -1) {
    //     //  number2 = 0  
    //     // } else {
    //     //     number2 ++
    //     // }
    //     console.log('n2', number2);
    //     console.log('speed boost');
    // }
    // console.log('psize', playerSize);
    // ---------------- PLAYER SPEED & SIZE POWER UP ---------------- //

    // ------ NEW DRAW FUNCTION ------ //
     drawStuff()       
    // sky.forEach(sky => { // loop through array of Backgrounds
    //     sky.position.x += (0.3 * time)
    //     if (sky.position.x > canvas.width) {
    //         sky.position.x = -skyWidth;
    //       }
    //     sky.draw() // ------ DRAW BACKGROUND
    // })
    // backgrounds.forEach(background => { // loop through array of Backgrounds
    //     background.draw() // ------ DRAW BACKGROUND
    // })
    // midgrounds.forEach(midground => { // loop through array of midgrounds
    //     midground.draw() // ------ DRAW BACKGROUND
    // })
    // foregrounds.forEach(foreground => { // loop through array of midgrounds
    //     foreground.draw() // ------ DRAW BACKGROUND
    // })
    // buildingRestaurant.forEach(building => { 
    //     building.draw()    
    //     building.update()
    // }) 
    // buildingMCTC.forEach(building => { // loop through array of buildingMCTC
    //     building.draw()     // ------ DRAW buildingMCTC
    //     building.update()
    // }) 
    // buildingFreelance.forEach(building => { // loop through array of buildingMCTC
    //     building.draw()     // ------ DRAW buildingMCTC
    //     building.update()
    // }) 
    // buildingCOYOTE.forEach(building => { // loop through array of buildingCOYOTE
    //     building.draw()     // ------ DRAW buildingCOYOTE
    //     building.update()
    // }) 
    // buildingCBRE.forEach(building => { // loop through array of buildingCBRE
    //     building.draw()     // ------ DRAW buildingCBRE
    //     building.update()
    // }) 
    // elementsPRIME.forEach(element => { // loop through array of buildingCBRE
    //     element.draw()     // ------ DRAW buildingCBRE
    //     element.update()
    // }) 
    // buildingPRIME.forEach(building => { // loop through array of buildingCBRE
    //     building.draw()     // ------ DRAW buildingCBRE
    //     building.update()
    // }) 
    // buildingHGA.forEach(building => { // loop through array of buildingCBRE
    //     building.draw()     // ------ DRAW buildingHGA
    //     building.update()
    // }) 
    // powerUps1.forEach(building => { // loop through array of buildingCBRE
    //     building.draw()     // ------ DRAW buildingHGA
    //     building.update()
    // }) 
    // powerUps2.forEach(building => { // loop through array of buildingCBRE
    //     building.draw()     // ------ DRAW buildingHGA
    //     building.update()
    // }) 
    // powerUps3.forEach(building => { // loop through array of buildingCBRE
    //     building.draw()     // ------ DRAW buildingHGA
    //     building.update()
    // }) 
    // arrowArray.forEach(arrowArray1 => { // loop arrow sign frames
    //     arrowArray1.draw() 
    //     arrowArray1.update()
    // })
    
    // WinBar3Item.forEach(WinBar3 => { // loop through array of Platforms
    //         WinBar3.position.y += 2 * direction2;
    //     if(WinBar3.position.y <= (canvas.height - WinBar3.height - 425) 
    //     || WinBar3.position.y >= (canvas.height - WinBar3.height - 125)){
    //         direction2 *= -1
    //     }
    //     WinBar3.draw() // ------ DRAW PLATFORMd
    // })
    
    // whiteItem.forEach(item => { // White rectangle 
    //     if (whiteStart ){
    //         item.opacity = 1
    //         win = false
    //         lose = false
    //         whiteStart = false
    //     } else if (item.opacity > 0.01){
    //         item.opacity -= 0.01
    //     } else {
    //         item.opacity = 0
    //     }
    //     // console.log(item.opacity);
    //     item.draw() 
    // })

    // blackItem.forEach(item => { // Black rectangle 
    //     if (blackStart){
    //         item.opacity += 0.01
    //         // console.log('black win');
    //         win = false
    //         lose = false
    //     } else {
    //         item.opacity = 0
    //     }
    //     item.draw() 
    // })

    // platformTwos.forEach(plate => {
    //     plate.draw()
    // })
    // platforms.forEach(platform => { // loop through array of Platforms
    //     platform.draw() // ------ DRAW PLATFORM
    // })
    // platformNull.forEach(platform => { // loop through array of Platforms
    //     platform.draw() // ------ DRAW PLATFORM
    // })
    // movingPlatform1.forEach(movingPlatform => { // loop through array of Platforms
    //         movingPlatform.position.x += 2 * direction; // ------ Platform Move Loop -------         
    //         if (movingPlatform.position.x <= currentNullPosition+movePlate1 || movingPlatform.position.x >= currentNullPosition+(movePlate1+500) ){
    //             direction *= -1; // ---- reverse platform move direction
    //         }
    //     movingPlatform.draw() // ------ DRAW PLATFORMd
    // })
    // movingPlatform2.forEach(movingPlatform => { // loop through array of Platforms
    //         movingPlatform.position.x += 2 * direction; // ------ Platform Move Loop -------         
    //         if (movingPlatform.position.x <= currentNullPosition+movePlate1 || movingPlatform.position.x >= currentNullPosition+(movePlate1+500) ){
    //             direction *= -1; // ---- reverse platform move direction
    //         }
    //     movingPlatform.draw() // ------ DRAW PLATFORMd
    // })

    // bugs.forEach(bug => { // loop through array of 
    //     bug.draw() // ------ DRAW 
    // })
    // movingBugs.forEach(bug => { // loop through array of 
    //     bug.position.x += 2 * direction; // ------ Platform Move Loop -------         
    //     if (bug.position.x <= currentNullPosition+moveBug1 || bug.position.x >= currentNullPosition+(moveBug1+500) ){
    //         direction *= -1; // ---- reverse platform move direction
    //     }
    //     // console.log('Null', currentNullPosition + moveBug1, 'bug', bug.position.x, 'moveBug1', moveBug1, 'currentNullPosition+(moveBug1+500)', currentNullPosition+(moveBug1+500));
    //     // console.log(bug.position.x);
    //     bug.draw() // ------ DRAW 
    // })

    //    player.update() // ------ PLAYER UPDATE. Call this last, to render in front

    // WinBar2Item.forEach(WinBar2 => { // loop through array of Platforms
    //     WinBar2.draw() // ------ DRAW PLATFORM
    // })

    // console.log('player X:', player.position.x + scrollOffset);
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

            hitSprite()

    // ------------ IF VELOCITY IS 0, then.. ------------
    } else { // If player is NOT moving left/right then..
        player.velocity.x = 0
    // ------ PLAYER MOVEMENT END ------

    // ------ IF VELOCITY IS STILL 0, AND  L/R PRESSED ------ 
        // ------------ PLATFORM SCROLL LEFT/RIGHT ------------
        if (keys.right.pressed || rightPressed) { // if right key is pressed, move platform to the left by playMovement
            scrollOffset +=playerMovement // record how much platforms are offsetting

            // ------------ NEW MOVE LEFT FUNCTION  ------------ //
            moveLeft()
            // platformTwos.forEach(platformTwo => { // loop through array of platforms
            //     platformTwo.position.x -= playerMovement
            // });
            // platforms.forEach(platform => { // loop through array of platforms
            //     // platform.draw() // ------ PLATFORM INITIAL DRAW 
            //     platform.position.x -= playerMovement
            // });
            // platformNull.forEach(platform => { // loop through array of platforms
            //     // platform.draw() // ------ PLATFORM INITIAL DRAW 
            //     platform.position.x -= playerMovement
            //     currentNullPosition -= playerMovement
            // });
            // movingPlatform1.forEach(platform => { // loop through array of platforms
            //     // console.log('platformNull', platformNull.position.x);
            //     platform.position.x -= playerMovement
            // });
            // movingPlatform2.forEach(platform => { // loop through array of platforms
            //     // console.log('platformNull', platformNull.position.x);
            //     platform.position.x -= playerMovement
            // });
            // buildingRestaurant.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // buildingMCTC.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // buildingFreelance.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // buildingCOYOTE.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // buildingCBRE.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // elementsPRIME.forEach(element => { // ---- building SCROLL ----
            //     element.position.x -= (playerMovement)
            // });
            // buildingPRIME.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // buildingHGA.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // powerUps1.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // powerUps2.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // powerUps3.forEach(building => { // ---- building SCROLL ----
            //     building.position.x -= (playerMovement)
            // });
            // arrowArray.forEach(arrowArray => { // ---- building SCROLL ----
            //     arrowArray.position.x -= (playerMovement)
            // });
            // WinBar2Item.forEach(WinBar2 => { // ---- building SCROLL ----
            //     WinBar2.position.x -= (playerMovement)
            // });
            // WinBar3Item.forEach(WinBar3 => { // ---- building SCROLL ----
            //     WinBar3.position.x -= (playerMovement)
            // });
            // bugs.forEach(bug => { // ---- building SCROLL ----
            //     bug.position.x -= (playerMovement)
            // });
            // movingBugs.forEach(bug => { // ---- building SCROLL ----
            //     bug.position.x -= (playerMovement)
            // });
            // sky.forEach(sky => { // ---- BACKGROUND SCROLL ----
            //     sky.position.x -= (playerMovement/30)
            // });
            // backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
            //     background.position.x -= (playerMovement/8)
            // });
            // midgrounds.forEach(midground => { // ---- BACKGROUND SCROLL ----
            //     midground.position.x -= (playerMovement/6)
            // });
            // foregrounds.forEach(foreground => { // ---- BACKGROUND SCROLL ----
            //     foreground.position.x -= (playerMovement/2)
            // });
            // console.log('move = 0, but SCROLLING----R----');
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
        } else if((keys.left.pressed && player.position.x > 0) || ( leftPressed && player.position.x > 0)) {  // if left key pressed & player.X GREATER than 0, move platform to the right by playMovement
            scrollOffset -=playerMovement // record how much platforms are offsetting
            

            // ------------ NEW MOVE LEFT FUNCTION  ------------ //
            moveRight()
            // platformTwos.forEach(platformTwo => { // loop through array of platforms
            //     platformTwo.position.x += playerMovement
            // });
            // platforms.forEach(platform => { // loop through array of platforms
            //     // platform.draw() // ------ PLATFORM INITIAL DRAW 
            //     platform.position.x += playerMovement
            // });
            // platformNull.forEach(platform => { // loop through array of platforms
            //     platform.position.x += playerMovement
            //     currentNullPosition += playerMovement
            // });
            // movingPlatform1.forEach(platform => { // loop through array of platforms
            //     platform.position.x += playerMovement
            // });
            // movingPlatform2.forEach(platform => { // loop through array of platforms
            //     platform.position.x += playerMovement
            // });
            // buildingRestaurant.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // buildingMCTC.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // buildingFreelance.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // buildingCOYOTE.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // buildingCBRE.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // elementsPRIME.forEach(element => { // ---- Building SCROLL ----
            //     element.position.x += (playerMovement)
            // });
            // buildingPRIME.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // buildingHGA.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // powerUps1.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // powerUps2.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // powerUps3.forEach(building => { // ---- Building SCROLL ----
            //     building.position.x += (playerMovement)
            // });
            // arrowArray.forEach(arrowArray => { // ---- Building SCROLL ----
            //     arrowArray.position.x += (playerMovement)
            // });
            // WinBar3Item.forEach(WinBar3 => { // ---- Building SCROLL ----
            //     WinBar3.position.x += (playerMovement)
            // });
            // WinBar2Item.forEach(WinBar2 => { // ---- Building SCROLL ----
            //     WinBar2.position.x += (playerMovement)
            // });
            // bugs.forEach(bug => { // ---- Building SCROLL ----
            //     bug.position.x += (playerMovement)
            // });
            // movingBugs.forEach(bug => { // ---- Building SCROLL ----
            //     bug.position.x += (playerMovement)
            // });
            // sky.forEach(sky => { // ---- BACKGROUND SCROLL ----
            //     sky.position.x += (playerMovement/30)
            // });
            // backgrounds.forEach(background => { // ---- BACKGROUND SCROLL ----
            //     background.position.x += (playerMovement/8)
            // });
            // midgrounds.forEach(midground => { // ---- BACKGROUND SCROLL ----
            //     midground.position.x += (playerMovement/6)
            // });
            // foregrounds.forEach(foreground => { // ---- BACKGROUND SCROLL ----
            //     foreground.position.x += (playerMovement/2)
            // });
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
        hitSprite()
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
    // ------ MOVING PLATFORM COLLISION DETECTION ------ // 
    movingPlatform2.forEach(platform => { 
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

    bugs.forEach(bug => { 
        let adjust = 30
        if ( 
            player.position.y + player.height >= bug.position.y + adjust && // Bug Top
            player.position.y <= bug.position.y + bug.height - adjust && // Bug Bottom
            player.position.x + player.width >= bug.position.x + adjust && // Bug Right
            player.position.x <= bug.position.x + bug.width - adjust //  Bug Left
            ) 
        {   
            hitTaken()
        }

            loseReason = 'bug'
            death()
        }) 
        
        movingBugs.forEach(bug => { 
            let adjust = 30
            if ( 
                player.position.y + player.height >= bug.position.y + adjust && // Bug Top
                player.position.y <= bug.position.y + bug.height - adjust && // Bug Bottom
                player.position.x + player.width >= bug.position.x + adjust && // Bug Right
                player.position.x <= bug.position.x + bug.width - adjust //  Bug Left
                ) 
            {   
                hitTaken() 
                // loseReason = 'bug'
                // lose = true
                // whiteStart = true
                // loseModalOn()
                // init();
            } 
                loseReason = 'bug'
                death()
    }) 


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
            } else if (glowFreelance) {
                FreelanceModal = true
                modalFreelanceOn()
                // console.log('Freelance Modal On');
            } else if (glowRestaurant) {
                RestaurantModal = true
                modalRestaurantOn()
                // console.log('Freelance Modal On');
            } else if (glowPowerUp1) {  // JUMP
                powerUp1 = true
                glowPlayer = true
                jump = 55
                console.log('powerUp1');
            } else if (glowPowerUp2){   // SPEED
                powerUp2 = true
                glowPlayer = true
                playerMovement = 40
                // gravity = 2
                console.log(gravity);
                console.log('powerUp2');
            } else if (glowPowerUp3){   // SIZE
                powerUp3 = true
                glowPlayer = true
                playerSize = 4
                player = new Player()
                console.log('powerUp3');
            }
        }
    }
    // building Restaurant
    buildingRestaurant.forEach(buildingRestaurant=> {
        if (
            player.position.x < buildingRestaurant.position.x + buildingRestaurant.width // player left plat right
            && player.position.x + player.width > buildingRestaurant.position.x   // player right plat left 
            && player.position.y < buildingRestaurant.position.y + buildingRestaurant.height // player top UNDER plat bottom
            && player.position.y + player.height > buildingRestaurant.position.y  // player bottom ABOVE plat top 
        ) {
            glowRestaurant = true
            xPressed()
        } else {
            glowRestaurant = false
        }
    })
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
    //building Freelance
    buildingFreelance.forEach(freelance => {
        if (
            player.position.x < freelance.position.x + freelance.width // player left plat right
            && player.position.x + player.width > freelance.position.x   // player right plat left 
            && player.position.y < freelance.position.y + freelance.height // player top UNDER plat bottom
            && player.position.y + player.height > freelance.position.y  // player bottom ABOVE plat top 
        ) {
            glowFreelance = true
            xPressed()
        } else {
            glowFreelance = false
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
    //powerUps1
    powerUps1.forEach(powerUp => {
        if (
            player.position.x < powerUp.position.x + powerUp.width // player left plat right
            && player.position.x + player.width > powerUp.position.x   // player right plat left 
            && player.position.y < powerUp.position.y + powerUp.height // player top UNDER plat bottom
            && player.position.y + player.height > powerUp.position.y  // player bottom ABOVE plat top 
        ) {
            glowPowerUp1 = true
            xPressed()
        } else {
            glowPowerUp1= false
        }
    })
    //powerUps2
    powerUps2.forEach(powerUp => {
        if (
            player.position.x < powerUp.position.x + powerUp.width // player left plat right
            && player.position.x + player.width > powerUp.position.x   // player right plat left 
            && player.position.y < powerUp.position.y + powerUp.height // player top UNDER plat bottom
            && player.position.y + player.height > powerUp.position.y  // player bottom ABOVE plat top 
        ) {
            glowPowerUp2 = true
            xPressed()
        } else {
            glowPowerUp2= false
        }
    })
    //powerUps3
    powerUps3.forEach(powerUp => {
        if (
            player.position.x < powerUp.position.x + powerUp.width // player left plat right
            && player.position.x + player.width > powerUp.position.x   // player right plat left 
            && player.position.y < powerUp.position.y + powerUp.height // player top UNDER plat bottom
            && player.position.y + player.height > powerUp.position.y  // player bottom ABOVE plat top 
        ) {
            glowPowerUp3 = true
            xPressed()
        } else {
            glowPowerUp3= false
        }
    })

    function pressX() {
        if (glowHGA || glowPRIME || glowCBRE || glowCOYOTE || glowMCTC || glowFreelance || glowRestaurant || glowPowerUp1 || glowPowerUp2 || glowPowerUp3){
            pressX = true
            PressXDiv.style.opacity = 1;
            // console.log('glowing');
        } else {
            pressX = false
            PressXDiv.style.opacity = 0;
            // console.log('NOT glowing');
        }
    }
    pressX() 
    // ---- WIN SCROLL ----
    // if (scrollOffset > 1500) {
        // console.log('scroll', scrollOffset);
    if (scrollOffset > 41100 -500) {
        // console.log('You WIN!!!');
        win = true
        winHandled = true
        blackStart = true
        whiteStart  = true
        winModalOn()
        scrollOffset = 0
        // console.log('You WIN!!!', scrollOffset, '>', platformImage.width * 6); // Confirm winning area location it correct
    }
    // ---- LOOSE SCROLL ----
    if (player.position.y > (canvas.height) ){
        lose = true
        loseStart = true
        whiteStart  = true
        loseReason = 'fall'
        loseModalOn()
        init();

    }
    // if (player.position.y < 50 ){
    //     console.log('false start!!');
    //     init();
    // }
    ifNoGlow()
    controllerInput()
    checkButtonPressed()
    requestAnimationFrame(animate) 
}

init() // Restarts Game
animate()

// ---- LISTEN FOR A KEY PRESSED ----
addEventListener('keydown', ({keyCode, key}, ) => { // keyCode is event.keyCode, key is event.key. ONLY works if they're listed in the EventListener
    // console.log('event', event, 'keyCode:', event.keyCode, 'Key:', event.key); // check Key Pressed
    if(!helpModal && !MCTCModal && !CoyoteModal && !CBREModal && !PrimeModal && !HGAModal && !winModal && !loseModal && !RestaurantModal){
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
    if( !glowMCTC && !glowCOYOTE && !glowCBRE && !glowPRIME && !glowHGA && !glowFreelance){
        modalHGAOff()
        modalPrimeOff()
        modalCBREOff()
        modalCoyoteOff()
        modalMCTCOff()
        modalFreelanceOff()
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
    modalCBRE.style.display = 'flex'
}
  // ---- modalHGA OFF ----
function modalCBREOff(){
    CBREModal = false
    modalCBRE.style.display = 'none'
}


// -------------------- modalCoyote ON --------------------
 function modalCoyoteOn(){
    CoyoteModal = true
    modalCoyote.style.display = 'flex'
}
  // ---- modalHGA OFF ----
function modalCoyoteOff(){
    CoyoteModal = false
    modalCoyote.style.display = 'none'
}


// -------------------- modalMCTC ON --------------------
 function modalRestaurantOn(){
    RestaurantModal = true
    modalRestaurant.style.display = 'flex'
}
// -------------------- modalMCTC ON --------------------
 function modalRestaurantOff(){
    RestaurantModal = false
    modalRestaurant.style.display = 'none'
}
// -------------------- modalMCTC ON --------------------
 function modalMCTCOn(){
    MCTCModal = true
    modalMCTC.style.display = 'flex'
}
  // ---- modalHGA OFF ----
function modalMCTCOff(){
    MCTCModal = false
    modalMCTC.style.display = 'none'
}
// -------------------- modalFreelance ON --------------------
 function modalFreelanceOn(){
    FreelanceModal = true
    modalFreelance.style.display = 'flex'
}
  // ---- modalHGA OFF ----
function modalFreelanceOff(){
    FreelanceModal = false
    modalFreelance.style.display = 'none'
}


 // -------------------- modalHelp ON --------------------
 function helpModalOn(){
    helpModal = true
    modalHelp.style.display = 'flex'
}
// ---- modalHelp OFF ----
function helpModalOff(){
    helpModal = false
    modalHelp.style.display = 'none'
}
// -------------------- modalWin ON --------------------
function winModalOn(){
   winModal = true
   setTimeout(()=>{
       modalWin.style.display = 'flex'
   }, 1500)
}
// -------------------- Lose modal ON --------------------
function loseModalOn(){
    loseModal = true
    if (loseReason == 'bug') {
        loseParagraph.textContent = 'Your code has a bug, you lose!';   
    } else if (loseReason == 'fall') {
        loseParagraph.textContent = 'Player fell off. You lose :(';   
    } 
    // console.log('lose Reason:',loseReason);
    modalLose.style.display = 'flex'
    setInterval(function() {
        modalLose.style.display = 'none'
    }, 4000);     
}

    
// ---- Click listener for Lose Close button -- 
closeLose.addEventListener('click', function() {
    setTimeout(function() {
        modalLose.style.display = 'none';
        loseModal = false
    }, 100); 
    // console.log('btncloseHGA clicked');
})


// ---- Click listener for Win Close button -- 
closeButtonWin.addEventListener('click', function() {
    // setTimeout(function() {
    //     modalWin.style.display = 'none';
    // }, 100); 
    modalWin.style.display = 'none'
    init();
})





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
// ---- Click listener for CBRE Close button -- 
closeButtonFreelance.addEventListener('click', function() {
    setTimeout(modalFreelanceOff, 100); 
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

// ---- Click listener for Restaurant Close button -- 
closeButtonRestaurant.addEventListener('click', function() {
    setTimeout(modalRestaurantOff, 100); 
    // console.log('closeButtonRestaurant clicked');
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

 // Add touchstart event listener
//  arrowRight.addEventListener('touchstart', handleTouchStart, false);
 arrowRight.addEventListener('touchstart', handleTouchStart, { passive: true });
 arrowLeft.addEventListener('touchstart', handleTouchStart, { passive: true });
 arrowUp.addEventListener('touchstart', handleTouchStart, { passive: true });
 buttonA.addEventListener('touchstart', handleTouchStart, { passive: true });
 buttonX.addEventListener('touchstart', handleTouchStart, { passive: true });
//  buttonHelp2.addEventListener('touchstart', handleTouchStart, false);

 // Add touchend event listener
 arrowRight.addEventListener('touchend', handleTouchEnd, { passive: true });
 arrowLeft.addEventListener('touchend', handleTouchEnd, { passive: true });
 arrowUp.addEventListener('touchend', handleTouchEnd, { passive: true });
 buttonA.addEventListener('touchend', handleTouchEnd, { passive: true });
 buttonX.addEventListener('touchend', handleTouchEnd, { passive: true });
//  buttonHelp2.addEventListener('touchend', handleTouchEnd, false);

 // Add click event listener
 buttonHelp2.addEventListener('click', handleClick, false);

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
        // console.log(id);
}
   // Prevent default behavior
//    event.preventDefault();

   // Get the touch coordinates
   startX = event.touches[0].clientX;
   startY = event.touches[0].clientY;
    
//    console.log('start touch');
   // Add visual feedback if needed
//    touchArea.style.backgroundColor = '#aaa';
 }

 function handleTouchEnd(event) {
   // Prevent default behavior
//    event.preventDefault();

   // Get the touch coordinates
   var endX = event.changedTouches[0].clientX;
   var endY = event.changedTouches[0].clientY;

   // Check for a swipe or tap gesture based on start and end coordinates
   // --------------- turned off checking for swipe ------------ //
//    if (Math.abs(endX - startX) < 50 && Math.abs(endY - startY) < 50) {
    // --------------- turned off checking for swipe ------------ //
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
        // console.log(id, 'off');
    }
    // console.log('end touch');
    // --------------- turned off checking for swipe ------------ //
//    } else {
     // It's a swipe gesture
    //  alert('Swipe!');
//    }
// --------------- turned off checking for swipe ------------ //
   // Reset visual feedback if needed
//    touchArea.style.backgroundColor = '#ccc';
 }

function hitTaken() {
    if(canHurt){
        // Tempsprite = player.currentSprite
       health -= 10
    //    player.currentSprite = player.sprites.stand.left
       canHurt = false
    //    console.log('Hit taken!');
       gsap.to('#player1Health', {
        width: health + '%'
    })
       // -- after health lowered, wait 1 sec before player can get hurt again
       setTimeout(()=> {
           canHurt = true
        //    console.log('can hurt again');
       }, 500)
   }
//    console.log('health:', health);
}

function death(){
    if(health <= 0) {
        lose = true 
        whiteStart = true
        loseModalOn()
        init();
    } 
}

function hitSprite(){
    if(!canHurt){
        // player.currentSprite = player.sprites.run.left
        // player.currentCropWidth = player.sprites.run.cropWidth
        // player.width = player.sprites.run.width
        console.log('hit sprite');
    }
}

function handleClick() {
    if(!MCTCModal && !CoyoteModal && !CBREModal && !PrimeModal && !HGAModal && !mobileModal){          
        // console.log('No building modals are open');
        helpModal = !helpModal
        // console.log(keys.QuestionMark.pressed);
        if (helpModal) {
            helpModalOn()
        } else {
            helpModalOff()
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