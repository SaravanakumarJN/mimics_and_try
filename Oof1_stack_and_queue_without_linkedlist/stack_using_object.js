class Stack{
  constructor(){
    this.stack = new Object()
    this.start_pointer = 0
    this.top_pointer = 0
  }

  push(value){
    this.stack[this.top_pointer] = value
    this.top_pointer++

    return value
  }

  pop(){
    if(this.start_pointer < this.top_pointer){
      let value = this.stack[this.top_pointer - 1]
      delete this.stack[this.top_pointer - 1]
      this.top_pointer--
      return value
    }
  }

  top(){
    return this.stack[this.top_pointer - 1]
  }

  isEmpty(){
    return this.start_pointer == this.top_pointer
  }

  length(){
    return this.top_pointer - this.start_pointer
  }
}

let stack1 = new Stack()

console.log("---------------------------Push---------------------------")
// push
stack1.push(1)
stack1.push(2)
stack1.push(4)
console.log(stack1)


console.log("---------------------------Pop---------------------------")
// pop
stack1.pop()
console.log(stack1)

console.log("---------------------------Top---------------------------")
// top
console.log(stack1.top())


console.log("---------------------------isEmpty---------------------------")
// is empty check
console.log(stack1.isEmpty())


console.log("---------------------------Length---------------------------")
// length
console.log(stack1.length())