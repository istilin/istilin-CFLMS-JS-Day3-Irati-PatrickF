function areaVol(boxW, boxH, boxD){
	boxArea = boxW * boxH
	boxVol = boxW * boxH * boxD
	return [boxArea, boxVol]
}
document.write(`The area of the box is: ${areaVol(10, 8, 4)[0]}<br>`)
document.write(`The volume of the box is: ${areaVol(10, 8, 4)[1]}`)
