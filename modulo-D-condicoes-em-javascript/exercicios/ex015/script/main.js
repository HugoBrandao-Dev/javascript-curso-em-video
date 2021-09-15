function verificar() {
	var inputSexo = document.getElementsByName('input-sexo')
	var inputNascimento = document.getElementsByName('input-nascimento')[0]
	
	var data = new Date()
	var anoAtual = data.getFullYear()
	var anoNascimento = inputNascimento.value 
	
	if ((anoNascimento.length == 0 || anoNascimento > anoAtual) || (!inputSexo[0].checked && !inputSexo[1].checked)) {
		alert('ERRO: O ano informado é inválido.')
	} else {
		var divAnalise = document.querySelector('div#analise')
		
		var imgFoto = document.createElement('img')
		imgFoto.setAttribute('id', 'img-foto')
		
		var idade = anoAtual - Number(anoNascimento)
		var genero = inputSexo[0].checked ? 'm' : 'f'
		var srcFoto = ''
		
		if (idade < 10) {
			srcFoto = `./img/foto-crianca-${ genero }.jpg`
		} else if (idade < 30) {
			srcFoto = `./img/foto-jovem-${ genero }.jpg`
		} else if (idade < 50) {
			srcFoto = `./img/foto-adulto-${ genero }.jpg`
		} else {
			srcFoto = `./img/foto-idoso-${ genero }.jpg`
		}
		
		imgFoto.setAttribute('src', srcFoto)

		divAnalise.style.textAlign = 'center'
		divAnalise.innerHTML = `<p>O sexo ${ genero == 'm' ? 'Masculino' : 'Feminino' } tem ${ idade } anos de idade.</p>`
		divAnalise.appendChild(imgFoto)
	}
}