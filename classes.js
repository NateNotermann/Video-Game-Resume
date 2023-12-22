// classes are a blueprint for creating objects that share the same properties and methods.
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