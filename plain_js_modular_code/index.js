import {networkRequest} from "./src/utils/networkRequest.js"
import {productCard} from "./src/components/productCard.js"
import {onClickDes} from "./src/utils/addEventListener.js"

(async function onMount(getData){
  let {categories} = await getData("https://www.themealdb.com/api/json/v1/1/categories.php")

  let innerHTML = (categories.map((item, index) => {
    let product = productCard(item, index)
    return product
  })).join("")
  let parent = document.querySelector(".container")
  parent.innerHTML = innerHTML

  categories.forEach(({strCategoryDescription}, index) => {
    onClickDes(strCategoryDescription, index)
  })
  console.log(categories)
})(networkRequest)




