let avgPrice =
  items.reduce(function(a, b) {
    return a + b.price
  }, 0) / items.length

console.log(avgPrice.toFixed(2))

document.querySelector(
  "#answer1"
).innerHTML = `The average price is $${avgPrice.toFixed(2)}.`

//////////////////////////////////////////////////////////////

let beerPrice = items.filter(function(a) {
  if (a.price > 14 && a.price < 18) {
    return a
  }
})

let html = ""
beerPrice.forEach(function(item) {
  html += item.title + "\n"
})

console.log(beerPrice)

document.querySelector("#answer2").textContent = html

///////////////////////////////////////////////////////

let currencyCode = items.filter(function(str) {
  return str.currency_code === "GBP"
})

console.log(currencyCode)

let html2 = ""
currencyCode.forEach(function(item) {
  html2 += item.title + ""
})

document.querySelector("#answer3").innerHTML = `${html2} costs $18`

/////////////////////////////////////////////////////////////////////

let woodItems = items.filter(function(word) {
  return word.materials.includes("wood")
})

console.log(woodItems)

let html3 = ""
woodItems.forEach(function(item) {
  html3 += item.title + "<br>"
})

document.querySelector("#answer4").innerHTML = `${html3}`

/////////////////////////////////////////////////////////////

let fancyMaterials = items.filter(function(lotsOMaterials) {
  return lotsOMaterials.materials.length >= 8
})

console.log(fancyMaterials)

let html4 = ""
fancyMaterials.forEach(function(item) {
  html4 += item.title + "<br>"
  item.materials.forEach(function(material) {
    html4 += material + "<br>"
  })
})

document.querySelector("#answer5").innerHTML = `${html4}`

///////////////////////////////////////////////////////////////////

let sellers = items.filter(function(people) {
  return people.who_made === "i_did"
})

console.log(sellers)

console.log(sellers.length)

document.querySelector(
  "#answer6"
).innerHTML = `${sellers.length} were made by their sellers.`
