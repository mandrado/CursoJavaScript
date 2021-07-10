/**
 * 75. Funções fábrica (Factory Functions)
 * São funções que retornam objetos
 * 
 */

// Funções fábrica Cria pessoa, fala e IMC
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, // this chama esse objeto aqui ou a variável que está em argumentos
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            // separando o nome do sobrenome
            valor = valor.split(' ');
            // desta forma o nome completo irá ser separado
            // para um array
            // pegamos o primeiro item do array com shift()
            this.nome = valor.shift();
            // pegamos o restante do array com join(' ') e separamos por espaço, em vez
            // da virgula que seria o padrão join()
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        //quando temos uma função dentro de outra função
        // chamamos de método
        fala: function (assunto = 'falando sobre NADA.') {
            // uso do this
            // ele retorna os valores de quem está chamando o objeto
            return `${this.nome} está falando sobre ${assunto}.`;
        },
        altura,
        peso,
        // a forma de chamar o imc é como uma função imc().
        // porem posso fazer com que ela seja camada como um atributo
        // acrescetando getter (get) na frente.
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Mandrado', 'Santos', 1.73, 80);
const p2 = criaPessoa('Maria', 'Mascarenhas', 1.60, 65);
const p3 = criaPessoa('Dilma', 'Mascarenhas', 1.55, 65);

p1.nomeCompleto = 'Mandrado Silva dos Santos';

console.log(p1.nome + ' tem imc igual a: ' + p1.imc);
console.log(p1.nomeCompleto);
console.log(p1.fala('JS'));
console.log(p3.imc);