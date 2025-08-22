class HashMap {
  loadFactor; 
  capacity;

  hash(key){
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++){
      hashCode = primeNumber * (hashCode % 16) + key.charCodeAt(i);
    }
    return (`my hashcode: ${hashCode}`) 
  }

  set (key, value){
    return `set: ${this.hash(key) + ':' + value}`;
  }

  
}


const test = new HashMap();
console.log(test.set ('apple', 'red'));
clg