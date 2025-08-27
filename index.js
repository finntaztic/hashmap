// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
class Node {
  constructor(key, value = null, next = null){
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMap {
  capacity = 16;
  loadFactor;

  constructor(){
    this.storage = [];
  }
  //hashcode formula
  hash(key){
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++){
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capacity;
  }

  set(key, value){
    const index = this.hash(key);
    const newNode = new Node (key, value);
    // console.log(index)

    if (!this.storage[index]) { 
      this.storage[index] = newNode;
    } else { 
      
      // let current = this.storage[index];
      // if (key == current.key){
      //   current.value = value;
      // } else {
      //   while (current.next){
      //   console.log(current.next)
      //     current = current.next
      //   }
      //   current.next = newNode;
      // }

    let items = this.storage[index];


    //problem is that  it doesnt loop thourgh to check if the key 
    //alr exists therefore it sets the alr existing the new key to new node
    //so it has to loop thorugh first to see if it has to add node or update value
    while (items.key != key && items.next != null){
      items = items.next;
      items.next = newNode;
      console.log(items)
    } 
    return items.value = value;


    // while (current.next){
    //     console.log(current.next)
    //       current = current.next
    //     }
    //     current.next = newNode;
    //   }
  }
      //  if (key == current.key){
      //   current.value = value;
      // } else {
      //   while (current.next){
      //   console.log(current.next)
      //     current = current.next
      //   }
      //   current.next = newNode;
      // }
  }

  get(key){
    const index = this.hash(key);
    let items = this.storage[index];
    console.log(items)
    
    if (!items.key){
      return null
    } else 
      while (items.key != key && items.next != null){
      items = items.next;
    }
    return console.log(items.value);
  }
  }


const test = new HashMap();
test.set('apple', 'red');
test.set('j', 'blue');
test.set('apple', 'purple');

// test.set('apple', 'purple');
// test.set('j', 'purple');

test.get('apple');
test.get('j');




//limit the size of the array inside the buckets
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

// console.log(test.set())
// clg

//things that are confusing
// can i limit the number of buckets?  am i supposed to limit it? i dont think the hashmap project says anything about it
// is the term 'hash table' and 'bucket' interchangeable? im confuseddd
// is the hash table and hashmap the same?
// do i need hashtable for this? how many table anyway? isnt it the load factor and capacity?

// capcaity is 16, load factor is 0.75
