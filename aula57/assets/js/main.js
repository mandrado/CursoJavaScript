/**
 * 76. Praticando com factory functions
 * criar uma calculadora com factory function
 */

function criaCalculadora() {
    return {
        // atributos (variaveis) do objeto ficam no topo da função
        // sempre que preciar do display ele deve ser acessado através
        // do this.display
        display: document.querySelector('.display'),


        // metodos ficam no final da função
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();

        },

        pressionaEnter() {
            this.display.addEventListener('keyup', evento => {
                if (evento.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            // função muito perigosa eval pois é uma brecha
            // que permite executar códigos maliciosos
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Ocorreu um erro!' + e);
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            // aqui this é a calculadora
            document.addEventListener('click', function (e) {
                // aqui this é document
                // pegar todos os eventos do clique da página
                // e com e.target eu vou chegar se o elemnto
                // é um botão
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();

            }.bind(this));
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();