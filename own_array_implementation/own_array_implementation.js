function ownArray(){
  Object.defineProperty(this, "length", {
    value: 0,
    enumerable: false,
    writable: true
  })
}

ownArray.prototype.pop = function(){
  let poped = this[this.length - 1]
  delete this[this.length - 1]
  this.length = this.length > 0 ? this.length - 1 : 0 
  return poped
}

ownArray.prototype.push = function(element){
  this[this.length] = element
  this.length = this.length + 1
  return this.length
}

ownArray.prototype.forEach = function(cb){
  for(let i = 0; i < this.length; i++){
    cb(this[i], i, this)
  }
}

ownArray.prototype.map = function(cb){
  let mapped_array = new ownArray()

  for(let i = 0; i < this.length; i++){
    let change = cb(this[i], i, this)
    mapped_array.push(change)
  }

  return mapped_array
}

let array = new ownArray()
array.push(10)
array.push(20)
array.push(30)
console.log(array)

array.pop()
console.log(array)

array.forEach(function(item, index){
  console.log(item, index)
})

let new_array = array.map((item) => {
  return item * 2
})
new_array.forEach((item) => {
  console.log(item)
})




// hasOwnProperty (prototype's / parent's property gives false)
for(let keys in array){
  if(array.hasOwnProperty(keys)){
    console.log(array[keys], keys)
  }
}

