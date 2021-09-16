function calcular() {
	// Elementos DOM
	let inputTabuda = document.getElementsByName('input-tabuada')[0]

	if (inputTabuda.value.length == 0) {
		alert('ERRO: Valor não informado.')
	} else {
		let divSaida = document.getElementById('saida')
		divSaida.innerText = ''

		let valor = inputTabuda.value
		let contador = 1

		do {
			let pConta = document.createElement('p')
			pConta.innerText += `${ valor } x ${ contador } = ${ valor * contador}`
			
			pConta.style.lineHeight = '20px'

			divSaida.appendChild(pConta)
			
			contador++
		} while (contador <= 10)

		divSaida.style.display = 'block'
	}
}