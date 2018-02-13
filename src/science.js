// process.stdout.write("Hello, World");
//
// setTimeout(function(){
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write("Goodbye World");
//   process.stdout.write("\n");
// }, 2000);

let position = 0;
const size = 30;

const pos = setInterval(function(){
  position++;
  if (position < size){
    displayPositionCLI();
  }else{
    process.stdout.write("\n");
    clearInterval(pos);
  }
}, 200);

function displayPositionCLI(){
  for(let i=0;i<size;i++){
    process.stdout.write("-");
  }
  process.stdout.cursorTo(position);
  process.stdout.write("@");
  process.stdout.cursorTo(0);
};

pos;
