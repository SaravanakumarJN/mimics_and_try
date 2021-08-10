/*
  default values
    time_interval           = 5 minutes
    allowed_request_count   = 5 request
    failure_attempts_only   = true

  Allowed time_interval values
    => "x"  (x seconds)
    => "x ms" (x milliseconds)
    => "x m" (x minutes)
    => "x h" (x hours)
    => "x d" (x days) 
*/

function rate_limiter(time_interval = 3000, allowed_request_count = 5, failure_attempts_only = true){
  let [time, unit] = String(time_interval).trim().split(" ")
  time = (
    unit === "ms" ? (time / 1000) 
    : unit === "m" ? time * 60
    : unit === "h" ? time * 60 * 60
    : unit === "d" ? time * 60 * 60 * 24
    : time
  )

  // state to track the ip
  let ip_tracker = {}

  // actual middleware function
  return function(req, res, next){
    // get the ip from request
    let ip = req.ip

    // if no previous attempts create a key and store the count
    if(!ip_tracker[ip]){
      ip_tracker[ip] = 1

      // delete the key after time elapsed
      setTimeout(() => {
        delete ip_tracker[ip]
      }, time * 1000)
    }
    else{
      // if there are previous attempts increase the count
      ip_tracker[ip] = ip_tracker[ip] + 1
    }

    // if the crossed the limit send error
    if(ip_tracker[ip] && ip_tracker[ip] > allowed_request_count){
      return res.status(403).json({
        error: true,
        message: `Too many attempts, try after some time.`
      })
    }

    next()
    
    // if only the failure request is to be counted (depends based on arguments passed by user), reduce the count for succes request
    if(failure_attempts_only){
      if(res.statusCode >= 200 && res.statusCode < 300){
        ip_tracker[ip] = ip_tracker[ip] - 1
      }
    }
  }
}