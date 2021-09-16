// Elementos DOM
let btnContar = document.getElementById('btn-contar')

// Eventos DOM
btnContar.addEventListener('click', contar)

function contar() {
	// Elementos DOM
	let inputInicio = document.getElementsByName('input-inicio')[0]
	let inputFim = document.getElementsByName('input-fim')[0]
	let inputPasso = document.getElementsByName('input-passo')[0]
	let divSaida = document.querySelector('div#saida')
	
	// Variáveis
	if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
		alert('ERRO: Valores ausentes. Verifique os valores novamente.')
	} else {
		let inicio = Number(inputInicio.value)
		let fim = Number(inputFim.value)
		let passo
		if (inputPasso.value <= 0) {
			window.alert('ERRO: O valor do passo é inválido. Passo assumirá valor de 1 (padrão).')
			passo = 1
		} else {
			passo = Number(inputPasso.value)
		}
		
		// Elementos criados
		let pContagem = document.createElement('p')
		pContagem.style.lineHeight = '30px'
		if (fim > inicio) {
			for (let cont = inicio; cont <= fim; cont += passo) {
				pContagem.innerHTML += `${ cont } \u{1F449} `
			}
		} else {
			for (let cont = inicio; cont >= fim; cont -= passo) {
				pContagem.innerHTML += `${ cont } \u{1F449} `
			}
		}
		pContagem.innerText += ' \u{1F3C1}'
		
		// Limpando os campos
		divSaida.innerText = ''
		inputInicio.value = ''
		inputFim.value = ''
		inputPasso.value = ''

		divSaida.appendChild(pContagem)

	}
}