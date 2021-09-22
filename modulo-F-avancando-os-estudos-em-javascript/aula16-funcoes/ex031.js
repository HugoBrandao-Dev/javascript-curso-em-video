function parImpar(num) {
	if (num % 2 == 0) {
		return 'Par'
	} else {
		return 'Impar'
	}
}

let res = parImpar(4)
console.log(`O número 4 é ${ res }.`)

console.log(`O número 9 é ${ parImpar(9) }.`)