const nome = 'Luiz Otávio'
let idade = 30;
let peso = 84;
const altura = 1.8;

//Cálcculo do IMC e da Idade
const calculaIMC = peso / (altura * altura);
const calculaIdade = 2023 - idade;

console.log(nome + ' tem ' + idade + ' anos, ' + 'pesa ' + peso + 'Kg')
console.log('tem ' + altura + ' de altura e seu IMC é de ' + calculaIMC)
console.log(`${nome} naceu em ${calculaIdade}`)
