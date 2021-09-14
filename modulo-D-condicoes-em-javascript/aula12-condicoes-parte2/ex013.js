var infoDia = new Date()
var diaSemana = infoDia.getDay() // Para o JavaScript, a semana começa com 0 (domingo).
var resposta = null

switch(diaSemana) {
	case 0:
		resposta = 'Domingo'
		break
	case 1:
		resposta = 'Segunda-Feira'
		break
	case 2:
		resposta = 'Terça-Feira'
		break
	case 3:
		resposta = 'Quarta-Feira'
		break
	case 4:
		resposta = 'Quinta-Feira'
		break
	case 5:
		resposta = 'Sexta-Feira'
		break
	case 6:
		resposta = 'Sábado'
		break
	default:
		resposta = 'um dia inválido'
		break
}

console.log(`O dia ${ diaSemana } é ${ resposta }.`)