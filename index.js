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

//things that are confusing
// can i limit the number of buckets?  am i supposed to limit it? i dont think the hashmap project says anything about it
// is the term 'hash table' and 'bucket' interchangeable? im confuseddd
// is the hash table and hashmap the same?
// do i need hashtable for this? how many table anyway? isnt it the load factor and capacity?

// 
