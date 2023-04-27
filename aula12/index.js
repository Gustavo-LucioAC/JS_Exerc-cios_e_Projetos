const pessoa = function (nome, sobrenome, idade) {

    return {
        fala() {
            return `Olá, me chamo ${nome} ${sobrenome} e tenho ${idade} anos`
        },
        idadeFutura() {
            return `Ano que vem, vou fazer ${++idade}`
        }
    };
}

const pessoa1 = pessoa('Gustavo', 'Lúcio', 31);
console.log(pessoa1.fala(), pessoa1.idadeFutura())
pessoa('Gustavo', 'Lúcio', 31).fala()


