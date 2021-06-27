/**
 * Mandrado Santos tem 45 anos, pesa 84 kg
 * tem 1.73 de altura e seu IMC é de 25.925925925925924
 * Mandrado nasceu em 1975.
 */

let dataAtual = new Date();

const nome = 'Mandrado';
const sobrenome = "Silva dos Santos";
const idade = 46; 
const peso = 84;
const alturaEmM = 1.73;
let imc; // Calculo do indice de maca corporal: peso / (altura * altura)
let anoNascimento; 

imc = peso / (alturaEmM * alturaEmM);

anoNascimento = dataAtual.getFullYear() - idade;

console.log(nome,sobrenome,'tem',idade,'anos, pesa', peso,'kg.');
console.log(nome,'tem',alturaEmM,'Metros e seu IMC é de',imc +'.');
console.log(nome,'nasceu em', anoNascimento +'.\n\n');

// fazendo agora com template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`${nome} tem ${alturaEmM} Metros e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);


