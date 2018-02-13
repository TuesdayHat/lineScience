export class Line {

  constructor(size, speed){
    this.position = 0;
    this.size = size;
    this.display = [];
    for(let i=0;i<size;i++){
      this.display.push("-");
    }
    this.speed = (11-speed)*100;

  }
  startClock(){
    var pos = setInterval(() => {
      this.position++;
      if (this.position < this.size){
        for(let i=0; i<this.display.length; i++){
          // console.log(i);
          if (i === this.position){
            this.display[i] = "@";
          } else {
            this.display[i] = "-";
          }
        }
      }else{
        clearInterval(pos);
      }
    }, this.speed);
  }
}
