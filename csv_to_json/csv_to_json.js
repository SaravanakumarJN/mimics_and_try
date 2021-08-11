function csv_to_json(path_to_file){
  // fs module to read csv file
  const fs = require('fs')

  return new Promise((resolve, reject) => {
    try {
      // array to hold all the json object
      let json_response = []
      // read csv file and split the csv file based on new line
      const data = fs.readFileSync(path_to_file, 'utf8').split(/[\r\n]+/)  

      // split the individual line based on comma (to get array of keys)
      let keys = data[0].split(",")
      
      let i = 1
      while(i < data.length){
        // individual json object
        let json_object = {}
        // split the individual line based on comma (to get array of values)
        let values = data[i].split(",")

        // forming object from array of keys and values
        let j = 0;
        while(j < keys.length){
          // if no previous key add key and assign value
          if(!json_object[keys[j]]){
            json_object[keys[j]] = values[j] 
          }
          // if already key exists
          else{
            // if previous value is an array of values push new value into it  
            if( typeof(json_object[keys[j]]) === "object"){
              json_object[keys[j]] = [...json_object[keys[j]], values[j]]
            }
            // if previous value is not an array, create a array of previous value and current value and assign it 
            else{
              json_object[keys[j]] = [json_object[keys[j]], values[j]]
            }
          }

          j++
        }
        // push the created json object to array
        json_response.push(json_object)

        i++
      }

      // return json 
      return resolve(json_response)
    } catch (error) {
      return reject(error)
    }
  })
}