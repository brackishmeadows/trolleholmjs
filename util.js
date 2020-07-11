let TILE = 16;
function drawtile(_tiles, _u, _v){
  //_u and _v parameters are in tiles, not pixels

  u1 = _u*TILE;
  u2 = _u*TILE + TILE;

  v1 = _v*TILE;
  v2 = _v*TILE + TILE;
  
  push();    
    beginShape();
    texture(_tiles);
    vertex(0,0,       u1,v1);
    vertex(0,TILE,    u1,v2); 
    vertex(TILE,TILE, u2,v2); 
    vertex(TILE,0,    u2,v1); 
    endShape(CLOSE);
  pop();
}

function xor(foo,bar){return !foo != !bar}
//http://www.howtocreate.co.uk/xor.html