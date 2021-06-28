/**
 * 41. if, else if e else (2)
 */

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O numero está entre 0 e 5');  
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero está entre 6 e 8');  
} else if (1 === 1){
    //verdadeira é encontrado e não verifica a próxima
    console.log('LITERAL')
} else if (numero >= 9 && numero <= 11) {
    //verdadeira
    console.log('O numero está entre 9 e 11');  
    
}else {
    console.log('O número não está entre 0 e 11');
}