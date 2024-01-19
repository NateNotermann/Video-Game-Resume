// classes are a blueprint for creating objects that share the same properties and methods.

// -------- PLAYER CLASS -------- //
class Player {
    constructor() { //  passing in x & y positions
        this.position = {
            x: 500,
            y: canvas.height - 550
        }
        this.velocity = { 
             x: 0, // positive values move right, negative values more left.
             y: 1 // positive values move down, negative values move up
        }
        // this.width = (66*playerSize) //default width // Turned off on 12/27/23 (gets set in this.sprites)
        this.height = (150*playerSize) //default height

        this.image = spriteStandRight
        this.frames = 0
        this.sprites = {
            stand: {
                right: spriteStandRight,
                left: spriteStandLeft,
                cropWidth: 177,
                width: (66*playerSize)
            },
            run: {
                right: spriteRunRight,
                left: spriteRunLeft,
                cropWidth: 341,
                width: (127.875*playerSize)
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }
    draw() { 
        c.fillStyle = 'blue' // draw a rectangle that matches the size and position of the Player Sprite
        c.fillRect(this.position.x + 20,  this.position.y, this.width * .8, this.height)

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
            || this.currentSprite === this.sprites.stand.left)) { // loop every 60 frames. 
            this.frames = 0 
        } else if (this.frames > 29 && 
            (this.currentSprite === this.sprites.run.right 
            || this.currentSprite === this.sprites.run.left)) { // loop every 30 frames. 
            this.frames = 0 
        } 
        this.draw()
        this.position.x += this.velocity.x // add/increase velocity (X axes only)(aka Movement) 
        this.position.y += this.velocity.y // add/increase velocity (Y axes only)(aka Gravity) 

        if (this.position.y + this.height + this.velocity.y <= canvas.height )//+ this.height) //Player can fall below bottom of screen. //- floor)  // if the BOTTOM of our player + it's velocity is LESS than the BOTTOM of the canvas keep adding gravity. 
            this.velocity.y += gravity // velocity += gravity (0.5) repeat over and over.
            // PLAYER CAN NOW FALL FOREVER.. FOREVER.. FOREVER..
           // else this.velocity.y = 0 // else set velocity to 0. (If player position + player height is greater or equal to canvas height)
    } 
} // End of player Sprite

// -------- PLATFORM CLASS -------- //
class Platform {    // ------ Platform Class used for ground and all platforms. ------
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }
        this.image = image
        this.width = image.width  //580
        this.height = image.height //125
    }
    draw() {   
        // platform's rectangle
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
            this.image,  
            this.position.x, 
            this.position.y)
            // this.width, 
            // this.height ) 
    }
    update() {
        this.draw
    }
}

// -------- PLATFORMTWO CLASS -------- //
class PlatformTwo {
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }
        this.image = image
        this.width = image.width  //580
        this.height = image.height //125
    }
    draw() {   
        // platform's rectangle
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
            this.image,  
            this.position.x, 
            this.position.y)
            // this.width, 
            // this.height ) 
    }
    update() {
        this.draw
    }
} // End of player Sprite


