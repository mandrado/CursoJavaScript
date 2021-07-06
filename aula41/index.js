/**
 * 60. Exercício com lógica de programação - 01
 * 
 * Escreva uma função que recebe 2 númros e retorne o maior deles
 */

// foma 1
function Maior1(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

// foma 2
function Maior2(x, y) {
    if (x > y) {
        return x;
    }
    return y;
}

// foma 3
function Maior3(x, y) {
    if (x > y) return x;
    return y;
}

// foma 4
function Maior4(x, y) {
    return x > y ? x : y;
}

// forma 5 arroy funcition
const Maior5 = (x, y) => {
    return x > y ? x : y;
}

// forma 6 arroy funcition
const Maior6 = (x, y) => x > y ? x : y;

let x = 2;
let y = 4;
console.log(Maior6(x, y));