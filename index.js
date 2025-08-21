

class HashMap {
  loadFactor; 
  capacity;

  hash(key){
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++){
      console.log(`initial hash: ${hashCode}`)
      hashCode = primeNumber * (hashCode % 16) + key.charCodeAt(i);
      console.log(`second hash: ${hashCode}`)
      console.log(`prime: ${primeNumber}`)
      console.log(`hash: ${hashCode}`)
      console.log(`key: ${key.charCodeAt(i)}`)
    }
    return (`my hashcode: ${hashCode}`) //% 16;
  }

  set (key, value){
    
  }
}

const hasher = new HashMap();
console.log(hasher.hash('josephine'));
// console.log(hasher.hash('k'));


  //  if (index < 0 || index >= buckets.length) {
  //   throw new Error("Trying to access index out of bounds");
  // }


  //apply the modulo operator each iteration instead of outside the loop at the end