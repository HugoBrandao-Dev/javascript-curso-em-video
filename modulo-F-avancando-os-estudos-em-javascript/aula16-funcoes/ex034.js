function fatorial(valor) {
	let fat = 1
	for (let c = valor; c > 1; c--) {
		fat *= c
	}
	return fat
}

console.log(`O fatorial de 5 é ${ fatorial(5) }.`)