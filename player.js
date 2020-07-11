PLAYERSPEED = 2.5
class Player{

  constructor() {
   this.in = new Keyboard()
   this.pos = new Vec2(0,0)
   this.vel = new Vec2(0,0)
   this.hasgems = 0
   this.hasbombs = 0
  }
  
  draw(gameon){
    this.repeatKeys()
    if (gameon){
      push()
        this.pos.add(this.vel)
        this.vel.mult(0.7)
        this.pos.round()
        translate(this.pos.x,this.pos.y)
        drawtile(tiles,0,2)
      pop()
    }
  }

  checkKeys(){
    //trigger on keydown
  }

  repeatKeys(){
    //trigger every update, on draw
    //it only  does one of checkupdown()
    //or checkleftright() per update
    function checkupdown(){
      if (xor (kb.keys[UP] , kb.keys [DOWN])){
        if (kb.keys[UP]) me.addvel(0,-PLAYERSPEED)
        else me.addvel(0,PLAYERSPEED)
      }
    }
    function checkleftright(){
      if (xor (kb.keys[LEFT] , kb.keys [RIGHT])){
        if (kb.keys[LEFT]) me.addvel(-PLAYERSPEED,0)
        else me.addvel(PLAYERSPEED,0)
      }
    }
    let kb = this.in
    let me = this
    if (frameCount%2 == 0)
      checkupdown()
    else checkleftright()
  }

  addvel(_x,_y){
    let target = new Vec2(this.vel.x+_x,this.vel.y+_y)
    this.vel = target
  }

}