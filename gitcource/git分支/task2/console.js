
for(x=3;x<=15;x++) {
  for(y=1;y<=15;y++) {
    console.log(`${x}x${y}`);
  }
}

function input(cm,kg){
  const m = cm/100;
  const bmi = (kg/Math.pow(m,2)).toFixed(1);
  console.log(bmi);
  
}

input(178,70);

const total = 0;
for(x=1;x<=10;x++){
  total+=x;
}
console.log(total);
