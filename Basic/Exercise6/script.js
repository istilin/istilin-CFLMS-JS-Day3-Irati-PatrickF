function product(values){
	let x = 1
	for (i = 0; i < values.length; i++) {
		x = x * values[i]
	}
	return x
}
document.write(`The product of all values is: ${product([1,3,7,10,2])}`)
