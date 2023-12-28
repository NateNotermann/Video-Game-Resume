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
        // c.fillStyle = 'red' // draw a rectangle that matches the size and position of the Player Sparite
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

        if (this.position.y + this.height + this.velocity.y <= canvas.height - 125)//+ this.height) //Player can fall below bottom of screen. //- floor)  // if the BOTTOM of our player + it's velocity is LESS than the BOTTOM of the canvas keep adding gravity. 
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
    constructor() { //  passing in x & y positions
        this.position = {
            x: 100,
            y: canvas.height - 200
        }
        this.width = 580 //default width
        this.height = 125 //default height

        this.image = platformImage
        this.frames = 0

        this.currentSprite = platformImage
        // this.currentCropWidth = 580
    }
    draw() { 
        c.fillStyle = 'purple' // draw a rectangle that matches the size and position of the Player Sprite
        c.fillRect(this.position.x,  this.position.y, this.width, this.height)

        c.drawImage( // player sprite image
            // this.image,
            this.currentSprite, 
            // this.currentCropWidth * this.frames,  // crop image X, starting at 0, then 177 * this.frames. Moves through all frames.
            // 0,                  // crop image Y
            // this.currentCropWidth,                // crop image Y
            // 400,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height ) 
    }

    update() {
        // this.frames++
        // if (this.frames > 59 && 
        //     (this.currentSprite === this.sprites.stand.right 
        //     || this.currentSprite === this.sprites.stand.left)) { // loop every 28 frames. 
        //     this.frames = 0 
        // } 
        this.draw()
    } 
} // End of player Sprite


// -------- BUILDING CLASS -------- //
class Building {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y
        }
        this.width = w //650 //default width
        this.height = h //468 //default height
        this.currentCropWidth = 250

        this.image = image
        this.frames = 0
        this.currentSprite = CBRE
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
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height ) 
    }

    update() {
            this.frames++;
        if (this.frames > 29 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building1 Sprite

// -------- BUILDING 2 CLASS -------- //
class Building2 {
    constructor(x, y, w, h, image) { //  passing in x & y positions
        this.position = {
            x: x, //1500,
            y: y //canvas.height - 468
        }
        this.width = 650 //w //650 //default width
        this.height = 468 //h //468 //default height
        this.currentCropWidth = 650
        // this.image = MCTC
        this.frames = 0
        this.currentSprite = MCTC
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
            this.height, // 650,                // crop image X
            this.position.x, 
            this.position.y,
            this.width,
            this.height ) 
    }

    update() {
            this.frames++;
        if (this.frames > 29 ) {
            this.frames = 0;
        } 
        this.draw()
    } 
} // End of Building2 Sprite



// -------- HILL CLASS -------- //
class Hill {    // ------ Hill Class used for Hills ------
    constructor({ x, y, image }) {
        this.position = {
            x: x, // x is now equal to the passed in x.  // x: 600,
            y: y // y is now equal to the passed in y.  // y: 300
        }       // Hills image: 7545 × 592
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


// -------- BACKGROUND CLASS -------- //
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