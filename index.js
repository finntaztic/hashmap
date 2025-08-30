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
      let items = this.storage[index];

      while (items.key != key && items.next != null){
          items = items.next;

          if (key = items.key){
            return items.value = value;
          }
      }
      items.next = newNode;
  }

  }


  get(key){
    const index = this.hash(key);
    let items = this.storage[index];
    // console.log(items)
    // console.log(items.key)


    while (key != items.key && items.next != null){
      items = items.next;
    }
    console.log(items.key)

    // if (!key){
    //   return null
    // }
    // return console.log(items.value)
  }
  }


const test = new HashMap();
// test.set('apple', 'red');
test.set('j', 'blue');
test.set('apple', 'purple');
test.set('apple', 'orange');

test.get('j');
test.get('apple');
// test.get('xo'); //not existing
