var string_cap = (function() { 
	var string1 = "i am a web developer"
  	var first_letter = string1.charAt(0)
  	first_letter_upper = first_letter.toUpperCase()
  	return first_letter_upper + string1.slice(1)
}())

document.write(string_cap)