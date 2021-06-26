// textos são indexados
//               012345678910      
let umaString = "Um \"Texto\""; //escapar um caracter com \
console.log(umaString);

// podemos exibir um texto com base no seu indice
// com essa opção caso seja passado um valor maior que 
// a lista de texto, irá ocorrer um erro undefind
console.log(umaString[4]);
// podemos exibir com charart
// com essa opção caso seja passa um
// valor maior que a lista, é exibido um caracter vazio
console.log(umaString.charAt(6));
// podemos concatenar
console.log(umaString.concat(' ', 'em', ' um', ' lindo dia.'));
// ou
console.log(umaString + ' em um lindo dia.');
// ou 
console.log(`${umaString} em um lindo dia.`);
// em qual indice incia a palavra "texto"
console.log(umaString.indexOf("texto"));
// quando não encontra exibe -1
// quando encontra exibe a posição inicial do texto.
//procurar um texto a partir de um indice:
console.log(umaString.indexOf("texto", 4));
//procurar do final da string para esquerda
console.log(umaString.lastIndexOf("t"));
//retornar todas as letras minúsculas de um texto
//referente a expressões regulares
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
//procura um texto e retorna o indice onde ele inicia
//procura todos os caracteres minúsculos e exibe a posição do primeiro
console.log(umaString.search(/[a-z]/));
//procurar uma letra e retornar o indice
console.log(umaString.search(/[a-z]/));
//trocar o primeiro caracter que encontrar
console.log(umaString.replace(/[e]/,'x'));
//trocar todos os caracteres que encontrar
umaString = 'O rato roeu a roupa do rei de roma.'
console.log(umaString.replace(/[r]/g,'l'));
//saber o tamanho da string
console.log(umaString.length);
//fatiar o texto e pegar uma parte (tem que pegar um caracter a mais)
console.log(umaString.slice(2,6));
// começar do fim para o inicio da linha, usar negativo
console.log(umaString.slice(-5));
// começar do fim para o inicio da linha, usar negativo e remover uma posição
console.log(umaString.slice(-5,-1));
// dividir a frase pelos seus espaços
console.log(umaString.split(' '));
// dividir a frase pelos seus espaços apenas duas vezes
console.log(umaString.split(' ', 2));
// transformar tudo em maiusculo
console.log(umaString.toUpperCase());
// transformar tudo em minusculo
console.log(umaString.toLowerCase());








