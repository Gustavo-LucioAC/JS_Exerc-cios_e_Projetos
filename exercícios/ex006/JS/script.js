function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const person = {

            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

        };
        pessoas.push(person);
        resultado.innerHTML += `<p>${person.nome} ${person.sobrenome}, ${person.peso}, ${person.altura}</p>`;
    };

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();