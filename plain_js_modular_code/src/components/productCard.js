// function createStyle(obj){
//   for(let keys in obj){
//     obj[keys] = Object.entries(obj[keys])
    
//     obj[keys] = obj[keys].map((item) => {
//       return item.join(":")
//     })
//     obj[keys] = obj[keys].join(";")
//   }
//   return obj
// }

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

let count = 0
function productCard({strCategory, strCategoryThumb}, key){
  let shadowColor = "#d9d9d9"
  let borderColor = "#f2f2f2"

  let styles = {
    ".card" : {
      "width": "250px",
      "height": "180px",
      "border": `1px solid ${borderColor}`,
      "box-shadow": `3px 5px 8px ${shadowColor}`,
      "text-align": "center",
      "margin": "20px",
      "border-radius": "5px",
      "padding": "20px"
    },
    ".img" : {
      "width": "100%"
    },
    ".description" : {
      "font-size": "20px",
      "font-weight": "500",
      "margin": "5px"
    }
  }

  if(count == 0){
    styles = createStyleSheet(styles)
    count++
  }

  return (`
    <div class = "card" id = "prod_${key}"> 
      <div class = "prod_img">
        <img class = "img" src = ${strCategoryThumb} alt = "product">
      </div>
      <div class = "description">
        ${strCategory}
      </div>
    </div>
  `)
}

export {productCard}
