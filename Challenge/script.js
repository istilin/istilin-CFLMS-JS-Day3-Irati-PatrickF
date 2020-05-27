function RGBValRdm() {
  return Math.floor(Math.random() * 256)
}

document.getElementsByClassName("screen one")[0].style.backgroundColor = `rgb(${RGBValRdm()}, ${RGBValRdm()}, ${RGBValRdm()})`
document.getElementsByClassName("screen two")[0].style.backgroundColor = `rgb(${RGBValRdm()}, ${RGBValRdm()}, ${RGBValRdm()})`

let dices = ["images/dice-1.svg", "images/dice-2.svg", "images/dice-3.svg", "images/dice-4.svg", "images/dice-5.svg", "images/dice-6.svg"]
let result = []

function rollDices(screen, callback) {
  let i = 0
  let interval = setInterval(function() {
    if (i == 14) {
      clearInterval(interval)
      callback(result)
    } else {
      i++
      result = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]
      document.getElementsByTagName("img")[0].src = dices[result[0]]
      document.getElementsByTagName("img")[1].src = dices[result[1]]
      document.getElementsByTagName("img")[2].src = dices[result[2]]
    }
  }, 200)
}

rollDices("one", function(result) {
  return result
})
//alert(result)
