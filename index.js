
// function hash(name) {
//   return name.charCodeAt(name);
// }

// console.log(hash('b')); // → 106

class HashMap {
  loadFactor; 
  capacity;

  hash(key){
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++){
      hashCode = primeNumber * (hashCode % 16) + key.charCodeAt(i);
    }
    return (`my hashcode: ${hashCode}`) //% 16;
  }

  set (key, value){
    return `set: ${this.hash(key) + ':' + value}`;
  }


}


const test = new HashMap();
console.log(test.set ('apple', 'red'));
// console.log(hasher.get ('name', 'John'))

// console.log(hasher.hash('k'));


  //  if (index < 0 || index >= buckets.length) {
  //   throw new Error("Trying to access index out of bounds");
  // }


  //apply the modulo operator each iteration instead of outside the loop at the end