let input = parseInt(prompt("Please enter an amount of minutes to convert into hours and minutes."))

function converter(mins) {
	hours = Math.floor(mins / 60)
	minutes = mins % 60
	return [hours, minutes]
}

let result = converter(input)

document.write(`${input} minutes = ${result[0]} hour${result[0] > 1 ? "s" : ""} and ${result[1]} minute${result[1] > 1 ? "s" : ""} `)
