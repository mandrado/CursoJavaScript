/**
 * 37. Operadores de comparação
 * 
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * < menor que ou igual a
 * == igualdade (valor) <-- funciona mas não será usado **
 * === igualdade estrita (valor e tipo)
 * != diferente (valor) <-- funciona mas não será usado **
 * !== diferente estrita (valor e tipo)
 * 
 */

//expressão
console.log(10 > 5);  // true
console.log(10 >= 5);  // true
console.log(10 >= 11);  // false

console.log(5 > 10);  // true
console.log(5 >= 10);  // true
console.log(11 >= 10);  // false

console.log('== igualdade (valor) <-- funciona mas não será usado pois só verifica o valor** ');
const num1 = '10'; // string
const num2 = 10; // number
const comp = num1 == num2; 
console.log(comp); // true

console.log(' === igualdade estrita (valor e tipo)');
const num3 = '10'; // string
const num4 = 10; // number
const comp2 = num3 === num4; 
console.log(comp2); // false

console.log('!= diferente (valor) <-- funciona mas não será usado **');
const num5 = '10'; // string
const num6 = 10; // number
const comp3 = num5 != num6; 
console.log(comp3); // false

console.log(' !== diferente estrita (valor e tipo)');
const num7 = '10'; // string
const num8 = 10; // number
const comp4 = num7 !== num8; 
console.log(comp4); // true




