// process.stdout.write("Hello, World");
//
// setTimeout(function(){
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write("Goodbye World");
//   process.stdout.write("\n");
// }, 2000);

let position = 0;
let size = 30;

var pos = setInterval(function(){
  position++;
  if (position < size){
    displayPosition();
  }else{
    process.stdout.write("\n");
    clearInterval(pos);
  }
}, 200);

function displayPosition(){
  for(let i=0;i<size;i++){
    process.stdout.write("-");
  }
  process.stdout.cursorTo(position);
  process.stdout.write("@");
  process.stdout.cursorTo(0);
};

pos;
