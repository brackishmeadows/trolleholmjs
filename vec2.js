//i need a vector class for discrete math
//so i can use vectors as references to grid cells x,y
//and compare those to for-loop indices i,j
//so thats the idea, if  its ints, its iterable
//but theres no type checking

class Vec2{
  constructor(_x, _y) {
    this.x = _x
    this.y = _y
  }
  
  copy() { return new Vec2(this.x,this.y) }
  
  mag() {
    xdist = abs(this.x-0)
    ydist = abs(this.y-0)
    return xdist+ydist
  }
  
  dist(_v) {
    xdist = abs(this.x-_v.x)
    ydist = abs(this.y-_v.y)
    return xdist+ydist
  }
  
  add(_v) { this.x += _v.x;  this.y += _v.y }   
  sub(_v) { this.x -= _v.x;  this.y -= _v.y }  
  
  mult (_n) { this.x *= _n; this.y *= _n } 
  

  div (_n) { this.x /= _n; this.y /= _n }
   //this will return floats and break the class
  //but ill still let you do it
  //if you need it to restore ints run round() after div()
  
  approach(_v){    
    if (this.x != _v.x) 
      x += (_v.x > x)? 1 : -1   
    if (this.y != _v.y)
      y += (_v.y > y)? 1 : -1
  }
  
  snap(_i) {
    _i-=1
    this.x -= this.x%_i
    this.y -= this.y%_i
  }
  
  round(){
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)
  }
  
}