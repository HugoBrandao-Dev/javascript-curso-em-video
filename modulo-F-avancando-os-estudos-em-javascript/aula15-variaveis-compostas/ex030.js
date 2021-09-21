let num = [5,8,2,9,3]

console.log(`Nosso vetor é o ${ num }`)
console.log(`O vetor tem ${ num.length } elemento(s).`)
console.log(`A posição 2 é ocupada pelo valor ${ num[1] }, mas o índice 2 é ocupado por ${ num[2] }.`)
console.log(`O vetor já ordenado é ${ num.sort() }`)

num.push(7)

console.log(`O vetor recebeu 7, seu novo valor é ${ num }`)

console.log('UTILIZANDO O FOR NORMAL:')
for (let pos = 0; pos < num.length; pos++) {
	console.log(`No índice ${ pos } temos o valor ${ num[pos] }.`)
}

console.log('UTILIZANDO O FOR IN:')
for (let indice in num) {
	console.log(`Na ${ Number(indice) + 1 }ª POSIÇÃO temos ${ num[indice] }.`)
}

console.log(`O valor 8 está no índice ${ num.indexOf(8) }`)