const {lookahead } = require('./base');

console.log(lookahead);

// Exibir linhas que terminam com active
console.log(lookahead.match(/.+[^in]active$/gim));

// Exibir linhas que terminam com active, omitindo a palavra active
// Positive lookahead (frases que terminam com active)
console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookahead (frases que terminam com inactive)
console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// Negative ! lookahead (frases que não terminam com active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative ! lookahead (frases que não terminam com inactive)
console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// Positive lookbehind (frases que começam com ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s)\S+.*/gim));

// Negative lookbehind (frases que não começam com ONLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

// Negative lookbehind (frases que não começam com ONLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
111.111.111-11
222.222.222-22
147.285.963-10
`

// exibir todos os CPF que não possui sequência de números repetidos.
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));