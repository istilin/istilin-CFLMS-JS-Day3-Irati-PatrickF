math_grade = parseInt(window.prompt("What are your grades in Maths?"))
physics_grade = parseInt(window.prompt("What are your grades in Physics?"))
english_grade = parseInt(window.prompt("What are your grades in English?"))

function sumAv(MG, PG, EG){
	sum = MG + PG + EG
	av = sum/3
	return [sum, av]
}

results = sumAv(math_grade, physics_grade, english_grade)
document.write(`Your grade on Maths is: ${math_grade}. <br>`)
document.write(`Your grade on Physics is: ${physics_grade}. <br>`)
document.write(`Your grade on English is: ${english_grade}. <br>`)
document.write(`Your summed grade is: ${results[0]}. <br>`)
document.write(`Your average grade is: ${results[1]}.`)