/**
 * 74. Funções imediatas (IIFE)
 * 
 * IIFE (Immediately Invoked Function Expression) é uma função em JavaScript 
 * que é executada assim que definida.
 * 
 * É um Design Pattern também conhecido como Self-Executing Anonymous Function 
 * e contém duas partes principais. A primeira é a função anônima cujo escopo 
 * léxico é encapsulado entre parênteses. Isso previne o acesso externo às 
 * variáveis declaradas na IIFE, bem como evita que estas variáveis locais 
 * poluam o escopo global.
 * 
 */

// criando uma função que é invocada automaticamente quando ela é criada:
// ela deve ser criada dentro de parenteses, e depois chamada com paranteses.

(function () {
    const nome = 'Mandrado'
    console.log('função auto executada: ' + nome);
})();

const nome = 'Maria';
console.log('chamando a variáve nome global: '+nome);

// criando outra função anonima auto executada
(function(){
    // dentro da IIFE eu estou criando uma varíave isolada
    const sobrenome = 'Santos';
    // criando uma função
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    //criando outra função
    function falaNome() {
        console.log(criaNome('Mandrado'));
    }
    //chamando a outra função que vai chamar  primeira
    falaNome();
})();

// criando outra função anonima auto executada recebendo parâmetros:
(function(idade, peso, altura){
    // dentro da IIFE eu estou criando uma varíave isolada
    const sobrenome = 'Santos';
    // criando uma função
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    //criando outra função
    function falaNome() {
        console.log(criaNome('Mandrado'));
    }
    //chamando a outra função que vai chamar  primeira
    falaNome();
    console.log(idade, peso, altura);
})(45, 83, 1.73);