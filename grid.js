//general grid class. a grid is a 2d list of cells
//where each cell is a character

//lets require that all rows need to
//have the same length
//but how to enforce this?

class Grid{
constructor(_cell =[]) {
  this.cell = _cell
}
  
getStrings() {
  let strings = []
  for (let row in this.cell) {
    let str = ''
    for (let char in this.cell[row]) {
      str += this.cell[row][char]
    }
    strings.push(str)
  }
  return strings
}  
  
setStrings(_strings) {
  for (let row in _strings)
    this.cell.push(_strings[row].split())
}

fill(_c, _x1, _y1, _x2, _y2) {
  for (let x=_x1; x<=_x2; x++)
  for (let y=_y1; y<=_y2; y++)
    this.cell[x][y] = _c
}

noise(_values,_x1,_y1,_x2,_y2) {
  function choose(_values) {
    var choice = Math.floor(Math.random() * _values.length)
    return _values[choice]
  }
  for (let x=_x1; x<=_x2; x++)
  for (let y=_y1; y<=_y2; y++)
     cell[x][y] = choose(_values)
}

insert(_other, _x, _y) {
  //copies _other into this grid, overwriting whatever values are present
  for (let x=0; x<_other.cell.length; x++)
  for (let y=0; y<_other.cell[0].length; y++)
    cell[x+_x][y+_y] = _other.cell[x][y]
}

print() {
  let strings = this.getStrings()
  for (let i = 0; i< strings.length; i++)
    console.log(strings[i])
}

}// end class

