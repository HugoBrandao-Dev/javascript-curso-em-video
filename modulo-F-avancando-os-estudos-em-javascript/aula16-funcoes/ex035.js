// Exemplo de fatorial utilizando uma função recursiva
let fatorial = function(num) {
	if (num == 1) {
		return 1
	} else {
		return num * fatorial(num - 1)
	}
}

console.log(fatorial(5))