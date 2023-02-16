let primeNumber = true;
 
console.log("Prime numbers from 1 to 100 are: ");
 
for(let i=2; i <= 100; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      primeNumber = false;
      break;
    }
  }
  if(primeNumber){
    console.log(i);
  }
  primeNumber = true;
}