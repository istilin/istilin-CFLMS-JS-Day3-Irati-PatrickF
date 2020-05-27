function ageCalculator(birth_year, current_year){
	age_up = current_year - birth_year
	age_low = age_up - 1
	document.write(`You are either ${age_up} or ${age_low}.`)
}
ageCalculator(1989, 2020)