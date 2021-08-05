class Queue{
  constructor(){
    this.queue = new Object()
    this.front_pointer = 0
    this.rear_pointer = 0
  }

  enqueue(value){
    this.queue[this.rear_pointer] = value
    this.rear_pointer++

    return value
  }

  dequeue(){
    if(this.front_pointer < this.rear_pointer){
      let value = this.queue[this.front_pointer]
  
      delete this.queue[this.front_pointer] 
      this.front_pointer++
  
      return value
    }
  }

  front(){
    return this.queue[this.front_pointer]
  } 

  rear(){
    return this.queue[this.rear_pointer - 1]
  }

  isEmpty(){
    return this.front_pointer == this.rear_pointer
  }

  length(){
    return this.rear_pointer - this.front_pointer
  }
}

let queue1 = new Queue()


console.log("---------------------------Enqueue---------------------------")
// enqueue
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
console.log(queue1)


console.log("---------------------------Dequeue---------------------------")
// dequeue
queue1.dequeue()
console.log(queue1)


console.log("---------------------------Front---------------------------")
// front
console.log(queue1.front())


console.log("---------------------------Rear---------------------------")
// rear
console.log(queue1.rear())


console.log("---------------------------Empty check---------------------------")
// isEmpty
console.log(queue1.isEmpty())


console.log("---------------------------Length---------------------------")
// length
console.log(queue1.length())


console.log("---------------------------Looping---------------------------")
let start = queue1.front_pointer
let end = queue1.rear_pointer
for(let i = start; i < end; i++){
  console.log(queue1.queue[i])
}




