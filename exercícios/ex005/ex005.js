const numero = Number(prompt('Informe um número: '));
const numeroTitulo = document.getElementById('numTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ` `
texto.innerHTML += `<p>A raiz quadrada do número informado é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>Ele é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Ele é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}</p>`;