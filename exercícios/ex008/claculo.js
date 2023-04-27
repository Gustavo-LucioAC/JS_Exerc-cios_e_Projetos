function imcCalculo() {
    const imcInfo = document.querySelector('.calculo');
    const resultado = document.querySelector('.resultado');

    alert('Aquji chegou')

    function recebeEventoForm(evento) {
        evento.preventDefault();
        resultado.innerHTML = '';


        const peso = parseFloat(document.querySelector('.ps').value);
        const altura = parseFloat(document.querySelector('.alt').value);

        function calculo(x, y) {
            const calculo = x / (y ** 2);
            return calculo;
        }

        function condicion(x) {
            if (x < 18.5) {
                resultado.innerHTML += `<p>${x}<br>Você está abaixo do peso</p>`
                console.log('está funcionando')
            } else if (x >= 18.5 && x <= 24.9) {
                resultado.innerHTML += `<p>${x}<br>Seu peso está normal</p>`
            } else if (x >= 25 && x <= 29.9) {
                resultado.innerHTML += `<p>${x}<br>Você está com sobrepeso</p>`
            } else if (x >= 30 && x <= 34.9) {
                resultado.innerHTML += `<p>${x}<br>Você está com obesidade grau 1</p>`
            } else if (x >= 35 && x <= 39.9) {
                resultado.innerHTML += `<p>${x}<br>Você está com obesidade grau 2</p>`
            } else if (x > 40) {
                resultado.innerHTML += `<p>${x}<br>Você está com obesidade grau 3</p>`
            };
        };
        condicion(calculo(peso, altura));
    };

    imcInfo.addEventListener('click', recebeEventoForm);
};
imcCalculo();