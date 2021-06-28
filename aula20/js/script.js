function meuEscopo(){
   
    const meuForm = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function criaPessoa(nome, sobrenome, peso, altura) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };
    }

 


/*     meuForm.onsubmit = function(evento){
         // evitar que o formulário seja enviado a cada clique enviar
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado.');
    };
 */
     // evitar que o formulário seja enviado a cada clique enviar
     // opção mais avançada:

//     let contador = 1;
     function recebeEventoForm (evento){
         evento.preventDefault();
/*          console.log(`O form não foi enviado ${contador}`);
        contador++; */
         const nome = meuForm.querySelector('.nome');
         const sobrenome = meuForm.querySelector('.sobrenome');
         const peso = meuForm.querySelector('.peso');
         const altura = meuForm.querySelector('.altura');
         console.log(nome.value, sobrenome.value, peso.value, altura.value);
         const pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
         pessoas.push(pessoa);
         console.log(pessoas.length);
         resultado.innerHTML = `<p> Quantidade de pessoas na lista: ${pessoas.length} </p>`;
         for (let index = 0; index < pessoas.length; index++) {
             resultado.innerHTML += `<p> ${pessoas[index].nome}, ${pessoas[index].sobrenome}, ${pessoas[index].peso}, ${pessoas[index].altura} </p>`;
          
         };
        
     }
    meuForm.addEventListener('submit', recebeEventoForm);
}

meuEscopo();