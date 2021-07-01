const h1 = document.querySelector('.container h1');

const dataAtual = new Date();

function diaSemanaTexto(diaSemana) {
    const diaSemanaTexto = ['domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diaSemanaTexto[diaSemana];
}

function mesTexto(mes) {
    const mestxt = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
        'julho', 'agosto', 'setembro', 'outubro','novembro', 'dezembro'];
    return mestxt[mes];
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

//console.log(`${diaSemanaTxt}, ${dataAtual.getDate()} de ${mes} de ${dataAtual.getFullYear()} ${hora}`);

h1.innerHTML = criaData(dataAtual);


/* const opcoes = {
    dateStyle: 'full',
    timeStyle: 'Short'
}; */

//h1.innerHTML = dataAtual.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
//h1.innerHTML = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short'}).format(dataAtual);
