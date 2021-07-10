/**
 * 78. Calculadora com função construtora
 * criar uma calculadora com constructor function
 */

function Calculadora() {

    this.display = document.querySelector('.display');


    // atributos (variaveis) do objeto ficam no topo da função
    // sempre que preciar do display ele deve ser acessado através
    // do this.display



    // metodos ficam no final da função
    this.inicia = () => {
        //tudo começa nesse método inicia
        this.cliqueBotoes();
        this.pressionaEnter();

    };
    
        this.cliqueBotoes = () => {
            // aqui this é a calculadora
            document.addEventListener('click', event => {
                // aqui this é document
                // pegar todos os eventos do clique da página
                // e com e.target eu vou chegar se o elemnto
                // é um botão
                const el = event.target;
                if (el.classList.contains('btn-num')) this.addNumDisplay(el);
                if (el.classList.contains('btn-clear')) this.clearDisplay();
                if (el.classList.contains('btn-del')) this.del();
                if (el.classList.contains('btn-eq')) this.realizaConta();
    
            });
        };

    this.pressionaEnter = () => {
        document.addEventListener('keyup', evento => {
            if (evento.key === 'Enter') {
                this.realizaConta();
            }
        });
    };
    
    // metodo que realiza a conta:
    this.realizaConta = () => {
        // função muito perigosa eval pois é uma brecha
        // que permite executar códigos maliciosos
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida!');
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('Ocorreu um erro!' + e);
            return;
        }
    };


    this.addNumDisplay = el => {
        // adiciona no campo display o texto que está
        // no elemento do botão precionado
        this.display.value += el.innerText;
        // cada vez que clico no botão eu preciso tirar o foco do 
        // botão e mudar o foco para o display
        this.display.focus();
    }
    // o método clear limpa o display com um valor vazio:
    this.clearDisplay = () => this.display.value = '';
    // o método del apaga um elemento do display
    this.del = () => this.display.value = this.display.value.slice(0, -1);



}

// criando uma nova instância do objeto Calculadora
const calculadora = new Calculadora();
//chamando o método inicia do objeto calculadora
calculadora.inicia();