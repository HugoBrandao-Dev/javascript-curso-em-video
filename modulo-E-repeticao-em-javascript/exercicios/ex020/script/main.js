function calcular() {
	// Elementos DOM
	let inputTabuda = document.getElementsByName('input-tabuada')[0]

	if (inputTabuda.value.length == 0) {
		alert('ERRO: Valor não informado.')
	} else {
		let selectTabuada = document.getElementsByName('select-tabuada')[0]
		selectTabuada.innerText = ''

		let valor = inputTabuda.value
		let contador = 1

		do {
			let optionConta = document.createElement('option')
			optionConta.innerText += `${ valor } x ${ contador } = ${ valor * contador}`
			
			optionConta.style.lineHeight = '20px'

			selectTabuada.appendChild(optionConta)
			
			contador++
		} while (contador <= 10)

		selectTabuada.style.display = 'block'
	}
}