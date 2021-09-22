// Elementos DOM
let btnAdicionar = document.getElementById('btn-adicionar')
let btnCalcular = document.getElementById('btn-calcular')
let inputValor = document.getElementsByName('number-valor')[0]
let selectValores = document.getElementsByName('select-valores')[0]
let divSaida = document.querySelector('div#saida')

// Eventos DOM
btnAdicionar.addEventListener('click', adicionarValor)
btnCalcular.addEventListener('click', verificarValores)

// Variáveis
var valores = []

function gerarTagHTML(tipo, conteudo) {
	let tagHTML = document.createElement(tipo)
	tagHTML.innerText = conteudo
	return tagHTML
}

function gerarValoresNoSelect() {
	selectValores.innerText = ''
	for (let indice in valores) {		
		selectValores.appendChild(gerarTagHTML('option', `${ valores[indice] } adicionado.`))
	}
}

function adicionarValor() {
	let valor = Number(inputValor.value)
	if (valor.length === 0 || isNaN(valor) || valor > 100 || valor < 0) {
		alert('ERRO: O valor informado é inválido.')
	} else {
		if (valores.indexOf(valor) >= 0) {
			alert(`OPS: O valor ${ valor } já foi adicionado!!`)
		} else {
			divSaida.style.display = 'none'
			valores.push(valor)
			gerarValoresNoSelect()
		}
	}
	inputValor.value = ''
	inputValor.focus()
}

function verificarValores() {
	divSaida.innerText = ''
	divSaida.style.display = 'block'
	valores.sort()
	if (valores.length === 0) {
		alert('Não há valores a serem calculados.')
	} else {
		let somaValores = 0
		
		for (let indice in valores) {
			somaValores += valores[indice]
		}
		
		let conteudos = [
			`Foram informados ${ valores.length } valores`,
			`O maior valor foi ${ valores[valores.length - 1] }`,
			`O menor valor foi ${ valores[0] }`,
			`O somatório dos valores foi ${ somaValores }`,
			`A média dos valores informados foi ${ (somaValores/valores.length).toFixed(1) }`
		]
		
		for (let indice in conteudos) {
			divSaida.appendChild(gerarTagHTML('p', conteudos[indice]))
		}
	}
}