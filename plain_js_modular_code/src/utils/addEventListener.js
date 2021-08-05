function onClickDes(strCategoryDescription, index){
  let target = document.querySelector(`#prod_${index}`)
  target.addEventListener("click", () => {
    ((description) => {
      alert(description)
    })(strCategoryDescription)
  })
}

export {onClickDes}