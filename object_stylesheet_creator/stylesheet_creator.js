function createStyleSheet(stylesObj){
  let styleContent = ""

  for(let className in stylesObj){
    // getting array of keys and values
    stylesObj[className] = Object.entries(stylesObj[className])
    
    // joining property and value with :
    stylesObj[className] = stylesObj[className].map((property) => {
      return property.join(":")
    })

    // joining multiple proprties with ;
    stylesObj[className] = stylesObj[className].join(";")

    // making the required format that is accepted in stylesheet
    styleContent += `${className} {${stylesObj[className]}}`
  }
  
  // creating style tag, adding contents and appending it to body
  let style_tag = document.createElement("style")
  style_tag.innerHTML = styleContent
  document.head.appendChild(style_tag)
}