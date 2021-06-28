//capturar evento de submit do formulário

// capturar o formulário pelo id #formulário
const meuForm = document.querySelector('#formulario');

meuForm.addEventListener('submit', function (e) {
    //evitar que o formulário seja enviado a cada clique do botão submit
    e.preventDefault(); //console.log('Evento previnido.');

    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value.replace(',', '.'));
    const altura = Number(inputAltura.value.replace(',', '.'));

    if (!peso) {
        setResultado('Peso inválido.', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida.', false);
        return;
    }

    const imc = calculoIMC(peso, altura);
    const resultado = resultadoIMC(imc);

    const msg = `Seu IMC é ${imc} (${resultado})`;

    console.log(imc, resultado);

    setResultado(msg, true);

});

function calculoIMC(peso, altura) {
    const imc = (peso / (altura * altura));
    return imc.toFixed(2);
}

function resultadoIMC(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function criaParagrafo() {
    const p = document.createElement('p');
    return p;

}

function setResultado(msg, isValid) {
    const result = document.querySelector('#resultado');
    result.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('p-resultado');
    } else {
        p.classList.add('p-resultado-bad');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}








