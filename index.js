

class HashMap(){

  let loadFactor = 0;
  let capacity = 0;

  hash(key){
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++){
      console.log(`initial hash: ${hashCode}`)
      hashCode = primeNumber * hashCode + key.charCodeAt(i) % 16;
      console.log(`prime: ${primeNumber}`)
      console.log(`hash: ${hashCode}`)
      console.log(`key: ${key.charCodeAt(i)}`)
    }
    return hashCode //% 16;
  }

}




  //  if (index < 0 || index >= buckets.length) {
  //   throw new Error("Trying to access index out of bounds");
  // }


  //apply the modulo operator each iteration instead of outside the loop at the end