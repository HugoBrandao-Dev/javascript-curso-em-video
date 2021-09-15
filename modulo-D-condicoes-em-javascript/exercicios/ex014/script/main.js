function carregar() {
	var divMensagem = window.document.getElementById('msg')
	var imgPeriodo = document.getElementsByName('img-periodo')[0]
	var bodyFundo = document.getElementsByTagName('body')[0]
	var divCumprimentos = document.querySelector('div#cumprimentos')

	var data = new Date()
	var hora = 12 //data.getHours()

	divMensagem.innerHTML = `Agora são ${ hora } horas.`

	if (hora < 12) {
		imgPeriodo.src = 'img/manha.jpg'
		bodyFundo.style.backgroundColor = 'rgb(255,220,110)'
		divCumprimentos.innerText = 'Bom dia!!'
	} else if (hora < 18) {
		imgPeriodo.src = 'img/tarde.jpg'
		bodyFundo.style.backgroundColor = 'rgb(232,180,124)'
		divCumprimentos.innerText = 'Boa tarde!!'
	} else {
		imgPeriodo.src = 'img/noite.jpg'
		bodyFundo.style.backgroundColor = 'rgb(94, 76, 43)'
		divCumprimentos.innerText = 'Boa noite!!'
	}
}