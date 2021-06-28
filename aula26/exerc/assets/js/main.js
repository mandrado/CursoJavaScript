function exercIMC() {

    const meuForm = document.querySelector('.form');
    const result = document.querySelector('.resultado');


    function calculoIMC(peso, altura) {
        const imc = (peso / (altura * altura));
        return imc;
    }

    function resultadoIMC(imc) {
        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc <= 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            return 'Obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            return 'Obesidade grau 2';
        } else if (imc > 40) {
            return 'Obesidade grau 3';
        } else {
            return `valor informado é ${imc}`;
        }
    }


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = meuForm.querySelector('.peso').value;
        const altura = meuForm.querySelector('.altura').value;

        if (peso == '') {
            result.innerHTML = 'Preencha o campo peso';

        } else if (altura == '') {
            result.innerHTML = 'Preencha o campo altura';

        } else if (isNaN(peso.replace(',', '.')) || isNaN(altura.replace(',', '.'))) {
            result.innerHTML = 'Preencha com números os campos peso e altura';
        }

        else {
            let imc = calculoIMC(parseFloat(peso.replace(',', '.')), parseFloat(altura.replace(',', '.')));

            let resultado = resultadoIMC(imc);

            console.log(imc.toFixed(2), resultado);

            result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (${resultado}) </p>`;

        }




    }
    meuForm.addEventListener('submit', recebeEventoForm);
}

exercIMC();






