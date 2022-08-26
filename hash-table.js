const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);

  }

  hash(key) {
    // Your code here
    const temp = sha256(key).slice(0, 8);

    return parseInt(temp, 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key)
    
    if(this.data[index]){
      throw new Error("hash collision or same key/value pair already exists!")
      
    }else{
      this.data[index]=new KeyValuePair(key, value)
    }
this.count++
return index
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;