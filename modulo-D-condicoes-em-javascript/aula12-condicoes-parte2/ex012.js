var InfoDia = new Date()
var hora = InfoDia.getHours()

console.log(`Agora são exatamente ${ hora } hora(s).`)

if (hora < 12) {
	console.log('Bom dia!!')
} else if (hora < 18) {
	console.log('Boa tarde!!')
} else {
	console.log('Boa noite!!')
}