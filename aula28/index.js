/*
46. Objeto Date
*/

//Date(0) corresponde a data zero (01/01/1970) Timestamp unix ou época unix;
const data = new Date(0);
console.log(data.toString());

/**
 * para armazenar três horas em um variáveil eu preciso multiplicar 
 * minuto * segundos * horas * 1000
 * */
const tresHoras = 60 * 60 * 3 * 1000; // corresponde ao fuso horário de São Paulo em miléssimo de segundos

// função construtora Date()
const data1 = new Date(0 + tresHoras);  // exibe a hora zero timestamp 01/01/1970
console.log(data1.toString());

const umDia = 60 * 60 * 24 * 1000; // corresponde a um dia em milésimo de segundos

const data2 = new Date(0 + umDia); // acrescentando um dia na data de origem
console.log(data2.toString());

const data3 = new Date(); // data e hora atual
console.log(data3.toString());

// enviando uma data e hora especifica, neste caso 20/04/2019 às 15h14min27seg999milésimos
const data4 = new Date(2019, 3, 20, 15, 14, 27, 999);  // ano, mes, dia, hora, minuto, segundo, miléssimo de segundos
console.log(data4.toString());
// tem que ter ao menos dois parametros ano e mês
const data5 = new Date(2019, 3);
console.log(data5.toString());

// passar data no formato de string:
const data6 = new Date('2019-04-20 20:20:59'); // ou Date('2019-04-20T20:20:59.100')
console.log(data6.toString());

//obter o dia
console.log('Dia', data6.getDate());
console.log('Mês', data6.getMonth() + 1); // meses começam no 0, se quiser exibir o correto, add 1
console.log('Ano', data6.getFullYear());
console.log('Hora', data6.getHours());
console.log('Min', data6.getMinutes());
console.log('Seg', data6.getSeconds());
console.log('MilSeg', data6.getMilliseconds());
console.log('Dia da Semana', data6.getDay()); // dia da semana, 0 é domingo, 6 é sábado.

// obter os miléssimos de segundos da data/hora atual
// lembrando que é os miléssimos de segundos desde o marco zero até agora.
console.log(Date.now());
const dataAtual = Date.now();
console.log(Date(dataAtual));

//função que formata uma data
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data7 = new Date();
const dataBrasil = formataData(data7);
console.log(dataBrasil);





