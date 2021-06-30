const h1 = document.querySelector('.container h1');

const dataAtual = new Date();

function diaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
    
        default:
            diaSemanaTexto = 'Dia da semana incorreto';
            break;
    }

    return diaSemanaTexto;
    
}

function mesTexto(mes) {
    let mestxt;
    switch (mes) {
        case 0:
            mestxt = 'janeiro'
            break;
        case 1:
            mestxt = 'fevereiro'
            break;
        case 2:
            mestxt = 'março'
            break;
        case 3:
            mestxt = 'abril'
            break;
        case 4:
            mestxt = 'maio'
            break;
        case 5:
            mestxt = 'junho'
            break;
        case 6:
            mestxt = 'julho'
            break;
        case 7:
            mestxt = 'agosto'
            break;
        case 8:
            mestxt = 'setembro'
            break;
        case 9:
            mestxt = 'outubro'
            break;
        case 10:
            mestxt = 'novembro'
            break;
        case 11:
            mestxt = 'dezembro'
            break;
    
        default:
            mestxt = 'mes incorreto.'
            break;
    }
    return mestxt;
}

function zeroEsquerda(num) {
    return num >=10 ? num : `0${num}`;
}

function formatHora(hora) {
    const hs = zeroEsquerda(hora.getHours());
    const min = zeroEsquerda(hora.getMinutes());
    return `${hs}:${min}`
}

function criaData(data) {
    const diaSemanaTxt = diaSemanaTexto(data.getDay());
    const mes = mesTexto(data.getMonth());
    const hora = formatHora(data);
    
    return (`${diaSemanaTxt}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${hora}`);
    
}

//const dataAtual = new Date('2019-5-5 1:3:15');
console.log(dataAtual.getMonth());

h1.innerHTML = criaData(dataAtual)

console.log(`${diaSemanaTxt}, ${dataAtual.getDate()} de ${mes} de ${dataAtual.getFullYear()} ${hora}`);