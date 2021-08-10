async function parser(req, res, next){
  await req.on("data", (chunk) => {
    // buffer to string
    let data = chunk.toString()
    // parse JSON object
    data = JSON.parse(data)

    // set the parsed data to body 
    req.body = data
  })

  next()
}