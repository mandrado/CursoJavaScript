/**
 * 97. Exercício - Validando um CPF (Algoritmo)
 * 
 * 705.484.450-52
 * 
 * Pegar os 9 digitos e multiplicar em sequencia 
 * regressiva:
 * 
 * 7x   0x  5x  4x  8x  4x  4x  5x  0x
 * 10   9   8   7   6   5   4   3   2
 * 70   0   40  58  48  20  16  15  0 = 237
 * 
 * Obter o resto da divisão e subtrair de 11, se maior que 9, considerar ele como 0
 * 11 - (237 % 11) = 5 *(Primeiro dígito)
 * 
 * 
 * 7x   0x  5x  4x  8x  4x  4x  5x  0x  5x
 * 11   10  9   8   7   6   5   4   3   2
 * 77   0   45  32  56  24  20  20  0   10  = 284 
 * 
 * 11 - (284 % 11) = 2 *(Segundo dígito)
 * 
 * ao final comparar se o CPF obtido é igual ao CPF informado
 * 
 * 070.987.720-03
 * 
 */

// limpar o CPF
let cpf = '705.484.450-52'
// substituir tudo que não for número por nada
let cpflimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpflimpo);

console.log(cpfArray.map(el => el));
console.log(cpfArray.reduce((ac, val) => ac + val));
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));


