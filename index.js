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


  cap(){
    return this.capacity;
  }
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
  remove(key){
    const index = this.hash(key);
    let items = this.storage[index];

    if (items == undefined){ 
      return false;
    } else {
        while (key != items.key && items.next != null){
          items = items.next; 
        } 
        items = items.next;
        // items.next = items.next;
        console.log(items)
        this.length--
        return true;
    }
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

  keys(){

    // let capacity = cap()
    console.log(cap())
    let startKey = 0;
    console.log(capacity)
    const index = this.hash(key);

    for (let i = 0; i < 16; i++){
      key++

  }

  }
}

const test = new HashMap();
// test.set('apple', 'red');
test.set('j', 'orange');
test.set('apple', 'blue');
test.set('mango', 'yellow');
test.set('Ê', 'yellow');

test.keys()

// test.remove('Ê');
// test.remove('j');
// console.log(test.length)
// test.clear();


// console.log(test.remove('mango'))







