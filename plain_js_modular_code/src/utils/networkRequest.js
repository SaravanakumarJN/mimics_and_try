async function networkRequest(url){
  let request_data = await fetch(url)
  let data = await request_data.json()

  return data
}

export {networkRequest}