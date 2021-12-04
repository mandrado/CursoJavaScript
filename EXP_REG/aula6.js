// ^ --> Começa com
// $ --> Termina com

const { cpfs, ips} = require('./base');

console.log(cpfs);

// exibir o range de 0 a 9 em sequencia que for encontrada
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-?\.?[0-9]{2}/g));
// Encontra correspondência com um número. Equivalente a [0-9].
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-?\.?\d{2}/g));
// Encontra correspondência grupos.
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-?\.?\d{2}/g));

console.log(ips);
// exibir o range de 0 a 9 em sequencia que for encontrada
console.log(ips.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g));
// Encontra correspondência com um número. Equivalente a [0-9].
console.log(ips.match(/\d+\.\d+\.\d+\.\d+/g));
// Encontra correspondência grupos.
console.log(ips.match(/(\d+\.){3}\d+/g));

// gerar ips e regras para consulta
// eles devem ser gerados do maior para o menor, caso contrário
// irá trazer o primeiro que combinar com a busca.

// --> FORMA ERRADA <--
// 0 - 9        \d
// 10 - 99      [1-9]\d
// 100 - 199    1\d{2}
// 200 - 249    2[0-4]\d
// 250 - 255    25[0-5]

// --> FORMA CORRETA <--
// 250 - 255    25[0-5]
// 200 - 249    2[0-4]\d
// 100 - 199    1\d{2}
// 10 - 99      [1-9]\d
// 0 - 9        \d

// obtendo o primeiro grupo de ips:
// const ipRegExp = /^(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(\.)/g;
// obtendo todos os grupos de ips
const ipRegExp = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;

for (let i = 0; i <= 300; i++) {
    const ip = `${i}.${i}.${i}.${i}`;
    console.log(ip, ip.match(ipRegExp));
}

console.log(ips.match(ipRegExp));

