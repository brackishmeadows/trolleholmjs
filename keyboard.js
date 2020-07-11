//these are the keys i will use

let UP = 38
let DOWN = 40
let LEFT = 37
let RIGHT = 39
let SWORD = 90 //z
let BOMB = 83 //s
let MAP = 9 //tab
let ACCEPT = 13 //enter

function remapkeys(){
}

//wraps key input and holds state for a keyboard

class Keyboard {
  constructor() {
    this.keys = []
    this.keytoggle = []
  }

  keyPressed() {
    this.keys[keyCode] = true
    if (this.keytoggle[keyCode] === undefined)
      this.keytoggle[keyCode] = true
    else
      this.keytoggle[keyCode] = !this.keytoggle[keyCode]
    print("keydown " + keyCode + " toggle " +this.keytoggle[keyCode]) 
  }

  keyReleased() {
    this.keys[keyCode] = false
  }
}

//the keyboard object goes on the player object as player.in

function keyPressed() {
  player.in.keyPressed();
  player.checkKeys();
}

function keyReleased() {
  player.in.keyReleased();
}
