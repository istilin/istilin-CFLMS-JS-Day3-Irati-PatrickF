function ageCalculator(birth_year){
	age_up = new Date().getFullYear() - birth_year
	age_low = age_up - 1
	return [age_up, age_low]
}

ages = ageCalculator(1989)
document.write(`You are either ${ages[0]} or ${ages[1]}.`)
