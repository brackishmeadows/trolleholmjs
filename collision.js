class Collision{
  constructor(_didHit, _x=0, _y=0){
    this.didHit = _didHit
    this.x = _x
    this.y = _y
  }
}

colliderect(_ax1, _ay1, _ax2, _ay2,
            _bx1, _by1, _bx2, _by2) {
  //returns true if the rect a intersects the rect b.
  //x1,y1 is top left and x2,y2 is bottom right.
  
  if (_ax1 >= _bx2) return false
  if (_ay1 >= _by2) return false
  if (_ax2 <= _bx1) return false
  if (_ay2 <= _by1) return false
  
  return true
}
collidetile(_ax,_ay,_bx_by) {
//for 2 rects that are each one tile in size
  return colliderect(_ax,_ay,_ax+TILE,_ay+TILE,
                     _bx,_by,_bx+TILE,_by+TILE)
}