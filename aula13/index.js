const frutas = ['pera', 'maça', 'banana'];

for (let ind in frutas) {
    console.log(frutas[ind])
}

const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Lúcio',
    idade: 18
};
console.log(' ')
for (let index in pessoa) {
    console.log(`${index}: ${pessoa[index]}`)
}