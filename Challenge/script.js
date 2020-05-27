function RGBValRdm() {
  return Math.floor(Math.random() * 256)
}
document.getElementsByClassName("screen one")[0].style.backgroundColor = `rgb(${RGBValRdm()}, ${RGBValRdm()}, ${RGBValRdm()})`
document.getElementsByClassName("screen two")[0].style.backgroundColor = `rgb(${RGBValRdm()}, ${RGBValRdm()}, ${RGBValRdm()})`
