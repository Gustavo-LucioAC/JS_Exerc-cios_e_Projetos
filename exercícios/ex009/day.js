function showDate() {
    const infoDay = document.querySelector('.day')
    let dataAtual = new Date();

    let dayCase;
    let dayWeek = dataAtual.getDay();
    let dia = dataAtual.getDate();
    let mesCase;
    let mes = dataAtual.getMonth();
    let ano = dataAtual.getFullYear();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    let weekDay = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado']
    let month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    switch (dayWeek) {
        case 0:
            dayCase = weekDay[0];
            break;
        case 1:
            dayCase = weekDay[1];
            break;
        case 2:
            dayCase = weekDay[2];
            break;
        case 3:
            dayCase = weekDay[3];
            break;
        case 4:
            dayCase = weekDay[4];
            break;
        case 5:
            dayCase = weekDay[5];
            break;
        case 6:
            dayCase = weekDay[6];
            break;
    }

    switch (mes) {
        case 0:
            mesCase = month[0]
            break;
        case 1:
            mesCase = month[1]
            break;
        case 2:
            mesCase = month[2]
            break;
        case 3:
            mesCase = month[4]
            break;
        case 4:
            mesCase = month[5]
            break;
        case 5:
            mesCase = month[6]
            break;
        case 6:
            mesCase = month[7]
            break;
        case 7:
            mesCase = month[8]
            break;
        case 8:
            mesCase = month[9]
            break;
        case 9:
            mesCase = month[10]
            break;
        case 10:
            mesCase = month[11]
            break;
        case 11:
            mesCase = month[11]
            break;
    }
    function zeroAEsquerda(segundos) {
        return segundos >= 10 ? segundos : `0${segundos}`
    }

    infoDay.innerHTML = `Hoje é ${dayCase}, dia ${dia} de ${mesCase} de ${ano} e são ${horas}:${minutos}:${zeroAEsquerda(segundos)}`;
}
showDate();