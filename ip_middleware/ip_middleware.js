function ip(callback){
  // if callback empty or not a function throw error
  if(callback === undefined || typeof(callback) !== "function"){
    throw new Error('Callback required')
  }

  return (req, res, next) => {
    /*
      => Along the request, there might be multiple middle points so we get multiple ip 
      => The origin ip of the request will be the first ip so we get the 0 indexed element
    */
    let ip = req.headers['x-forwarded-for']?.split(",")[0] || req.socket.remoteAddress
  
    // execute the callback with ip as first argument
    callback(ip)
    next()
  }
}