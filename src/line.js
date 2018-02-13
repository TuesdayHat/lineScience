export class Line {
  constructor(size, speed){
    this.position = 0;
    this.size = size;
    this.display = "";
    for(let i=0;i<size;i++){
      this.display += "-";
    }
    this.speed = (11-speed)*100;
    
    this.pos = setInterval(() => {
      position++;
      if (position < size){
        updateBoard();
      }else{
        clearInterval(pos);
      }
    }, this.speed);
  }


  updateBoard(){
    for(let i=0; i<display.length; i++){
      if (i === position){
        display[i] = "@";
      } else {
        display[i] = "-"
      }
    }
  }

}
