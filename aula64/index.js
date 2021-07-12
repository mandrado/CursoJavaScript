/**
 * 83. Concatenando arrays
 */

const a1 = [ 1, 2, 3];
const a2 = [4, 5, 6];
// concatenando a1 com a2
const a3 = a1.concat(a2);
console.log(a3);
// concatenando a3 com uma lista de elementos
const a4 = a3.concat([7, 8, 9], 'Mandrado');
console.log(a4);

// spread operator / rest operator ...
const a5 = [...a1, ...a2];
console.log(a5);
// spread / rest operator com listas literais ou strings
const a6 = [...a1, 'Mandrado',...a2, ...[7, 8, 9]];
console.log(a6);