// -------- BUILDING 2 CLASS -------- //
class BuildingMCTC {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y //canvas.height - 468
        }
        // -- ACTUAL Building size is relative to the actual image file size/dimensions. -- //
        this.width = 650*buildingSize2 //w //650 //default width // Added *2 on 12/27/23
        this.height = 468*buildingSize2 //h //468 //default height // Added *2 on 12/27/23
        this.currentCropWidth = 650*buildingSize2
        // this.image = MCTC
        this.frames = 0
        this.currentSprite = MCTC
    }
    draw() { 
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sprite
        // c.fillRect(this.position.x,  this.position.y, this.width, this.height)

        // Apply a glowing effect using shadow
        if (glowMCTC) {
            c.shadowColor = 'white'; // Set the color of the glow
            c.shadowBlur = 50; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
        }

        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height 
            )     
            // this turns off glow for any/all other canvas element
            c.shadowColor = 'transparent';
            c.shadowBlur = 0;
            c.shadowOffsetX = 0;
            c.shadowOffsetY = 0;
    }
    update() {
            this.frames++;
        if (this.frames > 29 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building2 Sprite


// -------- BUILDING COYOTE CLASS -------- //
class BuildingCOYOTE  {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y
        }
        this.width =  1550 //w* //650 //default width
        this.height = 495 //h* //468 //default height
        this.currentCropWidth = 1550 //*

        this.image = image
        this.frames = 0
        this.currentSprite = COYOTE 
    }
    draw() { 
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sprite
        // c.fillRect(this.position.x,  this.position.y, this.width, this.height)
                
        // Apply a glowing effect using shadow
            if (glowCOYOTE) {
                c.shadowColor = 'white'; // Set the color of the glow
                c.shadowBlur = 50; // Set the blur radius
                c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
                c.shadowOffsetY = 0; // Set the vertical offset of the shadow
            }

        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height ) 
            // Turn off glow effect 
            c.shadowColor = 'transparent'; // Set the color of the glow
            c.shadowBlur = 0; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
    }
    update() {
            this.frames++;
        if (this.frames > 0 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building1 Sprite

// -------- BUILDING CLASS -------- //
class BuildingCBRE {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y
        }
        this.width = w*buildingSize //650 //default width
        this.height = h*buildingSize //468 //default height
        this.currentCropWidth = 250*buildingSize

        this.image = image
        this.frames = 0
        this.currentSprite = CBRE
    }
    draw() { 
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sprite
        // c.fillRect(this.position.x,  this.position.y, this.width, this.height)

        // Apply a glowing effect using shadow
        if (glowCBRE) {
            c.shadowColor = 'white'; // Set the color of the glow
            c.shadowBlur = 50; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
        }
        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height ) 
        // Turn off glow effect 
        if (glowCBRE) {
            c.shadowColor = 'transparent'; // Set the color of the glow
            c.shadowBlur = 0; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
        }
    }
    update() {
            this.frames++;
        if (this.frames > 29 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building1 Sprite



// -------- BUILDING PRIME -------- //
class BuildingPRIME {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y //canvas.height - 468
        }
        // -- ACTUAL Building size is relative to the actual image file size/dimensions. -- //
        this.width = PRIME.width //* //w //650 //default width // Added *2 on 12/27/23
        this.height = PRIME.height //* //h //468 //default height // Added *2 on 12/27/23
        this.currentCropWidth = PRIME.width //*
        // this.image = MCTC
        this.frames = 0
        this.currentSprite = PRIME
    }
    draw() { 
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sprite
        // c.fillRect(this.position.x,  this.position.y, this.width, this.height)

         // Apply a glowing effect using shadow
         if (glowPRIME) {
            c.shadowColor = 'white'; // Set the color of the glow
            c.shadowBlur = 50; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
        }
        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height )
            // Turn off glow
            c.shadowColor = 'transparent'; // Set the color of the glow
            c.shadowBlur = 0; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
    }

    update() {
        //     this.frames++;
        // if (this.frames > 59 ) {
        //     this.frames = 0;
        // } 
        this.draw()
    } 
} // End of Building2 Sprite

