let player = new Player()
let tiles
let gameon = false

function setup() {
  tiles = loadImage("tiles.png")  
  blueblack = color(0,0,5)
  div =select('div')
  div.addClass('divbg') //a bit of a flicker if this stuff is on div at page load
  div.addClass('animate__animated')
  div.addClass('animate__flipInX')

  canv = createCanvas(256,320, WEBGL)
  canv.parent(div)
  translate(200,200)
  setupmenu()
}

function setupmenu(){
  let div=select('div')
  el = createElement('h1')
  el.html('TROLLEHOLM')
  el.addClass('title')
  el.parent(div)
  
  el = createElement('h2')
  el.html('Enter.')
  el.addClass('titleprompt')
  el.addClass('animate__animated')
  el.addClass('animate__fadeIn')
  el.addClass('animate__delay-1s')
  el.parent(div)
  
  
  el = createElement('h3')
  el.html('by Brackish Meadows, 2020')
  el.addClass('byline')
  el.addClass('animate__animated')
  el.addClass('animate__fadeIn')
  el.parent(div)
}

function removemenu(){
  select('h1').remove()
  select('h2').remove()
  select('h3').remove()
}

function draw() {
  fill(blueblack)
  push()
    translate(-128,-160)
    rect(0,0,256,320)
    player.draw(gameon)
  pop()
  if(gameon) drawgame()
  else if (player.in.keys[ACCEPT]) newgame()
}

function newgame(){
  gameon = true
  player = new Player()
  removemenu()
}

function drawgame(){
  if (player.in.keytoggle[ACCEPT]) die()
}

function die(){
  print("die")
  player = new Player()
  gameon = false
  setupmenu()
}
