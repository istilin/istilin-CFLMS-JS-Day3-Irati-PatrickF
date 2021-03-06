function RGBValRdm() {
  return Math.floor(Math.random() * 256)
}

document.getElementsByClassName("screen one")[0].style.backgroundColor = `rgb(${RGBValRdm()}, ${RGBValRdm()}, ${RGBValRdm()})`
document.getElementsByClassName("screen two")[0].style.backgroundColor = `rgb(${RGBValRdm()}, ${RGBValRdm()}, ${RGBValRdm()})`

let dices = ["images/dice-1.svg", "images/dice-2.svg", "images/dice-3.svg", "images/dice-4.svg", "images/dice-5.svg", "images/dice-6.svg"]
let result = []

document.getElementsByClassName("player one")[0].children[0].innerHTML = prompt("Enter the first player's name please")
document.getElementsByClassName("player two")[0].children[0].innerHTML = prompt("Enter the first player's name please")

function rollDices(screen) {
  let i = 0
  let showWinner = true;
  let interval = setInterval(function() {
    if (i == 14) {
      clearInterval(interval)
      document.getElementsByClassName(`points ${screen}`)[0].children[0].innerHTML = `Your result is <span class = 'result ${screen}'>${result[0] + result[1] + result[2] + 3}</span>`
      for (j = 0; j < document.getElementsByClassName("result").length; j++) {
        if (document.getElementsByClassName("result")[j].innerHTML == "") {
          showWinner = false
        }
      }
      if (showWinner) {
        if (parseInt(document.getElementsByClassName("result one")[0].innerHTML) > parseInt(document.getElementsByClassName("result two")[0].innerHTML)) {
          document.getElementsByClassName("winner one")[0].style.display = "flex"
          document.getElementsByClassName("loser one")[0].style.display = "none"
          document.getElementsByClassName("winner two")[0].style.display = "none"
          document.getElementsByClassName("loser two")[0].style.display = "flex"
        } else {
          document.getElementsByClassName("winner one")[0].style.display = "none"
          document.getElementsByClassName("loser one")[0].style.display = "flex"
          document.getElementsByClassName("winner two")[0].style.display = "flex"
          document.getElementsByClassName("loser two")[0].style.display = "none"
        }
      }
    } else {
      i++
      result = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]
      document.getElementsByClassName(`dice alpha ${screen}`)[0].children[0].src = dices[result[0]]
      document.getElementsByClassName(`dice betta ${screen}`)[0].children[0].src = dices[result[1]]
      document.getElementsByClassName(`dice gamma ${screen}`)[0].children[0].src = dices[result[2]]
    }
  }, 200)
}
//alert(result)
