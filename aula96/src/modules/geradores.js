const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
// números da variável senha representam as posições ascii dos simbolos existentes no teclado.
const simbolos = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
const geraSimbolo = () => String.fromCharCode(simbolos[rand(0, simbolos.length)]);

export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    /*  
    considerando que o for irá multiplicar a quantidade de caracteres de acordo com a 
    quantidade de true que encontrar devemos unir o conteúdo da variável e utilizar o
    slice para exibir a quantidade de caracteres solicitados. 
    */
    return senhaArray.join('').slice(0,qtd);
}

