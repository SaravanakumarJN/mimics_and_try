function useState(value){
  //creating a closure scope
  let state = value

  return [
    // function to get the current value 
    () => {
      return state
    }, 
    // function to update the state argument can either be a function or value 
    (new_value) => {
      if(typeof(new_value) === "function"){
        // function will be called with previous state as first argument
        state = new_value(state)
      }
      else{
        state = new_value
      }
    }
  ]
}

// setting state
let [counter1, setCounter1] = useState(0)

// getting the current state
console.log(counter1())

// updating the state with function
setCounter1((counter1) => counter1 + 1)
console.log(counter1())

// updating the state directly with values
setCounter1(counter1()+1)
console.log(counter1())