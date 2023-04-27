const elementos = [
    { tag: 'p', texto: 'Qualquer texto' },
    { tag: 'div', texto: 'Frase 1' },
    { tag: 'section', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' }
];

const container = document.querySelector('.cont')
const div = document.createElement('div')

for (i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const tagCriada = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}
container.appendChild(div);