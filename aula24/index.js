/**
 * 40. if, else if e else (1)
 * If pode ser usado sozinho
 * Sempre que utilizo a palavra else, preciso de um if antes
 * Eu posso ter vários else e ifs na checagem
 * Só posso ter um else na checagem
 * Podemos usar condições sem else if, utilizando apenas if e else
 */

/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/
const hora = 25;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite!');
}else {
    console.log('Valor não corresponde a uma hora do dia');
}