// -------- Elements PRIME -------- //
class ElementsPRIME {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y //canvas.height - 468
        }
        // -- ACTUAL Building size is relative to the actual image file size/dimensions. -- //
        this.width = 900 //PrimeElements.width //* //w //650 //default width // Added *2 on 12/27/23
        this.height = 900 // PrimeElements.height //* //h //468 //default height // Added *2 on 12/27/23
        this.currentCropWidth = 966 //PrimeElements.width //*
        // this.image = MCTC
        this.frames = 0
        this.currentSprite = PrimeElements
    }
    draw() { 
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sprite
        // c.fillRect(this.position.x,  this.position.y, this.width, this.height)

         // Apply a glowing effect using shadow
         if (glowPRIME) {
            c.shadowColor = 'white'; // Set the color of the glow
            c.shadowBlur = 50; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
        }
        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height )
            // Turn off glow
            c.shadowColor = 'transparent'; // Set the color of the glow
            c.shadowBlur = 0; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
    }

    update() {
            this.frames++;
        if (this.frames > 29 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building2 Sprite


// -------- BUILDING CLASS -------- //
class BuildingHGA {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y
        }
        this.width =  1000 //w* //650 //default width
        this.height = 820 //h* //468 //default height
        this.currentCropWidth = 966 //*

        this.image = image
        this.frames = 0
        this.currentSprite = HGA
    }
    draw() { 
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sprite
        // c.fillRect(this.position.x,  this.position.y, this.width, this.height)

        // Apply a glowing effect using shadow
        if (glowHGA) {
            c.shadowColor = 'white'; // Set the color of the glow
            c.shadowBlur = 50; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
                }
        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height ) 
            //Turn off glow            
            c.shadowColor = 'transparent'; // Set the color of the glow
            c.shadowBlur = 0; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
    }

    update() {
            this.frames++;
        if (this.frames > 29 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building1 Sprite



// -------- BUILDING CLASS -------- //
class ARROW {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y //canvas.height - 468
        }
        // -- ACTUAL Building size is relative to the actual image file size/dimensions. -- //
        this.width = 616 //w //650 //default width // Added *2 on 12/27/23
        this.height = 300 //h //468 //default height // Added *2 on 12/27/23
        this.currentCropWidth = 616
        // this.image = MCTC
        this.frames = 0
        this.currentSprite = ArrowPic
    }
    draw() { 

        if (glowMCTC) {
            c.shadowColor = 'white'; // Set the color of the glow
            c.shadowBlur = 50; // Set the blur radius
            c.shadowOffsetX = 0; // Set the horizontal offset of the shadow
            c.shadowOffsetY = 0; // Set the vertical offset of the shadow
        }

        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            0,                  // crop image Y
            this.currentCropWidth,                // crop image Y
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height 
            )     
            // this turns off glow for any/all other canvas element
            c.shadowColor = 'transparent';
            c.shadowBlur = 0;
            c.shadowOffsetX = 0;
            c.shadowOffsetY = 0;
    }
    update() {
            this.frames++;
        if (this.frames > 29 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building1 Sprite


// -------- COULD CLASS -------- //
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



// -------- PLATFORM CLASS -------- //
class Bug {    // ------ Platform Class used for ground and all platforms. ------
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }
        this.image = image
        this.width = image.width  //580
        this.height = image.height //125
    }
    draw() {   
        // platform's rectangle
        c.fillStyle = 'red'
        c.fillRect(this.position.x + 30, this.position.y + 40, this.width * 0.80, this.height * 0.80)
        c.drawImage(
            this.image,  
            this.position.x, 
            this.position.y)
            // this.width, 
            // this.height ) 
    }
    update() {
        this.draw
    }
}

// // -------- ARROW CLASS -------- //
// class ARROW {    // ------ Platform Class used for ground and all platforms. ------
//     constructor({ x, y, image }) {
//         this.position = {
//             x: x, // x is now equal to the passed in x.  // x: 600,
//             y: y // y is now equal to the passed in y.  // y: 300
//         }
//         this.image = image
//         this.width = image.width  //580
//         this.height = image.height //125
//     }
//     draw() {   
//         // platform's rectangle
//         // c.fillStyle = 'red'
//         // c.fillRect(this.position.x, this.position.y, this.width, this.height)
//         c.drawImage(
//             this.image,  
//             this.position.x, 
//             this.position.y)
//             // this.width, 
//             // this.height ) 
//     }
//     update() {
//         this.draw
//     }
// }


// -------- SKY CLASS -------- //
class Sky {    
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

// -------- BACKGROUND CLASS -------- //
class Background {    
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

// -------- MIDGROUND CLASS -------- //
class Midground {    
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

// -------- FOREGROUND CLASS -------- //
class Foreground {    
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