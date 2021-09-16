// Elementos DOM
var btnContar = document.getElementById('btn-contar')

// Eventos DOM
btnContar.addEventListener('click', contar)

function contar() {
	// Elementos DOM
	var inputInicio = document.getElementsByName('input-inicio')[0]
	var inputFim = document.getElementsByName('input-fim')[0]
	var inputPasso = document.getElementsByName('input-passo')[0]
	var divSaida = document.querySelector('div#saida')
	
	// Variáveis
	if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
		alert('ERRO: Valores ausentes. Verifique os valores novamente.')
	} else {
		var inicio = Number(inputInicio.value)
		var fim = Number(inputFim.value)
		if (inputPasso.value <= 0) {
			window.alert('ERRO: O valor do passo é inválido. Passo assumirá valor de 1 (padrão).')
			var passo = 1
		} else {
			var passo = Number(inputPasso.value)
		}
		
		// Elementos criados
		var pContagem = document.createElement('p')
		if (fim > inicio) {
			for (var cont = inicio; cont <= fim; cont += passo) {
				pContagem.innerHTML += `${ cont } &rarr; `
			}
		} else {
			for (var cont = inicio; cont >= fim; cont -= passo) {
				pContagem.innerHTML += `${ cont } &rarr; `
			}
		}
		pContagem.innerText += ' FIM'
		
		divSaida.innerText = ''
		divSaida.appendChild(pContagem)
	}
}