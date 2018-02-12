export class Line {
  constructor(){
    this.position = 0;
  }

  setPosition(){
    setInterval(() => {
      this.position++;
      displayPosition();
    }, 1000);
  }

  displayPosition(){
    for(let i=0;i<10;i++){
      if(i=position){
        process.stdout.write("@");
      }else{
        process.stdout.write("-");
      }
      process.stdout.write("\n");
    }
  }
}
