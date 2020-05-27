let dayBefore = function(inputDate) {
	inputDate = new Date(inputDate)
	return new Date(inputDate.setDate(inputDate.getDate() - 1)).toDateString()
}

document.write(dayBefore("Feb 23, 2017"))
