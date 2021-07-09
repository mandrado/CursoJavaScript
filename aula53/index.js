/**
 * 72. Closures
 * 
 * Um closure (fechamento) é uma função que se "lembra" do 
 * ambiente — ou escopo léxico — em que ela foi criada
 * 
 */

// escopo global

//Closure (retornaFuncao) {nome: "Mandrado"}
function retornaFuncao( ){
    //escopo da função parent
    const nome ='Mandrado';
    return function(){
        //escopo da função
        return nome;
    };
}

function retornaFuncao2(nome){
    //escopo da função parent
    return function(){
        //escopo da função
        return nome;
    };
}

const funcao = retornaFuncao();
const funcao2 = retornaFuncao2('Maria');
console.log(funcao); // retorna que a varável é uma função anomima
console.log(funcao()); // ao chamar a função ela retorna o valor de nome
console.dir(funcao());
console.dir(funcao2());