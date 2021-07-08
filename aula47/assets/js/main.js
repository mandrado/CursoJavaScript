//66. Exercício - Criando um timer com setInterval

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function getDataSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarTimer() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = getDataSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciarTimer();
        relogio.classList.remove('pausa');
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausa');
    }
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausa')
    }
    
});

/* iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    iniciarTimer();
    relogio.style.color = 'black';
}); */

/* pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.style.color = 'red';
}); */

/* zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'black';
}); */




