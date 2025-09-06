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
  length = 0

  constructor(){
    this.storage = [];
  }

  getCapacity(){return this.capacity};
  getLoadFactor(){   return this.length / this.capacity;};

  //hash code formula
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


     if (index < 0 || index >= this.capacity) {
    throw new Error("Trying to access index out of bounds");
  }

    if (!this.storage[index]) { 
      this.storage[index] = newNode;
      this.length++
    } else { 
      let items = this.storage[index];

      while (items.key != key && items.next != null){
          items = items.next;
      }

      if (key === items.key){
            return items.value = value;
          }
      items.next = newNode;
      this.length++
  }

  if (this.getLoadFactor() > 0.75) {
    this.resize();
  }
  }

  resize() {
  this.capacity = this.capacity * 2;
  let oldStorage = this.storage;
  this.storage = [];
  this.length = 0; // will be updated by set()

  for (let i = 0; i < oldStorage.length; i++) {
    let currentNode = oldStorage[i];
    while (currentNode) {
      this.set(currentNode.key, currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

  get(key){
    const index = this.hash(key);
    let items = this.storage[index];

    if (items == undefined){ 
      return null;
    } else {
      while (key != items.key && items.next != null){
        items = items.next;
      }

      if (key != items.key){
        return null;
      }
      return items.value;
    }
  }

  has(key){
    const index = this.hash(key);
    let items = this.storage[index];
    console.log(index)

    if (items == undefined){ 
      return false;
    } else {
      while (key != items.key && items.next != null){
        items = items.next;
      }

      if (key != items.key){
        return false;
      }
      return true;
    }
  }


  ////realised that i ahve to push the new value to storage index so when its remove it would work to every function
  // remove(key){
  //   const index = this.hash(key);
  //   let items = this.storage[index];

  //   if (items == undefined){ 
  //     return false;
  //   } else {
  //       while (key != items.key && items.next != null){
  //         items = items.next; 
  //       } 
  //       items = items.next;
  //       // items.next = items.next;
  //       console.log(items)
  //       this.length--
  //       return true;
  //   }
  // }

  remove(key) {
  const index = this.hash(key);
  let current = this.storage[index];
  let prev = null;

  while (current) {
    if (current.key === key) {
      if (prev) {
        prev.next = current.next; // unlink from chain
      } else {
        this.storage[index] = current.next; // removed head
      }
      this.length--;
      return true;
    }
    prev = current;
    current = current.next;
  }
  return false;
}


  length(){
    return this.length;
  }


  clear(){
    let key = 0;
    let index = this.hash(key);
    let items = this.storage[index];

    for (let i = 0; i < 16; i++){
      key++

        if (this.storage[key] == undefined){
          this.storage[key];
        } else {
          this.storage[key] = undefined;
        }
      console.log(this.storage[key]) 
    }
  }

//with ai help
keys() {
  let myCap = this.getCapacity();

  for (let i = 0; i < myCap; i++) {
    let currentNode = this.storage[i];

    while (currentNode) {
      console.log(currentNode.key);
      currentNode = currentNode.next;
    }
  }
}

value() {
  let myCap = this.getCapacity();

  for (let i = 0; i < myCap; i++) {
    let currentNode = this.storage[i];

    while (currentNode) {
      console.log([currentNode.key, currentNode.value]);
      currentNode = currentNode.next;
    }
  }
}

}

const test = new HashMap();
// test.set('apple', 'red');
test.set('j', 'orange');
test.set('apple', 'blue');
test.set('mango', 'yellow');
test.set('Ê', 'yellow');

test.keys();
test.value();


// test.remove('Ê');
// test.remove('j');
// console.log(test.length)
// test.clear();


// console.log(test.remove('mango'))







