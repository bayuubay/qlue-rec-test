function isPrime(n){
  let div=0
  if (n>>1) {
    for (let i = 1; i <= n; i++) {
      if (n%i==0) {
        div++      
      }    
    }
    if (div<=2) {
      return true
    }else{
      return false
    }  
  } else {
    return false
  }
}
function getPrime(n) {
  let array=[]
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      array.push(i)
    }     
  }
  return array
}

console.log(getPrime(10))